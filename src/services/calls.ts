// import { Brand } from "../interfaces/brand";
import { connectionMatriz, connectionSuc1, connectionSuc1_replication, connectionSuc2, connectionSuc2_replication } from "../database";
class CallsService {
    static getAll = async () => {   

        let matriz = await this.getAllMatriz();
        let suc1 = await this.getAllSuc1();
        let suc2 = await this.getAllSuc2();

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
    };

    static getAllMatriz = async () => {     
        let [rows] = await connectionMatriz.execute('SELECT * FROM cdr ORDER BY calldate DESC');
        
        return rows;
    };

    static getAllSuc1 = async () => {
        let rows: any;
        try {
            [rows] = await connectionSuc1_replication.execute('SELECT * FROM cdr ORDER BY calldate DESC');
        }catch(e: any){
            [rows] = await connectionSuc1.execute('SELECT * FROM cdr ORDER BY calldate DESC');
        }
        
        return rows;
    };

    static getAllSuc2 = async () => {     
        let rows: any;
        try {
            [rows] = await connectionSuc2_replication.execute('SELECT * FROM cdr ORDER BY calldate DESC');
        }catch(e: any){
            [rows] = await connectionSuc2.execute('SELECT * FROM cdr ORDER BY calldate DESC');
        }
        
        return rows;
    };


}

export { CallsService };