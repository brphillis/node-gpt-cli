import axios, { AxiosResponse } from "axios";
import express, { Request, Response } from "express";
import { OPENAI_API_KEY } from "../../config";

const app = express();
app.use(express.json());

export const chat = express.Router();

chat.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://api.openai.com/v1/models", {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    const models = response.data.data;
    res.json({ models });
  } catch (error: any) {
    console.error(error.response.data);
    res.status(500).json({ error: "Something went wrong." });
  }
});

chat.post("/", async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const response: AxiosResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${message}` }],
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const firstResponse = response.data.choices[0].message.content;
    res.json({ firstResponse });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

export default app;
