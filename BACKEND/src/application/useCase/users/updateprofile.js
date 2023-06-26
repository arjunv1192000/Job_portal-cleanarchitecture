import userprofiledata from "../../../entities/userprofile.js"

const updateuserprofile=async(userId,name,email,phone,about,education,language,personalWebsite,location,jobRole,image,cv,repositories)=>{
    console.log(userId,name,email,phone,about,education,language,personalWebsite,location,jobRole,image,cv,"update");

    try {
        const userdata = userprofiledata(userId,name,email,phone,about,education,language,personalWebsite,location,jobRole,image,cv)
        

        const updateuser= await repositories.Updateprofile(userdata,userId)
        console.log(updateuser,"jobdata");

        return { status: true}

    } catch {
        return { message: 'Error updating profile', status: false };

    }

}
export default updateuserprofile