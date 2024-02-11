"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const test_entity_1 = __importDefault(require("./test.entity"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.POSTGRES_URL,
    entities: [test_entity_1.default],
    synchronize: true,
    logging: false,
});
exports.default = appDataSource;
