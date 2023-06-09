const getrecruiterjobs = async (recruiterId, repositories) => {
    

    try {


       
        const jobs =await repositories.recruiterjobs(recruiterId)
       

        return { status: true, jobs }

    } catch {
        return { message: 'Error getting job', status: false };

    }
}
export default getrecruiterjobs
