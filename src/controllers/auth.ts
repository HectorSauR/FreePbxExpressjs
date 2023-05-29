import { Request, Response } from "express";
import { loginUser } from "../services/auth";

class AuthController {
    static loginAuth = async ({ body }:Request, res:Response) => { 
        try{
            const item: any = body;
            const response = await loginUser(item);

            if(response == false){
                res.status(403).json({message: "DATOS INVÁLIDOS"});             
            }else{
                res.status(200).json({message: "INICIO DE SESIÓN CORRECTO", data: response});
            }
        }catch(e){
            res.send(e);
        }  
    } 
}


export { AuthController };