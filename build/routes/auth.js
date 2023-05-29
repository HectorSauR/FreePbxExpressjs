"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const sesion_1 = require("../middlewares/sesion");
const route = (0, express_1.Router)();
route.post('/validate_token', sesion_1.checkToken);
route.post('/login', auth_1.AuthController.loginAuth);
exports.default = route;
