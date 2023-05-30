import { Request, Response, NextFunction } from "express";
import { verificarToken } from "../utils/jwt";

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

const checkToken = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const jwtRecibida = req.headers.authorization || "";
        const jwt = jwtRecibida.split(" ").pop();
        const sesion = verificarToken(`${jwt}`);
        if(sesion){
            next();
            return;
        }
        res.status(401).send("SESION INVALIDA");
        
    }catch(e){
        res.status(400);
        res.send("SESION INVALIDA");
    }
}

export { checkToken };