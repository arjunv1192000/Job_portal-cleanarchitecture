import register from "../../../application/useCase/users/register.js"
import googleregister from "../../../application/useCase/users/googleregister.js"
import login from "../../../application/useCase/users/login.js"
import googlelogin from "../../../application/useCase/users/googlelogin.js"


 const authController=(userAuthRepositoryInt,userAuthRepositoryImp,authServiceInterface,authServiceImp)=>{
   
            const dbrepository=userAuthRepositoryInt(userAuthRepositoryImp())
            const authService=authServiceInterface(authServiceImp())
    
        const createuser=(req,res)=>{
    
               const{name,email,phone,password}=req.body
    
            register(name,email, phone,password,dbrepository,authService).then((response)=>{
                res.json(response)
                console.log(response,"LLLLLLLLLLLLLLLLLLLLLLLLLL");
            }).catch((err)=>console.log(err))
    
            
        }
        const createuserbygoogle=(req,res)=>{
            const{name,email}=req.body
            googleregister(name,email,dbrepository,authService).then((response)=>{
                res.json(response)
            }).catch((err)=>console.log(err))
        }
        const userlogin=(req,res)=>{
            const{email,password}=req.body
            login(email,password,dbrepository,authService).then((response)=>{
                console.log(response);
                res.json(response)

            }).catch((err)=>console.log(err))

        }
        const userloginbygoogle=(req,res)=>{
            const {email}=req.body
            googlelogin(email,dbrepository,authService).then((response)=>{
                console.log(response,"google login");
                res.json(response)

            }).catch((err)=>console.log(err))

        }
       



        return{

            createuser,
            createuserbygoogle,
            userlogin,
            userloginbygoogle
        }
    }


 
 export default authController