#!/usr/bin/env node

import yargs from "yargs";
import fs from "fs";
import { getResponse } from "../methods";

interface Options {
  m: string;
  f: string;
  _: string[];
  $0: string;
}

const options: Options = yargs
  .usage("Usage: $0 [options]")
  .option("m", {
    alias: "m",
    describe: "Enter a question for GPT",
    type: "string",
    demandOption: true,
  })
  .option("f", {
    alias: "file",
    describe: "Read text from a file",
    type: "string",
    coerce: (file) => fs.readFileSync(file, "utf8"),
  })
  .help(true).argv as Options;

const { m, f } = options;

getResponse(m, f)
  .then((response) => {
    console.log("Response:", response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
