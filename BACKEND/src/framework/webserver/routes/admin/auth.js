import authController from "../../../../adapters/controllers/admin/authController.js";
import adminAuthRepositoryImp from "../../../database/mongodb/repositories/admin/adminAuthRepositoryImp.js";
import adminAuthRepositoryInt from "../../../../application/repositories/admin/adminAuthRepositoryInt.js";
import authServiceInterface from "../../../../application/services/admin/authServiceInt.js";
import authServiceImp from "../../../services/admin/authServiceImp.js";
import userAuthRepositoryImp from "../../../database/mongodb/repositories/users/userAuthRepositoryImp.js";
import userAuthRepositoryInt from "../../../../application/repositories/users/userRepositoriInf.js";
import recruiterAuthRepositoryImp from "../../../database/mongodb/repositories/recruiters/recruiterAuthRepositoryImp.js";
import recruiterAuthRepositoryInt from "../../../../application/repositories/recruiters/recruiterRepositoriInf.js";
import jobRepositoryImp from "../../../database/mongodb/repositories/recruiters/recruiterJobRepositoryImp.js";
import jobRepositoryInf from "../../../../application/repositories/recruiters/recruiterJobRepositoryInf.js";
import userprofileRepositoryImp from "../../../database/mongodb/repositories/users/userprofileRepositoryImp.js";
import userprofileRepositoryInt from "../../../../application/repositories/users/userprofileRepositoryInf.js";



const authRouterAdmin=(express)=>{
    const router=express.Router()
    const controller=authController(adminAuthRepositoryInt,adminAuthRepositoryImp,authServiceInterface,authServiceImp,userAuthRepositoryInt,userAuthRepositoryImp,recruiterAuthRepositoryInt,recruiterAuthRepositoryImp,jobRepositoryInf,jobRepositoryImp,userprofileRepositoryInt,userprofileRepositoryImp)

    
    router.route('/login').post(controller.adminLogin)
    router.route('/getuserdetails').get(controller.getuserdata)
    router.route('/userblock').post(controller.blockuser)
    router.route('/getrecruiterdetails').get(controller.getrecruiterdata)
    router.route('/getrecruiterjobs').get(controller.getrecruiterjobs)
    router.route('/jobsunlist').post(controller.unlistjob)
    router.route('/recruiterblock').post(controller.blockrecruiter)
    router.route('/userUnblock').post(controller.unblockuser)
    router.route('/recruiterUnblock').post(controller.unblockrecruiter)

   

    return router;

}
export default authRouterAdmin;