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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallsService = void 0;
// import { Brand } from "../interfaces/brand";
const database_1 = require("../database");
class CallsService {
}
exports.CallsService = CallsService;
_a = CallsService;
CallsService.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    let matriz = yield _a.getAllMatriz();
    let suc1 = yield _a.getAllSuc1();
    let suc2 = yield _a.getAllSuc2();
    for (let obj of matriz) {
        obj.sucursal = "matriz";
    }
    for (let obj of suc1) {
        obj.sucursal = "suc1";
    }
    for (let obj of suc2) {
        obj.sucursal = "suc2";
    }
    let resultado = [...matriz, ...suc1, ...suc2];
    return resultado;
});
CallsService.getAllMatriz = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connectionMatriz.execute('SELECT * FROM cdr');
    return rows;
});
CallsService.getAllSuc1 = () => __awaiter(void 0, void 0, void 0, function* () {
    let rows;
    try {
        [rows] = yield database_1.connectionSuc1_replication.execute('SELECT * FROM cdr');
    }
    catch (e) {
        [rows] = yield database_1.connectionSuc1.execute('SELECT * FROM cdr');
    }
    return rows;
});
CallsService.getAllSuc2 = () => __awaiter(void 0, void 0, void 0, function* () {
    let rows;
    try {
        [rows] = yield database_1.connectionSuc2_replication.execute('SELECT * FROM cdr');
    }
    catch (e) {
        [rows] = yield database_1.connectionSuc2.execute('SELECT * FROM cdr');
    }
    return rows;
});
