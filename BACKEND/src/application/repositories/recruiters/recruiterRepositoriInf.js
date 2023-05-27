 
  const recruiterAuthRepositoryInt=(repository)=>{
    console.log(repository);

    const recruiterExist=(email)=>repository.recruiterExist(email);
    const createrecruiter=(recruiter)=>repository.createrecruiter(recruiter);
    

    return{
        recruiterExist,
        createrecruiter
       
       
    }

 }



 export default recruiterAuthRepositoryInt