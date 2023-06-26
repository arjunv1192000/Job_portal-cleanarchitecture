import recruiterprofile from "../../models/recruitermodels/recruiterprofileModels.js"

const recruiterProfileRepositoryImp = () => {
  const create = (data) => {


    const newprofile = new recruiterprofile({
      recruiterId: data?.getrecruiterid(),
      name: data?.getname(),
      email: data?.getemail(),
      phone: data?.getphone(),
      about: data?.getabout(),
      companyname: data?.getcompany(),
      image: data?.getimage(),




    })
    return newprofile.save()
  }
  const recruiterProfile = async (recruiterId) => {
    return await recruiterprofile.findOne({ recruiterId: recruiterId })
  }


  const Updateprofile = async (data, recruiterId) => {
    const profile = await recruiterprofile.findOneAndUpdate(
      { recruiterId: recruiterId },
      {
        recruiterId: data?.getrecruiterid(),
        name: data?.getname(),
        email: data?.getemail(),
        phone: data?.getphone(),
        about: data?.getabout(),
        companyname: data?.getcompany(),
        image: data?.getimage(),
      
       
      },
      { new: true }
    );

    console.log(profile, "updation");
    return profile;
  };



  return {
    create,
    recruiterProfile,
    Updateprofile
  }

}
export default recruiterProfileRepositoryImp