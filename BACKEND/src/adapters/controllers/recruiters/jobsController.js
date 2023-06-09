import newjob from "../../../application/useCase/recruiters/jobcreation.js"
import getrecruiterjobs from "../../../application/useCase/recruiters/getrecruiterjob.js"
import getsinglejob from "../../../application/useCase/recruiters/singlejob.js"
import Updatejob  from "../../../application/useCase/recruiters/jobupdation.js"

const jobcreationcontroller = (jobRepositoryInf, jobRepositoryImp) => {
    const dbrepository = jobRepositoryInf(jobRepositoryImp())



    const createnewjob = (req, res) => {
        console.log(req.body);

        const { recruiterId,
            jobTitle, jobType,
            jobLevel, jobTiming,
            about, essentialKnowledge,
            location, qualification, salary, date,
            experience,address,opening } = req.body
            newjob(recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening, dbrepository).then((response) => {

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

    return{
        createnewjob,
        selectrecruiterjob,
        selectsinglejob,
        updatejob
    }


}
export default jobcreationcontroller