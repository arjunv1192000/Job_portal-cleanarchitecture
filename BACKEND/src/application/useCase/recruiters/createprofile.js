import recruiterprofiledata from "../../../entities/recruiterprofile.js"


const addrecruiterprofile = async (name,email,phone,about,companyname,image,recruiterId, repositories,recruiterdbrepository) => {
   

    try {
        const profiledetails = recruiterprofiledata(name,email,phone,about,companyname,image,recruiterId)


        const profile = await repositories.create(profiledetails)
        const userdata=await recruiterdbrepository.profile(recruiterId)
        console.log(userdata);

        return { status: true,profile }

    } catch {
        return { message: 'Error creating recruiter profile', status: false };

    }






}
export default addrecruiterprofile