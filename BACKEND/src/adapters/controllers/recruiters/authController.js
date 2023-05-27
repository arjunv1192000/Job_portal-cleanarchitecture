import register from "../../../application/useCase/recruiters/register.js"
import login from "../../../application/useCase/recruiters/login.js"

const authController = (recruiterAuthRepositoryInt, recruiterAuthRepositoryImp, authServiceInterface, authServiceImp) => {

    const dbrepository = recruiterAuthRepositoryInt(recruiterAuthRepositoryImp())
    const authService = authServiceInterface(authServiceImp())


    const createRecruiter = (req, res) => {

        const { companyname, name, email, password } = req.body

        register(companyname, name, email, password, dbrepository, authService).then((response) => {
            console.log(response);
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

    return {
        createRecruiter,
        RecruiterLogin
    }

}
export default authController