import authRouter from "./user/auth.js"
import authRouterRecruiter from "./recruiter/auth.js"



const  routes=( app,express)=>{
    app.use('/api/v1/user',authRouter(express))
    app.use('/api/v1/recruiter',authRouterRecruiter(express))


}
export default routes