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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const database_1 = require("../database");
const jwt_1 = require("../utils/jwt");
const loginUser = (item) => __awaiter(void 0, void 0, void 0, function* () {
    let [count] = yield database_1.connectionMatriz.execute(`SELECT COUNT(*) AS count
        FROM mysql.user
        WHERE User = ? 
        AND Password = PASSWORD('${item.password}');`, [item.user]);
    if (count[0].count != 0) {
        const token = (0, jwt_1.generarToken)(item.user);
        return token;
    }
    else {
        return false;
    }
});
exports.loginUser = loginUser;
