import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { chattogemini } from "@/app/utils/gemini";

export const runtime = 'nodejs'; // Importante para sa fs at pdf-parse

export async function POST(request: Request) {
  try {
    // 1. Try to parse JSON body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
    }

    const { userMessage, history, settings } = body;

    // 2. Load PDF safely
    let pdfText = "";
    try {
      const pdf = require("pdf-parse"); // Require inside to avoid bundling issues
      const pdfPath = path.join(process.cwd(), "public", "data", "manual.pdf");
      
      if (fs.existsSync(pdfPath)) {
        const dataBuffer = fs.readFileSync(pdfPath);
        const pdfData = await pdf(dataBuffer);
        pdfText = pdfData.text;
      } else {
        console.warn("⚠️ Manual PDF not found at:", pdfPath);
      }
    } catch (pdfErr) {
      console.error("❌ PDF Parsing Error:", pdfErr);
      // Ituloy pa rin ang AI kahit walang PDF text
    }

    // 3. AI logic
    const combinedMessage = `
      Context: ${pdfText}
      User Question: ${userMessage}
    `;

    const aiResponse = await chattogemini(combinedMessage, history, settings);

    return NextResponse.json({ response: aiResponse });

  } catch (error: any) {
    console.error("🚀 API CRASHED:", error);
    // Eto ang pinaka-importante: Laging magbalik ng JSON para hindi mag-Unexpected Token < ang frontend
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}