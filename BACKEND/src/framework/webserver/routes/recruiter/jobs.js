import jobcreationcontroller from "../../../../adapters/controllers/recruiters/jobsController.js"
import jobRepositoryImp from "../../../database/mongodb/repositories/recruiters/recruiterJobRepositoryImp.js"
import jobRepositoryInf from "../../../../application/repositories/recruiters/recruiterJobRepositoryInf.js"


const recruiterjobs=(express)=>{
    const router=express.Router()
    const controller=jobcreationcontroller(jobRepositoryInf,jobRepositoryImp)
    router.route('/createjob').post(controller.createnewjob)
    router.route('/getrecruiterjob').get(controller.selectrecruiterjob)
    router.route('/getsinglejob').get(controller.selectsinglejob)
    router.route('/updatejob').post(controller.updatejob)
   

   

    return router;

}
export default recruiterjobs;