

const userJobRepositoryInf=(dbrepository)=>{

    const getalljobs=()=>dbrepository.getalljobs()
    const singlejob=(jobId)=>dbrepository.singlejob(jobId)
    const apply=(userId,jobId)=>dbrepository.apply(userId,jobId)
    
    

    return{
       
        getalljobs,
        singlejob,
        apply,
       
    }

}
export default userJobRepositoryInf