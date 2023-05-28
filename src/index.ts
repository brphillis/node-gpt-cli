import express, { Express } from "express";
import * as config from "./config";
import { chat } from "./routes/chat";

export const app: Express = express();
const port = config.PORT;
app.use(express.json());
app.use("/chat", chat);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
