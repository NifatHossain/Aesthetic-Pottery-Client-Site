
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { AuthContext } from "../firebase/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
    const {signInUser,googleSignIn, fbSignIn}=useContext(AuthContext);
    const handleSignIn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email= form.email.value;
        const password= form.password.value;
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
        form.reset();
    }
    const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleFbLogIn=()=>{
        fbSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
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
                <button onClick={handleFbLogIn} className="btn border-2 p-2 rounded-md bg-blue-500 text-white font-medium"><span className="text-xl"><FaFacebook /></span>Login with Facebook</button>
                <p className="text-center">New User? <Link to={'/register'}><span className="text-blue-600">Register</span></Link></p>

                
            </div>
        </div>
    );
};

export default LogIn;