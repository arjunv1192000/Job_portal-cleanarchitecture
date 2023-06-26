const recruiterjob = async (recruiterId, repositories) => {
 

    try {


        const jobdata=await repositories.recruiterjobs(recruiterId )
       
        return { status: true,jobdata }

    } catch {
        return { message: 'Error getting jobs', status: false };

    }
}
export default recruiterjob