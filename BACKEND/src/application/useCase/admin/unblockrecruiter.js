
const recruiterunblock = async (recruiterId, repositories) => {
 

    try {


        const statuschange=await repositories.unblockrecruiter(recruiterId )
       
        return { status: true,statuschange }

    } catch {
        return { message: 'Error changing status', status: false };

    }
}
export default recruiterunblock