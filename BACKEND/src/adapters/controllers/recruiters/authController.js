import register from "../../../application/useCase/recruiters/register.js"
import login from "../../../application/useCase/recruiters/login.js"
import Getrecruiter from "../../../application/useCase/recruiters/getrecruiterdata.js"

const authController = (recruiterAuthRepositoryInt, recruiterAuthRepositoryImp, authServiceInterface, authServiceImp) => {

    const dbrepository = recruiterAuthRepositoryInt(recruiterAuthRepositoryImp())
    const authService = authServiceInterface(authServiceImp())


    const createRecruiter = (req, res) => {

        const { companyname, name, email, password,image } = req.body

        register(companyname, name, email, password,image, dbrepository, authService).then((response) => {
            console.log(response,"controller");
            res.json(response)

        }).catch((err) => console.log(err))

    }

    const RecruiterLogin = (req, res) => {
        const { email, password } = req.body
        login(email, password, dbrepository, authService).then((response) => {
            console.log(response);
            res.json(response)

        }).catch((err) => console.log(err))

    }

    const getrecruiterdata=(req,res)=>{

        const recruiterId = req.query.id;
       
    
        Getrecruiter(recruiterId,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }



    return {
        createRecruiter,
        RecruiterLogin,
        getrecruiterdata
    }

}
export default authController