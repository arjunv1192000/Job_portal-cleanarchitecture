const Getrecruiterdata = async (repositories) => {
  

    try {

        const data=await repositories.recruiterDatas()
       
   

        return { status: true,data }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default Getrecruiterdata