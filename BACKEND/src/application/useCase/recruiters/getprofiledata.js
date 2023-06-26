
const getprofile = async (recruiterId, repositories) => {
  

    try {

        const profiledata =await repositories.recruiterProfile(recruiterId)
   

        return { status: true, profiledata }

    } catch {
        return { message: 'Error getting  profile', status: false };

    }
}
export default getprofile