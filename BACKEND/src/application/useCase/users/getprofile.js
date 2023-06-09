

const getuserprofile = async (userId, repositories) => {
    console.log("usecase");

    try {


        console.log("usecase2");
        const profiledata =await repositories.userProfile(userId)
        console.log(profiledata);

        return { status: true, profiledata }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default getuserprofile
