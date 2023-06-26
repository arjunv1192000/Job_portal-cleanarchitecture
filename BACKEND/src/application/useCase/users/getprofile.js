

const getuserprofile = async (userId, repositories) => {
  

    try {

        const profiledata =await repositories.userProfile(userId)
   

        return { status: true, profiledata }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default getuserprofile
