const Getrecruiter = async (recruiterId, repositories) => {
  

    try {

        const recruiterdata=await repositories.recruiterData(recruiterId)
       
   

        return { status: true,recruiterdata }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default Getrecruiter