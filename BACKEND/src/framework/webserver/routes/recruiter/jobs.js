import jobcreationcontroller from "../../../../adapters/controllers/recruiters/jobsController.js"
import jobRepositoryImp from "../../../database/mongodb/repositories/recruiters/recruiterJobRepositoryImp.js"
import jobRepositoryInf from "../../../../application/repositories/recruiters/recruiterJobRepositoryInf.js"
import userprofileRepositoryImp from "../../../database/mongodb/repositories/users/userprofileRepositoryImp.js"
import userprofileRepositoryInt from "../../../../application/repositories/users/userprofileRepositoryInf.js"



const recruiterjobs=(express)=>{
    const router=express.Router()
    const controller=jobcreationcontroller(jobRepositoryInf,jobRepositoryImp,userprofileRepositoryInt,userprofileRepositoryImp)
    router.route('/createjob').post(controller.createnewjob)
    router.route('/getrecruiterjob').get(controller.selectrecruiterjob)
    router.route('/getsinglejob').get(controller.selectsinglejob)
    router.route('/updatejob').post(controller.updatejob)
    router.route('/applicants').get(controller.getapplicants)
    router.route('/unlist').post(controller.unlistjob)
    router.route('/updateApplicantStatus').post(controller.applicantstatus)
   

   

    return router;

}
export default recruiterjobs;