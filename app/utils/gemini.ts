//google-gemini-clone/src/utils/geminiHelpers.ts
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatHistory, ChatSettings } from "../types";
// import { ChatHistory, ChatSettings } from "@/types";
const apiKey = process.env.GEMINI_API_KEY;


if (!apiKey) {
  throw new Error(
    "GEMINI_API_KEY is not defined in the environment variables."
  );
}

const genAI = new GoogleGenerativeAI(apiKey);

// export async function chattogemini(
//   userMessage: string,
//   history: ChatHistory,
//   settings: ChatSettings
// ): Promise<string> {
//   const model = genAI.getGenerativeModel({
//     model: settings.model || "gemini-1.5-flash",
//     systemInstruction:
//       settings.systemInstruction || "you are a helpful assistant",
//   });

//   const generationConfig: GenerationConfig = {
//     temperature: settings.temperature || 1,
//     topP: 0.95,
//     responseMimeType: "text/plain",
//   };

//   const chatSession = model.startChat({
//     generationConfig,
//     history: history,
//   });

//   try {
//     const result = await chatSession.sendMessage(userMessage);
//     return result.response.text();
//   } catch (error) {
//     console.error("Error interacting with the model:", error);
//     throw error;
//   }
// }
export async function chattogemini(
  userMessage: string,
  history: ChatHistory,
  settings: ChatSettings
): Promise<string> {
  const model = genAI.getGenerativeModel({
    model: settings.model || "gemini-2.5-flash", // Use 1.5-flash which is more stable
    systemInstruction: settings.systemInstruction || "you are a helpful assistant",
  });

  // Filter out any 'model' messages from history for initialization
  const filteredHistory = history.filter((msg) => msg.role === "user");

  const chatSession = model.startChat({
    generationConfig: {
      temperature: settings.temperature || 1,
      topP: 0.95,
      responseMimeType: "text/plain",
    },
    history: filteredHistory, // only user messages
  });

  const maxRetries = 3;
  let lastError: any;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await chatSession.sendMessage(userMessage);
      return result.response.text();
    } catch (error: any) {
      lastError = error;
      
      // Check if it's a 503 Service Unavailable error
      if (error?.status === 503) {
        console.warn(`⚠️ API Overloaded (Attempt ${attempt}/${maxRetries}), retrying in ${attempt * 2}s...`);
        
        if (attempt < maxRetries) {
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, attempt * 2000));
          continue;
        }
      }
      
      // For other errors, fail immediately
      console.error("Error interacting with the model:", error);
      throw error;
    }
  }

  // If all retries failed, throw the last error
  throw lastError;
}

