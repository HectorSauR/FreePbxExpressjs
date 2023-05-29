"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calls_1 = __importDefault(require("./calls"));
const auth_1 = __importDefault(require("./auth"));
const routes = (0, express_1.Router)();
routes.use("/auth", auth_1.default);
routes.use("/calls", calls_1.default);
exports.default = routes;
