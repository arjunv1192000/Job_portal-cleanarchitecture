 import jobdata from "../../models/recruitermodels/jobModels.js"
 


const userJobRepositoryImp=()=>{

    const getalljobs = async () => {
      const totalCount = await jobdata.countDocuments();
        const jobs = await jobdata
          .find()
          .populate('recruiterId', 'companyname image name')
          .sort({ date: -1 })
        
      
      
      
        return { totalCount, jobs };
      }
      
      
    const singlejob=async (jobId)=>{
       
         
        const jobs= await jobdata.findById(jobId).populate('recruiterId','companyname image name');
       
        return jobs
    }


    return{
        getalljobs,
        singlejob
    }

}
export default userJobRepositoryImp
