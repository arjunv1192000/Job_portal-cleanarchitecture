import Axios from "axios";
const instance=Axios.create({
    baseURL:'http://localhost:3000/service',
    headers:{
    "Content-Type": "application/json"
    }
})
export default instance