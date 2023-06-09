import authRouter from "./user/auth.js"
import authRouterRecruiter from "./recruiter/auth.js"
import commonservice from "./commonservice.js"
import profileRouter from "./user/userprofile.js"
import recruiterjobs from "./recruiter/jobs.js"
import jobRouter from "./user/jobs.js"


const  routes=( app,express)=>{
    app.use('/api/v1/user',authRouter(express))
    app.use('/api/v1/recruiter',authRouterRecruiter(express))
    app.use('/service',commonservice(express))
    app.use('/api/v1/user/profile',profileRouter(express))
    app.use('/api/v1/recruiter/jobs',recruiterjobs(express))
    app.use('/api/v1/user/jobs',jobRouter(express))


}
export default routes