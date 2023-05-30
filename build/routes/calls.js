"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calls_1 = require("../controllers/calls");
const sesion_1 = require("../middlewares/sesion");
const route = (0, express_1.Router)();
route.get('/', sesion_1.checkToken, calls_1.CallsController.getAll);
exports.default = route;
