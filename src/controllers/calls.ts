import { Request, Response } from "express";
import { CallsService } from "../services/calls";

class CallsController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await CallsService.getAll();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }
}

export { CallsController };