 

 const userAuthRepositoryInt=(repository)=>{
    console.log(repository);

    const userexist=(email)=>repository.userExist(email);
    const create=(user)=>repository.create(user);
    const googlecreate=(user)=>repository.googlecreate(user);

    return{
        userexist,
        create,
        googlecreate
    }

 }



 export default userAuthRepositoryInt