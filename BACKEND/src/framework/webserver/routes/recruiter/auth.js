import authController from "../../../../adapters/controllers/recruiters/authController.js";
import recruiterAuthRepositoryInt from "../../../../application/repositories/recruiters/recruiterRepositoriInf.js";
import recruiterAuthRepositoryImp from "../../../database/mongodb/repositories/recruiters/recruiterAuthRepositoryImp.js";
import authServiceImp from "../../../services/recruiters/authServiceImp.js";
import authServiceInterface from "../../../../application/services/recruiters/authServiceInt.js";


const authRouterRecruiter=(express)=>{
    const router=express.Router()
    const controller=authController(recruiterAuthRepositoryInt,recruiterAuthRepositoryImp,authServiceInterface,authServiceImp)

    router.route('/signup').post(controller.createRecruiter)
    router.route('/login').post(controller.RecruiterLogin)
    router.route('/getrecruiterdata').get(controller.getrecruiterdata)

   

    return router;

}
export default authRouterRecruiter;