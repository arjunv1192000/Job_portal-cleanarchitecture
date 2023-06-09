import userJobRepositoryImp from "../../../database/mongodb/repositories/users/userJobRepositoryImp.js";
import userJobRepositoryInf from "../../../../application/repositories/users/userJobRepositoryInf.js";
import userjobcontroller from "../../../../adapters/controllers/users/userJobController.js";

const jobRouter=(express)=>{
    const router=express.Router()
    const controller=userjobcontroller(userJobRepositoryInf,userJobRepositoryImp)
    router.route('/getalljobs').get(controller.selectalljobs)
    router.route('/getsinglejob').get(controller.selectsinglejob)
    router.route('/getalljobssearch').get(controller.selectallsearchjobs)

   
   
    return router;

}
export default jobRouter;