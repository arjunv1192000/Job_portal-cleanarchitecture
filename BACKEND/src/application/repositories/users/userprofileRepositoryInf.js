const userprofileRepositoryInt=(dbrepository)=>{

   
    const create=(user)=>dbrepository.create(user);
    const userProfile=(userId)=>dbrepository.userProfile(userId)
    const apply=(userId,jobId)=>dbrepository.apply(userId,jobId)
    const userAppliedjob=(userId)=>dbrepository.userAppliedjob(userId)
    const save=(userId,jobId)=>dbrepository.save(userId,jobId)
    const userSavedjob=(userId)=>dbrepository.userSavedjob(userId)
    const removejob=(userId,jobId)=>dbrepository.removejob(userId,jobId)
    const Updateprofile=(userdata,userId)=>dbrepository.Updateprofile(userdata,userId)
    const changestatus=(userId,jobId,status)=>dbrepository.changestatus(userId,jobId,status)
    
    

    return{
       
        create,
        userProfile,
        apply,
        userAppliedjob,
        save,
        userSavedjob,
        removejob,
        Updateprofile,
        changestatus
       
    }
    
 }



 export default userprofileRepositoryInt