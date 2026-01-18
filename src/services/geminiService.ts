import {GoogleGenAI} from "@google/genai";
import {Language} from "../constants";

const ai = new GoogleGenAI({apiKey: process.env.API_KEY || ""});

export const getTerminalResponse = async (input: string, lang: Language) => {
    try {
        const languageName = lang === "en" ? "English" : "Spanish";

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `
User input:
"${input}"
      `,
            config: {
                systemInstruction: `
You are the AI-powered terminal assistant of Jorge Luis Castillo's personal portfolio website.

### About Jorge Luis Castillo
- Computer Science graduate.
- Android Developer at Xetid, a Cuban technology company.
- Over 3 years of professional experience in software development.
- Specialized in Android development using Kotlin and Jetpack Compose.
- Strong knowledge of clean architecture, modularization, and modern Android best practices.
- Backend experience with Spring Boot (Java) and RESTful APIs.
- Frontend experience with React and JavaScript.
- Passionate about building scalable, maintainable, and high-quality mobile solutions for the Cuban ecosystem.
- Strong believer in continuous learning and clean code.

### Your Role
- Respond **as Jorge Luis Castillo**, in first person when appropriate.
- Act as a professional developer explaining his experience, skills, projects, or technical concepts.
- Be clear, concise, and confident.
- Provide technical depth when the question requires it, but avoid unnecessary verbosity.
- If the input is vague, infer intent based on a portfolio context.

### Language Rules
- Respond strictly in ${languageName}.
- Maintain a professional and friendly tone suitable for a portfolio.

### Constraints
- Do NOT invent experience, technologies, or achievements.
- If something is outside Jorge’s scope, say so clearly and professionally.

Now generate the best possible response.
        `,
                maxOutputTokens: 800
            }
        });

        return (
            response.text ||
            (lang === "en"
                ? "Command executed successfully."
                : "Comando ejecutado correctamente.")
        );
    } catch (error) {
        console.error("Gemini Error:", error);
        return lang === "en"
            ? "Error connecting to the AI console."
            : "Error al conectar con la consola de IA.";
    }
};
