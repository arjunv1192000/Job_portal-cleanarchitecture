
const ApplyjobinSave = async (repositories,profilerepository,userId,jobId) => {
    console.log(userId);
    console.log(jobId);
    

    try {
       
         const addjob=await profilerepository.apply(userId,jobId)
         const adduser=await repositories.apply(userId,jobId)
         const remove=await profilerepository.removejob(userId,jobId)
         if(addjob==true && adduser==true && remove==true){
            return ({status:true})

         }else{
            return({status:false})

         }
      

    } catch {
        return { message: 'Error getting apply job', status: false };

    }
}
export default ApplyjobinSave