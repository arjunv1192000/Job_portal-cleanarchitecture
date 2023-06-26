 
  const recruiterAuthRepositoryInt=(repository)=>{
  

    const recruiterExist=(email)=>repository.recruiterExist(email);
    const createrecruiter=(recruiter)=>repository.createrecruiter(recruiter);
    const profile=(recruiterId)=>repository.profile(recruiterId)
    const recruiterData=(recruiterId)=>repository.recruiterData(recruiterId)
    const recruiterDatas=()=>repository.recruiterDatas()
    const blockrecruiter=(recruiterId)=>repository.blockrecruiter(recruiterId)
    const unblockrecruiter=(recruiterId)=>repository.unblockrecruiter(recruiterId)

    

    return{
        recruiterExist,
        createrecruiter,
        profile,
        recruiterData,
        recruiterDatas,
        blockrecruiter,
        unblockrecruiter
       
       
    }

 }



 export default recruiterAuthRepositoryInt