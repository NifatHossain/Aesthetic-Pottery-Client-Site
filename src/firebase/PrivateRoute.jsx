import { useContext } from "react";
import {Navigate, useLocation} from "react-router-dom"
import { RotatingLines } from 'react-loader-spinner'
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location= useLocation()
    if(loading){
        return <div className="w-full h-[70vh] flex items-center justify-center "><RotatingLines/></div>
    }
    if(user){
        return children;
    }
   
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
       
    
};

export default PrivateRoute;