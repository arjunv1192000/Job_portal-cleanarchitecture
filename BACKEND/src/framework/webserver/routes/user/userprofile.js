import profilecontroller from "../../../../adapters/controllers/users/userProfileController.js"
import userprofileRepositoryImp from "../../../database/mongodb/repositories/users/userprofileRepositoryImp.js"
import userprofileRepositoryInt from "../../../../application/repositories/users/userprofileRepositoryInf.js"


const profileRouter=(express)=>{
    const router=express.Router()
    const controller=profilecontroller(userprofileRepositoryInt,userprofileRepositoryImp)

    router.route('/addprofile').post(controller.addprofile)
    router.route('/getprofile').get(controller.selectprofiledata)
   
    return router;

}
export default profileRouter ;