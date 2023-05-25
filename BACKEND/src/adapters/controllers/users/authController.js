import register from "../../../application/useCase/users/register.js"


 const authController=(userAuthRepositoryInt,userAuthRepositoryImp,authServiceInterface,authServiceImp)=>{


    const dbrepository=userAuthRepositoryInt(userAuthRepositoryImp())
    const authService=authServiceInterface(authServiceImp())

    const createuser=(req,res)=>{
        const{name,email,phone,password}=req.body

        register(name,email, phone,password,dbrepository,authService).then(()=>{
            res.json({status:true})
        })
    }
    return{
        createuser
    }

 }
 export default authController