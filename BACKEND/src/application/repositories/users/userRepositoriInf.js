 

 const userAuthRepositoryInt=(repository)=>{
    

    const userexist=(email)=>repository.userExist(email);
    const create=(user)=>repository.create(user);
    const googlecreate=(user)=>repository.googlecreate(user);
    const profile=(userId)=>repository.profile(userId);
    const userData=(userId)=>repository.userData(userId)
    const userDatas=()=>repository.userDatas()
    const blockuser=(userId)=>repository.blockuser(userId)
    const unblockuser=(userId)=>repository.unblockuser(userId)

    return{
        userexist,
        create,
        googlecreate,
        profile,
        userData,
        userDatas,
        blockuser,
        unblockuser
    }
    
 }



 export default userAuthRepositoryInt