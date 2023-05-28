"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPENAI_API_KEY = exports.HOST = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.GPT_APP_PORT;
exports.HOST = process.env.GPT_APP_HOST;
exports.OPENAI_API_KEY = process.env.OPENAI_API_KEY;
