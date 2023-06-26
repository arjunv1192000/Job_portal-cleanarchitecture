
const  jobRepositoryInf=(repository)=>{

    const createnewjob=(jobdata)=>repository.createnewjob(jobdata);
    const recruiterjobs=(recruiterId)=>repository.recruiterjobs(recruiterId)
    const singlejob=(jobId)=>repository.singlejob(jobId)
    const Updatejob=(jobdata,jobId)=>repository.Updatejob(jobdata,jobId)
    const jobApplicants=(jobId)=>repository.jobApplicants(jobId)
    const changestatus=(jobId)=>repository.changestatus(jobId)
    

    
    

    return{
        createnewjob,
        recruiterjobs,
        singlejob,
        Updatejob,
        jobApplicants,
        changestatus
  
    }

}
export default jobRepositoryInf