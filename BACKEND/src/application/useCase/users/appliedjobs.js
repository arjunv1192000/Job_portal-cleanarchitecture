

const getappliedjob = async (userId, repositories) => {
 

    try {


        const appliedjobs =await repositories.userAppliedjob(userId)
  

        return { status: true, appliedjobs }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default getappliedjob