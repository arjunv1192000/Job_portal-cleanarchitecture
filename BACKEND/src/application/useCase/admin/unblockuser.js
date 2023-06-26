const userunblock = async (userId, repositories) => {
 

    try {


        const statuschange=await repositories.unblockuser(userId )
       
        return { status: true,statuschange }

    } catch {
        return { message: 'Error changing status', status: false };

    }
}
export default userunblock