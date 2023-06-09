import jobdata from "../../models/recruitermodels/jobModels.js"


const jobRepositoryImp=()=>{
    
    const createnewjob=(data)=>{
        const newjob=new jobdata({
            recruiterId:data?.getrecruiterid(),
            jobTitle:data?.getjobTitle(),
            jobType:data?.getjobType(),
            jobLevel:data?.getjobLevel(),
            jobTiming:data?.getjobTiming(),
            about:data?.getabout(),
            essentialKnowledge:data?.getessentialKnowledge(),
            location:data?.getlocation(),
            qualification:data?.getqualification(),
            salary:data?.getsalary(),
            date:data?.getdate(),
            experience:data?.getexperience(),
            address:data?.getaddress(),
            opening:data?.getopening()

        })
        return newjob.save()
    }
    const recruiterjobs=async (recruiterId)=>{
      
        return await jobdata.find({recruiterId:recruiterId})
    }
    const singlejob=async (jobId)=>{
       
         
        const jobs= await jobdata.findById(jobId)
       
        return jobs
    }
    const Updatejob=(data,jobId)=>{
        console.log(data);
        return jobdata.findByIdAndUpdate(
            jobId,
            {
            recruiterId: data?.getrecruiterid(),
            jobTitle: data?.getjobTitle(),
            jobType: data?.getjobType(),
            jobLevel: data?.getjobLevel(),
            jobTiming: data?.getjobTiming(),
            about: data?.getabout(),
            essentialKnowledge: data?.getessentialKnowledge(),
            location: data?.getlocation(),
            qualification: data?.getqualification(),
            salary: data?.getsalary(),
            date: data?.getdate(),
            experience: data?.getexperience(),
            address: data?.getaddress(),
            opening: data?.getopening(),
            }, { new: true }  );  };
       
    
    


    return{
        createnewjob,
        recruiterjobs,
        singlejob,
        Updatejob
    }

}
export default jobRepositoryImp