

const recruiterblock = async (recruiterId, repositories) => {
 

    try {


        const statuschange=await repositories.blockrecruiter(recruiterId )
       
        return { status: true,statuschange }

    } catch {
        return { message: 'Error changing status', status: false };

    }
}
export default recruiterblock