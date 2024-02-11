"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const repo_1 = __importDefault(require("./repo"));
const initialize_1 = __importDefault(require("./initialize"));
const api = (app) => {
    const repo = new repo_1.default(initialize_1.default);
    const service = new service_1.default(repo);
    app.post("/create", async (req, res) => {
        try {
            const newTest = await service.CreateTestService(req.body);
            return res.status(201).json(newTest);
        }
        catch (error) {
            return res.status(500).json({ msg: "Error" });
        }
    });
    app.get("/post", async (req, res) => {
        try {
            const posts = await service.ReturnPostsService();
            return res.status(200).json(posts);
        }
        catch (error) {
            return res.status(500).json({ msg: "Error" });
        }
    });
};
exports.default = api;
