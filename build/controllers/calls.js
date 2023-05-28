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
exports.CallsController = void 0;
const calls_1 = require("../services/calls");
class CallsController {
}
exports.CallsController = CallsController;
_a = CallsController;
CallsController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield calls_1.CallsService.getAll();
        res.json(response);
    }
    catch (e) {
        res.json(e);
    }
});
