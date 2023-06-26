

const applicants = async (jobId, repositories) => {
 

    try {


        const jobapplicants=await repositories.jobApplicants(jobId)
       
        return { status: true,jobapplicants }

    } catch {
        return { message: 'Error getting applicants', status: false };

    }
}
export default applicants