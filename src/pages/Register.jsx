import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const {registerUser, updateUserInfo}=useContext(AuthContext);
    const handleRegister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email= form.email.value;
        const url= form.image.value;
        const password= form.password.value;
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
          // setRegisterError(
          //   "password should be atleast 6 character & contain atleast one upper and lower case character"
          // );
          toast.error("password must contain atleast 6 character & atleast one upper and lower case character");
          return;
        }
        registerUser(email,password)
        .then(result=>{
            console.log(result.user)
            toast.success('registration Successfull')
            updateUserInfo(name,url)
            .then(() => {
                console.log('User info updated')
              })
              .catch((error) => {
                console.log(error.message);
              });
        })
        .catch(error=>{
            toast.error('Registration failed')
            console.log(error.message)
        })
        form.reset();
    }
    
    return (
        <div className="bg-slate-50 h-[80vh] pt-4">
            <h1 className="text-3xl font-semibold text-center my-4">Registration</h1>
            <div>
                <form  onSubmit={handleRegister}  className="flex flex-col gap-4 w-1/4 mx-auto" >
                    <input type="text" name="name" className="border-2 p-2 rounded-md " placeholder="Your Name" required/>
                    <input type="email" name="email" className="border-2 p-2 rounded-md " placeholder="Email" required/>
                    <input type="text" name="image" className="border-2 p-2 rounded-md " placeholder="Image URL" required/>
                    <input type="password" name="password" className="border-2 p-2 rounded-md" placeholder="Password" required/>
                    <input type="submit" className="btn border-2 p-2 rounded-md bg-green-400 text-white font-medium" value={'Submit'}/>
                    <p className="text-center">Already Registered? <Link to={'/login'}><span className="text-blue-600">LogIn</span></Link></p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;