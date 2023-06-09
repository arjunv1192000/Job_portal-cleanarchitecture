import userprofiledata from "../../../entities/userprofile.js"

const adduserprofile = async (userId, name, email, phone, about, education, language, personalwebsite, location, jobRole, image, cv, repositories) => {
    console.log("usecase");

    try {
        const profiledetails = userprofiledata(userId, name, email, phone, about, education, language, personalwebsite, location, jobRole, image, cv)


        const userprofile = await repositories.create(profiledetails)
        console.log(userprofile, "profile data");

        return { status: true,userprofile }

    } catch {
        return { message: 'Error creating user profile', status: false };

    }






}
export default adduserprofile