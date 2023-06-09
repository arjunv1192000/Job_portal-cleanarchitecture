

const userJobRepositoryInf=(dbrepository)=>{

    const getalljobs=()=>dbrepository.getalljobs()
    const singlejob=(jobId)=>dbrepository.singlejob(jobId)
    
    

    return{
       
        getalljobs,
        singlejob
       
    }

}
export default userJobRepositoryInf