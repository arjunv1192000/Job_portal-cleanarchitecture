const userprofileRepositoryInt=(dbrepository)=>{

   
    const create=(user)=>dbrepository.create(user);
    const userProfile=(userId)=>dbrepository.userProfile(userId)
    
    

    return{
       
        create,
        userProfile
       
    }
    
 }



 export default userprofileRepositoryInt