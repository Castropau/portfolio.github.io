import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ChatHistory, ChatSettings } from "@/app/types";
import { chattogemini } from "@/app/utils/gemini";

export const runtime = 'nodejs'; // Siguraduhin na Node.js runtime

let questionCount = 0;
let lastResetDate = new Date().toDateString();
const DAILY_LIMIT = 50;

function resetIfNewDay() {
  const today = new Date().toDateString();
  if (today !== lastResetDate) {
    questionCount = 0;
    lastResetDate = today;
  }
}

async function loadPdfText() {
  try {
    // I-require ang pdf-parse dito sa loob para iwas error sa bundling
    const pdf = require("pdf-parse");
    
    const pdfPath = path.join(process.cwd(), "public", "data", "Paulo_Castro_Resume.pdf");
    
    if (!fs.existsSync(pdfPath)) {
      console.error("❌ PDF file not found at:", pdfPath);
      return "No manual found.";
    }

    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdf(dataBuffer);

    return pdfData.text || "";
  } catch (error) {
    console.error("❌ Error reading PDF:", error);
    return "";
  }
}

export async function POST(request: Request) {
  try {
    resetIfNewDay();

    if (questionCount >= DAILY_LIMIT) {
      return NextResponse.json({
        response: "Sorry, please come back tomorrow. You already reached 50 questions!",
      }, { status: 200 });
    }

    // Siguraduhin na JSON ang nakuha
    const body = await request.json();
    const { userMessage, history, settings } = body as {
      userMessage: string;
      history: ChatHistory;
      settings: ChatSettings;
    };

    if (!userMessage) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    const pdfText = await loadPdfText();
    const lowerMsg = userMessage.trim().toLowerCase();

    // Greetings logic
    if (["hi", "hello", "hey", "good morning", "good afternoon"].includes(lowerMsg)) {
      return NextResponse.json({
        response: "Hi! I'm Paulo Castro. Feel free to ask me any questions about my experience, skills, projects, or anything else! 😊",
      });
    }

    const combinedMessage = `
You are Paulo Castro, a Full Stack Developer and IT Student. Answer questions about yourself based on this information:

${pdfText}

Key Points About You:
- You're a Full Stack Developer currently working at Alcon (Front-end Developer, 2025-Present)
- You're an IT Student at Quezon City University studying BS Information Technology
- You have experience with React, Next.js, TypeScript, Tailwind CSS for frontend
- You know Node.js, PHP, Python, Django for backend
- You're skilled in databases like PostgreSQL, MySQL, and Supabase
- You've done Flutter mobile development
- Your notable projects include: ERP System for Engineers, Skylar Versatile, Activities App, Allies Arena
- Contact: 09810851408 | Email: castro.paulo5.00@gmail.com
- Location: Quezon City, Metro Manila, Philippines

Instructions:
1. Answer naturally and conversationally as Paulo Castro
2. Be friendly and approachable
3. Provide specific details from your resume when relevant
4. If asked about something not in your resume, acknowledge it and stay focused on what you do know
5. When appropriate, mention your work at Alcon or your internship at Meta Core Systems

User Question: ${userMessage}
Your Response:`;

    // Increment question count
    questionCount++;

    const aiResponse = await chattogemini(combinedMessage, history, settings);

    return NextResponse.json({ response: aiResponse });

  } catch (error: any) {
    console.error("🚀 API Route Error:", error);
    // Ibalik ang JSON kahit may error para hindi mag-Unexpected Token < ang frontend
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}