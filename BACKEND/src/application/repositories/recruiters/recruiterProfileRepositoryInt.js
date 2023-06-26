

const recruiterProfileRepositoryInt=(dbrepository)=>{
    const create=(recruiter)=>dbrepository.create(recruiter);
    const recruiterProfile=(recruiterId)=>dbrepository.recruiterProfile(recruiterId)
    const Updateprofile=(data,recruiterId)=>dbrepository.Updateprofile(data,recruiterId)
  
    return{
        create,
        recruiterProfile,
        Updateprofile,
     
    }

}
export default recruiterProfileRepositoryInt