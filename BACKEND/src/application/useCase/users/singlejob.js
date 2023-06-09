const getsinglejob = async (jobId, repositories) => {
    

    try {

        const job=await repositories.singlejob(jobId)
     
       console.log(job,"contro");

        return { status: true, job }

    } catch {
        return { message: 'Error getting job', status: false };

    }
}
export default getsinglejob
