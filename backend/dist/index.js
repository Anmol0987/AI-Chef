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
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const client = new client_1.PrismaClient();
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield client.user.findMany();
    res.send(data);
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, firstName, middleName, lastName, email } = req.body;
    console.log(req.body);
    const response = yield client.user.create({
        data: {
            username,
            password,
            firstName,
            middleName,
            lastName,
            email,
        },
    });
    if (!response) {
        res.send("User not created");
    }
    res.send(response);
}));
app.listen(3001, () => {
    console.log("Server running on port 3001");
});
