import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Select from 'react-select'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyItems = () => {
    const loadedItems= useLoaderData();
    const [items,setItems]= useState(loadedItems)
    const [value,setvalue]=useState(null)
    const handleChange=(event)=>{
        setvalue(event.target.value);
        console.log(value)
    }
    const handleDelete=(id)=>{
        fetch(`https://aesthetic-pottery-server.vercel.app/deletecraft/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount === 1) {
                console.log("Successfully deleted one document.");
                toast.success('Product Deleted successfully')
                const remainings= items.filter(item=>item._id != id)
                setItems(remainings);
              } else {
                toast.error('Could not delete Product !!')
                console.log("No documents matched the query. Deleted 0 documents.");
              }
        })
    }
    const options = [
        { value: 'all', label: 'Show All' },
        { value: 'YES', label: 'Customization- Allowed' },
        { value: 'NO', label: 'Customization- Not Allowed' }
    ]
    return (
        <div>
            <div className="w-full p-2 bg-slate-100 rounded-md">
                <h2 className="text-center text-3xl font-semibold">My Products</h2>
            </div>
            <div className="w-1/2 mx-auto mt-4">
                <h3>Filter items by Customization options</h3>
                <Select onChange={handleChange} options={options} />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-5">
            {
                items.map(item=><div  key={item._id}>
                    <div className={`w-96 relative p-8 border-2 bg-slate-100 mx-auto rounded-md flex flex-col gap-3 ${value?((value=='NO' && item.customOption=='NO')? 'hidden':(value=='YES' && item.customOption=='YES')? 'block':'hidden'):'block'}`}>
                        <img src={item.image} alt="" />
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <div className="flex justify-around">
                                <div className="flex items-center">
                                    <FaStar className="text-yellow-400" />
                                    <p className="text-lg font-semibold ">Rating: {item.rating}</p>
                                </div>
                                
                                <p className="text-lg font-semibold">Price: {item.price}</p>
                            </div>
                        </div>
                        <div className="absolute top-11 left-11">
                            {
                                !(parseInt(item.stock)>0)?(
                                    <p className="text-red-500 bg-red-200 rounded-md p-2">sould out</p>
                                ):(<p className="text-lime-500 bg-lime-200 rounded-md p-2">Item left: {item.stock}</p>)
                            }
                        </div>
                        <div>
                            {
                                (item.customOption == 'YES')? (<p className="text-lg font-semibold text-center">Customization: Allowed</p>):(<p className="text-lg font-semibold text-center">Customization: Not Allowed</p>)

                            }
                        </div>
                        <div className="flex gap-3">
                        <Link className="w-full" to={`/updateitem/${item._id}`}><button className="w-full p-2 rounded-md bg-green-400 text-white font-semibold">Update</button></Link>
                        <button onClick={()=>handleDelete(item._id)} className="w-full p-2 rounded-md bg-orange-400 text-white font-semibold">Delete</button>
                        </div>
                    </div> 
                </div>)
            }
            </div>
            <ToastContainer/>
        </div>
    );
};

export default MyItems;