import userJobRepositoryImp from "../../../database/mongodb/repositories/users/userJobRepositoryImp.js";
import userJobRepositoryInf from "../../../../application/repositories/users/userJobRepositoryInf.js";
import userjobcontroller from "../../../../adapters/controllers/users/userJobController.js";
import userprofileRepositoryImp from "../../../database/mongodb/repositories/users/userprofileRepositoryImp.js"
import userprofileRepositoryInt from "../../../../application/repositories/users/userprofileRepositoryInf.js"
import authMiddleware from "../../middlewares/middlewares.js";

const jobRouter=(express)=>{
    const router=express.Router()
    const controller=userjobcontroller(userJobRepositoryInf,userJobRepositoryImp,userprofileRepositoryInt,userprofileRepositoryImp)
    router.route('/getalljobs').get(controller.selectalljobs)
    router.route('/getsinglejob').get(authMiddleware,controller.selectsinglejob)
    router.route('/getalljobssearch').get(authMiddleware,controller.selectallsearchjobs)
    router.route('/apply').post(authMiddleware,controller.applyjob)
    router.route('/save').post(authMiddleware,controller.savejob)
    router.route('/applyinSaved').post(authMiddleware,controller.applyjobinsave)

    return router;

}
export default jobRouter;