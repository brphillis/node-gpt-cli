import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.GPT_APP_PORT;
export const HOST = process.env.GPT_APP_HOST;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
