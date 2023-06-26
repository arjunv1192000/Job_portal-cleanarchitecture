import recruiterprofilecontroller from "../../../../adapters/controllers/recruiters/recruiterProfileController.js"
import recruiterProfileRepositoryImp from "../../../database/mongodb/repositories/recruiters/recruiterProfileRepositoryImp.js"
import recruiterProfileRepositoryInt from "../../../../application/repositories/recruiters/recruiterProfileRepositoryInt.js"
import recruiterAuthRepositoryInt from "../../../../application/repositories/recruiters/recruiterRepositoriInf.js";
import recruiterAuthRepositoryImp from "../../../database/mongodb/repositories/recruiters/recruiterAuthRepositoryImp.js";



const recruiterprofileRouter=(express)=>{
    const router=express.Router()
    const controller=recruiterprofilecontroller(recruiterProfileRepositoryInt,recruiterProfileRepositoryImp,recruiterAuthRepositoryInt,recruiterAuthRepositoryImp)
    router.route('/addprofile').post(controller.createprofile)
    router.route('/getprofile').get(controller.selectprofiledata)
    router.route('/Updateprofile').post(controller.Updateprofile)


    return router;

}
export default recruiterprofileRouter