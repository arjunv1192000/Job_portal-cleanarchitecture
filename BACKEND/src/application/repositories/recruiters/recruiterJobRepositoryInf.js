
const  jobRepositoryInf=(repository)=>{

    const createnewjob=(jobdata)=>repository.createnewjob(jobdata);
    const recruiterjobs=(recruiterId)=>repository.recruiterjobs(recruiterId)
    const singlejob=(jobId)=>repository.singlejob(jobId)
    const Updatejob=(jobdata,jobId)=>repository.Updatejob(jobdata,jobId)
    
    

    return{
        createnewjob,
        recruiterjobs,
        singlejob,
        Updatejob
    }

}
export default jobRepositoryInf