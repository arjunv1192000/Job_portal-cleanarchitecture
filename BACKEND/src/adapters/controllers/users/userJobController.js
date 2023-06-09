import getalljobs from "../../../application/useCase/users/getalljobs.js"
import getsinglejob from "../../../application/useCase/users/singlejob.js"
import getallsearchjobs from "../../../application/useCase/users/getsearchjobs.js"


const userjobcontroller=(userJobRepositoryInf,userJobRepositoryImp)=>{
    const dbrepository=userJobRepositoryInf(userJobRepositoryImp())

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
        const { page, query } = req.query;


        getallsearchjobs(dbrepository,page,query).then((response)=>{
            console.log(response,"controll");
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }

    
     return{
        selectalljobs,
        selectsinglejob,
        selectallsearchjobs
       
        
        
     }

}
export default userjobcontroller