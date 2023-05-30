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
exports.checkToken = void 0;
const jwt_1 = require("../utils/jwt");
// const revisarSesion = async (req: Request, res: Response, next: NextFunction) => {
//     try{
//         const jwtRecibida = req.headers.authorization || "";
//         const jwt = jwtRecibida.split(" ").pop();
//         const sesion = verificarToken(`${jwt}`);
//         if(sesion){
//             var obj = JSON.parse(JSON.stringify(sesion));
//             let usuario = await UsuariosService.getUserById(obj['id']);
//             const estatus = usuario[0].ESTATUS;
//             if(estatus == 'A'){
//                 const puesto = usuario[0].PUESTO.ID;
//                 const est_puesto = await PuestosService.getPuestoId(puesto);
//                 if(est_puesto[0].ESTATUS == "A"){
//                     const coord = usuario[0].COORDINACION.ID;
//                     const est_coord: any = await CoordinacionesService.getCoordinacionId(coord);
//                     if(est_coord[0].ESTATUS == "A"){
//                         next();
//                         return;
//                     }
//                 }  
//             }
//         }
//         res.status(401).send("SESION INVALIDA");
//     }catch(e){
//         res.status(400);
//         res.send("SESION INVALIDA");
//     }
// }
const checkToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtRecibida = req.headers.authorization || "";
        const jwt = jwtRecibida.split(" ").pop();
        const sesion = (0, jwt_1.verificarToken)(`${jwt}`);
        if (sesion) {
            next();
            return;
        }
        res.status(401).send("SESION INVALIDA");
    }
    catch (e) {
        res.status(400);
        res.send("SESION INVALIDA");
    }
});
exports.checkToken = checkToken;
