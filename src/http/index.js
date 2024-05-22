import axios from 'axios'
const API = axios.create({
    baseUrl : "https://react30.onrender.com/api/user/",
    headers : {
        "Content-Type" : "application/json",
        Authorization : localStorage.getItem("token"),
        Accept : "application/json"
    }
})
export default API