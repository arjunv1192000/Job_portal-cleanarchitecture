const Getuser = async (userId, repositories) => {
  

    try {

        const userdata=await repositories.userData(userId)
       
   

        return { status: true,userdata }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default Getuser