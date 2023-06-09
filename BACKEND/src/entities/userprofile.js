
const userprofiledata=(userId,name,email,phone,about,education,language,personalwebsite,location,jobRole,image,cv)=>{
    return{
        getuserid:()=>userId,
        getname:()=>name,
        getemail:()=>email,
        getphone:()=>phone,
        getabout:()=>about,
        geteducation:()=>education,
        getlanguage:()=>language,
        getwebsite:()=>personalwebsite,
        getlocation:()=>location,
        getjobrole:()=>jobRole,
        getimage:()=>image,
        getcv:()=>cv,
    }


}

export default userprofiledata