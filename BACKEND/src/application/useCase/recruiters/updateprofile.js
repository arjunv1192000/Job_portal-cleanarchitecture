import recruiterprofiledata from "../../../entities/recruiterprofile.js";

const updateprofile=async(name,email,phone,about,companyname,image,recruiterId,repositories)=>{
   

    try {
        const data = recruiterprofiledata(name,email,phone,about,companyname,image,recruiterId)
        

        const updateuser= await repositories.Updateprofile(data,recruiterId)
        console.log(updateuser,"jobdata");

        return { status: true}

    } catch {
        return { message: 'Error updating profile', status: false };

    }

}
export default updateprofile