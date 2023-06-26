



const Savejob = async (profilerepository,UserId,jobId) => {
    console.log(jobId,UserId);

    try {
       
         const savejob=await profilerepository.save(UserId,jobId)
         if(savejob===true){
            return ({status:true})

         }else{
            return({status:false})

         }
      

    } catch {
        return { message: 'Error gettin saving job', status: false };

    }
}
export default Savejob