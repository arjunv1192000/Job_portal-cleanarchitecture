import recruiterdata from "../../../entities/recruiter.js";

const register=async(companyname,name,email,password,repositories,authService)=>{

    return  repositories.recruiterExist(email).then(async(recruiter)=>{
        if(!recruiter){
            const hashpassword=await authService.bcryptpassword(password)

           const recruiterdetails=recruiterdata(companyname,name,email,hashpassword)

           await repositories.createrecruiter (recruiterdetails)
           return({status:true})
        }else{
             
            return ({message:'email already exisits',status:false})
        }

    })

}
export default register