import newjob from "../../../application/useCase/recruiters/jobcreation.js"
import getrecruiterjobs from "../../../application/useCase/recruiters/getrecruiterjob.js"
import getsinglejob from "../../../application/useCase/recruiters/singlejob.js"
import Updatejob  from "../../../application/useCase/recruiters/jobupdation.js"
import applicants from "../../../application/useCase/recruiters/getapplicants.js"
import jobunlist from "../../../application/useCase/recruiters/jobunlisting.js"
import changeStatus from "../../../application/useCase/recruiters/jobunlisting.js"

const jobcreationcontroller = (jobRepositoryInf, jobRepositoryImp,userprofileRepositoryInt,userprofileRepositoryImp) => {
    const dbrepository = jobRepositoryInf(jobRepositoryImp())
    const profilerepository=userprofileRepositoryInt(userprofileRepositoryImp())



    const createnewjob = (req, res) => {
        console.log(req.body);

        const { recruiterId,
            jobTitle, jobType,
            jobLevel, jobTiming,
            about, essentialKnowledge,
            location, qualification, salary, date,
            experience,address,opening ,enddate,skills} = req.body
            newjob(recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening,enddate,skills, dbrepository).then((response) => {

            res.json(response)

        }).catch((err) => console.log(err))

    }
    const selectrecruiterjob=(req,res)=>{
        const recruiterId=req.query.id
        console.log(recruiterId);
        getrecruiterjobs(recruiterId,dbrepository).then((response)=>{
           
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const selectsinglejob=(req,res)=>{
        const jobId=req.query.id
        console.log(jobId);
        getsinglejob(jobId,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const updatejob=(req,res)=>{
        console.log(req.body,"controller");
        const { recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening,jobId } = req.body
       
        Updatejob(recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening,jobId,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const getapplicants=(req,res)=>{
        const jobId=req.query.id
        console.log(jobId);
        applicants(jobId,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const unlistjob=(req,res)=>{
        const { JobId } = req.body
        console.log(JobId);
        jobunlist(JobId,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }
    const applicantstatus=(req,res)=>{
        const { jobId ,userId,status} = req.body
       
        changeStatus(jobId ,userId,status,profilerepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))


    }

    return{
        createnewjob,
        selectrecruiterjob,
        selectsinglejob,
        updatejob,
        getapplicants,
        unlistjob,
        applicantstatus
    }


}
export default jobcreationcontroller