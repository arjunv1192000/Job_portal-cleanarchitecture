import googledata from "../../../entities/google.js"

const googleregister=async(name,email,repositories,authService)=>{


    return  repositories.userexist(email).then(async(user)=>{
        if(!user){
            

           const userdetails=googledata(name,email)

           await repositories.googlecreate(userdetails)
           return({status:true})
        }else{
             console.log("ddddddddddddddddddddddddddddddddd");
            return ({message:'email already exisits',status:false})
        }

    })




}
export default googleregister