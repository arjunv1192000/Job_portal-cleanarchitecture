 

 const userAuthRepositoryInt=(repository)=>{
    console.log(repository);

    const userexist=(email)=>repository.userExist(email);
    const create=(name,email,phone,password)=>repository.create(name,email,phone,password);

    return{
        userexist,
        create
    }

 }



 export default userAuthRepositoryInt