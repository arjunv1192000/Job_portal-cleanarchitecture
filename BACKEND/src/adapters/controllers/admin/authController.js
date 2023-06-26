import login from "../../../application/useCase/admin/login.js"
import Getusersdata from "../../../application/useCase/admin/getusersdata.js"
import userblock from "../../../application/useCase/admin/block&unblockuser.js" 
import Getrecruiterdata from "../../../application/useCase/admin/getrecruiterdetails.js"
import recruiterjob from "../../../application/useCase/admin/getrecruiterjobs.js"
import jobunlist from "../../../application/useCase/recruiters/jobunlisting.js"
import recruiterblock from "../../../application/useCase/admin/block&unblockuser.js"
import userunblock from "../../../application/useCase/admin/unblockuser.js"
import recruiterunblock from "../../../application/useCase/admin/unblockrecruiter.js"



const authController = (adminAuthRepositoryInt,adminAuthRepositoryImp,authServiceInterface,authServiceImp,userAuthRepositoryInt,userAuthRepositoryImp,recruiterAuthRepositoryInt,recruiterAuthRepositoryImp,jobRepositoryInf,jobRepositoryImp,userprofileRepositoryInt,userprofileRepositoryImp) => {

    const dbrepository = adminAuthRepositoryInt(adminAuthRepositoryImp())
    const authService = authServiceInterface(authServiceImp())
    const userdbrepository=userAuthRepositoryInt(userAuthRepositoryImp())
    const recruiterdbrepository=recruiterAuthRepositoryInt(recruiterAuthRepositoryImp())
    const jobdbrepository=jobRepositoryInf(jobRepositoryImp())
    const userprofilerepository=userprofileRepositoryInt(userprofileRepositoryImp())

    const adminLogin = (req, res) => {
        const { email, password } = req.body
        login(email, password, dbrepository, authService).then((response) => {
            console.log(response);
            res.json(response)

        }).catch((err) => console.log(err))

    }

    const getuserdata=(req,res)=>{

       
    
        Getusersdata(userdbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }

     const blockuser=(req,res)=>{
        const { userId } = req.body
        console.log(userId);
         userblock(userId,userdbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const getrecruiterdata=(req,res)=>{

       
    
        Getrecruiterdata(recruiterdbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }

     const getrecruiterjobs=(req,res)=>{
        const recruiterId=req.query.id
        console.log(recruiterId);
         recruiterjob(recruiterId,jobdbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const unlistjob=(req,res)=>{
        const { JobId } = req.body
        console.log(JobId);
        jobunlist(JobId,jobdbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }

    const blockrecruiter=(req,res)=>{
        const { recruiterId } = req.body
        console.log(recruiterId);
         recruiterblock(recruiterId,recruiterdbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }


    const unblockuser=(req,res)=>{
        const { userId } = req.body
        console.log(userId);
         userunblock(userId,userdbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const unblockrecruiter=(req,res)=>{
        const { recruiterId } = req.body
        console.log(recruiterId);
         recruiterunblock(recruiterId,recruiterdbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }


    return {
      
        adminLogin,
        getuserdata,
        blockuser,
        getrecruiterdata,
        getrecruiterjobs,
        unlistjob,
        blockrecruiter,
        unblockuser,
        unblockrecruiter
        
    }

}
export default authController