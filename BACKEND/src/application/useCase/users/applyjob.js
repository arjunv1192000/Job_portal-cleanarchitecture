

const Applyjob = async (repositories,profilerepository,userId,jobId) => {
    console.log(userId);
    console.log(jobId);
    

    try {
       
         const addjob=await profilerepository.apply(userId,jobId)
         const adduser=await repositories.apply(userId,jobId)
         if(addjob==true && adduser==true){
            return ({status:true})

         }else{
            return({status:false})

         }
      

    } catch {
        return { message: 'Error getting apply job', status: false };

    }
}
export default Applyjob