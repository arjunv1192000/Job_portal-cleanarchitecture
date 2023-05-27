
import authController from "../../../../adapters/controllers/users/authController.js"
import userAuthRepositoryImp from "../../../database/mongodb/repositories/users/userAuthRepositoryImp.js"
import userAuthRepositoryInt from "../../../../application/repositories/users/userRepositoriInf.js"
import authServiceInterface from "../../../../application/services/users/authServiceInt.js"
import authServiceImp from "../../../services/users/authService.js"


const authRouter=(express)=>{
    const router=express.Router()
    const controller=authController(userAuthRepositoryInt,userAuthRepositoryImp,authServiceInterface,authServiceImp)

    router.route('/signup').post(controller.createuser)
    router.route('/googlesignup').post(controller.createuserbygoogle)
    router.route('/login').post(controller.userlogin)
    router.route('/googlelogin').post(controller.userloginbygoogle)

    return router;

}
export default authRouter ;