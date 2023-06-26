const   jobunlist = async (jobId ,userId,status, repositories) => {
 

    try {


        const statuschange=await repositories.changestatus(jobId,userId,status )
       
        return { status: true,statuschange }

    } catch {
        return { message: 'Error changing status', status: false };

    }
}
export default jobunlist