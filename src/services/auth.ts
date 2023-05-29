import { connectionMatriz } from "../database";
import { generarToken } from "../utils/jwt";

const loginUser = async (item: any) => {

    let [count] = await connectionMatriz.execute(
        `SELECT COUNT(*) AS count
        FROM mysql.user
        WHERE User = ? 
        AND Password = PASSWORD('${item.password}');`
        , [item.user]);
    if(count[0].count != 0){
        const token = generarToken(item.user);
        return token; 
    }  else{
        return false;
    } 
};


export { loginUser };