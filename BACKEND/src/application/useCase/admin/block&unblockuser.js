const userblock = async (userId, repositories) => {
 

    try {


        const statuschange=await repositories.blockuser(userId )
       
        return { status: true,statuschange }

    } catch {
        return { message: 'Error changing status', status: false };

    }
}
export default userblock