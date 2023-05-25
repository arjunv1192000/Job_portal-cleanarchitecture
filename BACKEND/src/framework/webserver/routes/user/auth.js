
import authController from "../../../../adapters/controllers/users/authController.js"
import userAuthRepositoryImp from "../../../database/mongodb/repositories/users/userAuthRepositoryImp.js"
import userAuthRepositoryInt from "../../../../application/repositories/users/userRepositoriInf.js"
import authServiceInterface from "../../../../application/services/users/authServiceInt.js"
import authServiceImp from "../../../services/users/authService.js"


const authRouter=(express)=>{
    const router=express.Router()
    const controller=authController(userAuthRepositoryInt,userAuthRepositoryImp,authServiceInterface,authServiceImp)

    router.route('/').post(controller.createuser)

    return router;

}
export default authRouter ;