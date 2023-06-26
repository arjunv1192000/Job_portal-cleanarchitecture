
const getsavedjob = async (userId, repositories) => {
 

    try {


        const savedjobs =await repositories.userSavedjob(userId)
        
  

        return { status: true, savedjobs }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default getsavedjob