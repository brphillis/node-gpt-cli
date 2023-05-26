"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
exports.chat = express_1.default.Router();
exports.chat.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://api.openai.com/v1/models", {
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
        });
        const models = response.data.data;
        res.json({ models });
    }
    catch (error) {
        console.error(error.response.data);
        res.status(500).json({ error: "Something went wrong." });
    }
}));
exports.chat.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message } = req.body;
        const response = yield axios_1.default.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `${message}` }],
            max_tokens: 100,
            temperature: 0.7,
        }, {
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
                // "OpenAI-Organization": "org-UPiwKtTxzdb9SiZceyoEd0r1",
            },
        });
        const firstResponse = response.data.choices[0].message.content;
        console.log("RESSO", response.data.choices[0].message.content);
        res.json({ firstResponse });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong." });
    }
}));
exports.default = app;
