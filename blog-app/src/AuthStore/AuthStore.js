import {create} from 'zustand'
import axios from 'axios';
export const useAuth = create((set) => ({
    currentUser : null,
    loading : false,
    error : null,
    isAuthenticated : false,

    login : async(userCredWithRole) => {
        let {role,...userCredObj} = userCredWithRole;
        console.log(role);
        try{
            set({
                loading : true,
                error : null
            })
            let res = await axios.post('http://localhost:4000/common-api/login',userCredObj,{ withCredentials : true });
            console.log("res is ",res);
            set({
                loading : false,
                error : null,
                isAuthenticated : true,
                currentUser : res.data.payload
            })
        }catch(err){
            console.log("err is",err.response?.data);
            set({
                loading : false,
                isAuthenticated : false,
                currentUser : null,
                error : err.response?.data?.error || "Login Failed"
            })
        }
    },
    logout : async() => {
        try{
            // setloading is true
            set({
            loading:true,
            error : null
        })
        let res = await axios.get('http://localhost:4000/common-api/login',{ withCredentials : true});
        console.log("res is",res);
        set({
            currentUser : null
        })

        }catch(err){
            set({
            loading : false,
            error : err.response?.data?.error || "Logout Failed",
            currentUser : null,
            isAuthenticated : false
            })
        }
    }
}))