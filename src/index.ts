import express, { Express } from "express";
import * as config from "./config";
import { chat } from "./routes/chat";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler";

export const app: Express = express();
const port = config.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use("/chat", chat);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
