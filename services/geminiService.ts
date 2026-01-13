
import { GoogleGenAI } from "@google/genai";
import { Language } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTerminalResponse = async (input: string, lang: Language) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The user is interacting with the portfolio of Jorge Luis Castillo.
      Profile: 4th-year CS student & Android Developer at Xetid (Cuba).
      Experience: 2+ years in Android (Kotlin, Jetpack Compose), Spring Boot (Java), React.
      The current UI language is ${lang === 'en' ? 'English' : 'Spanish'}.
      
      User input: "${input}"
      
      Respond in ${lang === 'en' ? 'English' : 'Spanish'}. 
      Keep it professional, concise, and related to your persona as a developer.`,
      config: {
        systemInstruction: `You are the AI interface for Jorge Luis Castillo's portfolio. 
        You are helpful, technical, and friendly. Always respect the language setting (${lang}).`,
        maxOutputTokens: 250,
      }
    });

    return response.text || (lang === 'en' ? "Command processed." : "Comando procesado.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'en' ? "Error connecting to console backend." : "Error conectando con el backend de la consola.";
  }
};
