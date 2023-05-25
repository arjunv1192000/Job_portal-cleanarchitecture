import authRouter from "./user/auth.js"


const  routes=( app,express)=>{
    app.use('/userauth',authRouter(express))


}
export default routes