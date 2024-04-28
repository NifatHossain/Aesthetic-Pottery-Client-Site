import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AuthContext } from "../firebase/AuthProvider";

const AddCrafts = () => {
    const {user}= useContext(AuthContext)
    const [subCategory, setSubCategory]=useState('')
    const [customizations, setCustomizations]=useState('')
    const handleSelect =(e)=>{
        setSubCategory(e);
    }
    const handleCustomization =(e)=>{
        setCustomizations(e);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form= e.target;
        const name= form.name.value;
        const image= form.image.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const description= form.description.value;
        const processTime= form.processTime.value;
        const stock= form.stock.value;
        const sCategory = subCategory;
        const customOption= customizations;
        const email= user.email;
        const userName= user.displayName;
        const craftData= {name,image, price,rating, description, processTime, stock, sCategory, customOption,email, userName}
        console.log(craftData);
        fetch('http://localhost:5000/addcrafts',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(craftData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">Add Items</h1>
            <div className="w-1/2 mx-auto mt-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto">
                <div className="flex flex-col gap-3 justify-around">
                    <input type="text" name="name" className="border-2 p-2 rounded-md " placeholder="Item Name" />
                    <input type="text" name="image" className="border-2 p-2 rounded-md " placeholder="image URL"/>
                </div>
                
                <div className="flex flex-col gap-3 justify-around">
                    <input type="text" name="price" placeholder="Product Price" className="border-2 p-2 rounded-md " />
                    <input type="text" name="rating" placeholder="Product Rating" className="border-2 p-2 rounded-md "/>
                </div>
                <div className="flex flex-col gap-3 justify-around">
                    <input type="text" name="description" placeholder="Short description" className="border-2 p-2 rounded-md "/>
                    <input type="text" name="processTime" placeholder="Processing Time" className="border-2 p-2 rounded-md "/>
                </div>
                <div className="flex flex-col gap-3 justify-around">
                    <input type="number" name="stock" placeholder="Stock Status" className="border-2 p-2 rounded-md "/>
                </div>
                <div className="flex justify-around">
                    <div className="dropdown">
                    <div tabIndex={0} role="" className="border-2 p-2  rounded-md btn bg-white">Select SubCategory<FaChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleSelect('Clay-made pottery')}><a>Clay-made pottery</a></li>
                        <li onClick={()=>handleSelect('Stoneware')}><a>Stoneware</a></li>
                        <li onClick={()=>handleSelect('Porcelain')}><a>Porcelain</a></li>
                        <li onClick={()=>handleSelect('Terra Cotta')}><a>Terra Cotta</a></li>
                        <li onClick={()=>handleSelect('Ceramics & Architectural')}><a>Ceramics & Architectural</a></li>
                        <li onClick={()=>handleSelect('Home decor pottery')}><a>Home decor pottery</a></li>
                    </ul>
                    </div>
                    <div className="dropdown">
                    <div tabIndex={0} role="" className="border-2 p-2 rounded-md btn bg-white">Customization Option <FaChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleCustomization('YES')}><a>YES</a></li>
                        <li onClick={()=>handleCustomization('NO')}><a>NO</a></li>
                    </ul>
                    </div>
                    
                </div>
                <input type="submit" className="btn border-2 p-2 rounded-md bg-green-400 text-white font-medium" value={'Submit'}/>

                
            </form>
            </div>
        </div>
    );
};

export default AddCrafts;