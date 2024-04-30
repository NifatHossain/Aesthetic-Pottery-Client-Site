
import { FcGoogle } from "react-icons/fc"
// import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../firebase/AuthProvider";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const LogIn = () => {
    const location = useLocation();
    const navigate= useNavigate();
    const {signInUser,googleSignIn, githubSignIn}=useContext(AuthContext);
    const handleSignIn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email= form.email.value;
        const password= form.password.value;
        signInUser(email,password)
        .then(result=>{
            toast.success('Login Successful')
            setTimeout(()=>navigate(location?.state? location.state:'/'),2000)
            console.log(result.user)
        })
        .catch(error=>{
            toast.error('Login Error')
            console.log(error.message)
        })
        form.reset();
    }
    const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(result=>{
            toast.success('Login Successful')
            console.log(result.user)
            navigate('/updateInfo')
        })
        .catch(error=>{
            toast.error('Login Error')
            console.log(error.message)
        })
    }
    const handleGithubLogIn=()=>{
        githubSignIn()
        .then(result=>{
            console.log(result.user)
            toast.success('Login Successful')
            navigate('/updateInfo')
        })
        .catch(error=>{
            toast.error('Login Error')
            console.log(error.message)
        })
    }
    return (
        <div className="bg-slate-50 h-[80vh] pt-4">
            <h1 className="text-3xl font-semibold text-center my-4">Sign In</h1>
            <div className="flex flex-col gap-4 w-1/4 mx-auto">
                <form  onSubmit={handleSignIn}  className="flex flex-col gap-4" >
                    <input type="email" name="email" className="border-2 p-2 rounded-md " placeholder="Email" />
                    <input type="password" name="password" className="border-2 p-2 rounded-md" placeholder="Password" />
                    <input type="submit" className="btn border-2 p-2 rounded-md bg-green-400 text-white font-medium" value={'Submit'}/>
                    <p className="text-center">or</p>
                </form>
                <button onClick={handleGoogleLogIn} className="btn border-2 p-2 rounded-md bg-gray-400 text-white font-medium"> <span className="text-xl"><FcGoogle /></span>Login with Google</button>
                {/* <button onClick={handleFbLogIn} className="btn border-2 p-2 rounded-md bg-blue-500 text-white font-medium"><span className="text-xl"><FaFacebook /></span>Login with Facebook</button> */}
                <button onClick={handleGithubLogIn} className="btn border-2 p-2 rounded-md bg-blue-500 text-white font-medium"><span className="text-xl"><FaGithub /></span>Login with Github</button>
                <p className="text-center">New User? <Link to={'/register'}><span className="text-blue-600">Register</span></Link></p>

                
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;