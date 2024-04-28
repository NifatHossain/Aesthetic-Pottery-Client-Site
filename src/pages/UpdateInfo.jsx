import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const UpdateInfo = () => {
    const {updateUserInfo}=useContext(AuthContext)
    const handleUpdate=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const url= form.image.value;
        updateUserInfo(name,url)
        .then(() => {
            console.log('User info updated')
        })
        .catch((error) => {
            console.log(error.message);
        });
        
        form.reset();
    }
    return (
        <div className="bg-slate-50 h-[80vh] pt-4">
            <h1 className="text-3xl font-semibold text-center my-4">Update Info</h1>
            <div className="flex flex-col gap-4 w-1/4 mx-auto">
                <form  onSubmit={handleUpdate}  className="flex flex-col gap-4" >
                    <input type="text" name="name" className="border-2 p-2 rounded-md " placeholder="Name" />
                    <input type="text" name="image" className="border-2 p-2 rounded-md" placeholder="Photo URL" />
                    <input type="submit" className="btn border-2 p-2 rounded-md bg-green-400 text-white font-medium" value={'Submit'}/>
                    
                </form>

                
            </div>
        </div>
    );
};

export default UpdateInfo;