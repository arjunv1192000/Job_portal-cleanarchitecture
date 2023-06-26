import profilecontroller from "../../../../adapters/controllers/users/userProfileController.js"
import userprofileRepositoryImp from "../../../database/mongodb/repositories/users/userprofileRepositoryImp.js"
import userprofileRepositoryInt from "../../../../application/repositories/users/userprofileRepositoryInf.js"
import userAuthRepositoryImp from "../../../database/mongodb/repositories/users/userAuthRepositoryImp.js"
import userAuthRepositoryInt from "../../../../application/repositories/users/userRepositoriInf.js"


const profileRouter=(express)=>{
    const router=express.Router()
    const controller=profilecontroller(userprofileRepositoryInt,userprofileRepositoryImp,userAuthRepositoryInt,userAuthRepositoryImp)

    router.route('/addprofile').post(controller.addprofile)
    router.route('/getprofile').get(controller.selectprofiledata)
    router.route('/getmyjobs').get(controller.selectappliedjob)
    router.route('/getsavedjobs').get(controller.selectsavedjob)
    router.route('/updateprofile').post(controller.updateprofile)
   
    return router;

}
export default profileRouter ;