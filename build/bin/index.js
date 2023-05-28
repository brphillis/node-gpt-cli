#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const fs_1 = __importDefault(require("fs"));
const methods_1 = require("../methods");
const options = yargs_1.default
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
    coerce: (file) => fs_1.default.readFileSync(file, "utf8"),
})
    .help(true).argv;
const { m, f } = options;
(0, methods_1.getResponse)(m, f)
    .then((response) => {
    console.log("Response:", response);
})
    .catch((error) => {
    console.error("Error:", error);
});
