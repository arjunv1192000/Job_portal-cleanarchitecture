import authServiceInterface from "../../../../application/services/users/authServiceInt.js"
import authServiceImp from "../../../services/users/authService.js"

const authMiddleware=(req,res,next)=>{
    let token = req.header('authorization');
    const authService = authServiceInterface(authServiceImp());
   
       




}
export default authMiddleware


