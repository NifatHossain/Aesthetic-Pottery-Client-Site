import { useState } from "react";
import { Link } from "react-router-dom";


const CategoryCraft = () => {
    const [categories, setCategories]=useState([])
    // const categories= useLoaderData();
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data=>{
        setCategories(data)
    })
    
    return (
        <div className="mt-7 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {
                categories.map(category=><div key={category._id}>
                    <Link to={`/categories/${category.categoryName}`} className="card  w-96 bg-base-100  image-full">
                    <figure><img src={category.image} alt="image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold text-center text-2xl">{category.categoryName}</h2>
                        <p className="text-white text-center">{category.description}</p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                    </Link>
                </div>)
            }
            </div>
        </div>
    );
};

export default CategoryCraft;