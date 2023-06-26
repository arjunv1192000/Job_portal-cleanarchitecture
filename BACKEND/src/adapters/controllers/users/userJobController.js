import getalljobs from "../../../application/useCase/users/getalljobs.js"
import getsinglejob from "../../../application/useCase/users/singlejob.js"
import getallsearchjobs from "../../../application/useCase/users/getsearchjobs.js"
import Applyjob from "../../../application/useCase/users/applyjob.js"
import Savejob from "../../../application/useCase/users/savejob.js"
import ApplyjobinSave from "../../../application/useCase/users/applyjobinsave.js"



const userjobcontroller=(userJobRepositoryInf,userJobRepositoryImp,userprofileRepositoryInt,userprofileRepositoryImp)=>{
    const dbrepository=userJobRepositoryInf(userJobRepositoryImp())
    const profilerepository=userprofileRepositoryInt(userprofileRepositoryImp())

    const selectalljobs=(req,res)=>{
        const page = parseInt(req.query.page)
        console.log(page,"controller");


        getalljobs(dbrepository,page).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }
     const selectsinglejob=(req,res)=>{
        const jobId=req.query.id
        console.log(jobId,"ssss");
        getsinglejob(jobId,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const selectallsearchjobs=(req,res)=>{
        const { page, query,filter,location } = req.query;


        getallsearchjobs(dbrepository,page,query,filter,location).then((response)=>{
            console.log(response,"controll");
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }
     const applyjob=(req,res)=>{
        const { UserId, JobId } = req.body
        console.log(req.body);

        Applyjob(dbrepository,profilerepository,UserId,JobId).then((response)=>{
            console.log(response);
            res.json(response)

        }).catch((err)=>console.log(err))


     }
     const savejob=(req,res)=>{
        const { UserId, JobId } = req.body
        console.log(req.body);

        Savejob(profilerepository,UserId,JobId).then((response)=>{
            console.log(response);
            res.json(response)

        }).catch((err)=>console.log(err))


     }

     const applyjobinsave=(req,res)=>{
        const { UserId, JobId } = req.body
        console.log(req.body);

        ApplyjobinSave(dbrepository,profilerepository,UserId,JobId).then((response)=>{
            console.log(response);
            res.json(response)

        }).catch((err)=>console.log(err))


     }

     

    
     return{
        selectalljobs,
        selectsinglejob,
        selectallsearchjobs,
        applyjob,
        savejob,
        applyjobinsave
        
       
        
        
     }

}
export default userjobcontroller