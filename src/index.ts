import express, { Express } from "express";
import * as config from "./config";
import { chat } from "./routes/chat";

export const app: Express = express();
const PORT = config.PORT;
const HOST = config.HOST;
app.use(express.json());
app.use("/chat", chat);

app.listen(PORT, () => {
  const url = `${HOST}:${PORT}`;
  console.log(`[server]: Server is running at ${url}`);
});
