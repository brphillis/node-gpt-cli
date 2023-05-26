import express, { Express } from "express";
import * as config from "./config";
import { chat } from "./routes/chat";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler";
import yargs from "yargs";

export const app: Express = express();
const port = config.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use("/chat", chat);

// const argv = yargs(process.argv.slice(2)).argv as any;
// console.log(argv);

// if (argv.build == "uat") {
// } else {
//   console.log("other build");
// }

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
