"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = __importDefault(require("./postgres"));
const test_entity_1 = __importDefault(require("./test.entity"));
const initializedRepo = postgres_1.default.getRepository(test_entity_1.default);
exports.default = initializedRepo;
