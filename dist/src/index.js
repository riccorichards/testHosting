"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const postgres_1 = __importDefault(require("./postgres"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "",
    credentials: true,
}));
const port = process.env.PORT;
(0, api_1.default)(app);
postgres_1.default
    .initialize()
    .then(() => console.log({ msg: "Data Source is available" }))
    .catch((err) => console.error({ msg: "Error during Data Source initialization", err: err }));
app.listen(port, () => {
    console.log(`We are running on the ${port}`);
});
