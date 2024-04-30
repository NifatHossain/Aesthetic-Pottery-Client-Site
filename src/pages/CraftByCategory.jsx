import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CraftByCategory = () => {
    const crafts= useLoaderData()
    // const{_id,name,image,price,rating,stock,description,processTime,customOption,sCategory,email,userName}= crafts;
    // const stockInt=(parseInt(stock))
    return (
        <div>
            <div className="w-full p-2 my-5 bg-slate-100 rounded-md">
                <h2 className="text-center text-3xl font-semibold">Explore Category</h2>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            
            {
                crafts.map(craft=><div key={craft._id}>
                    <div className=" relative p-8 border-2 bg-slate-100 mx-auto rounded-md flex flex-col gap-3">
                        <img className="rounded-md" src={craft.image} alt="" />
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold">{craft.name}</h2>
                            <div className="flex justify-around">
                                <div className="flex items-center">
                                    <FaStar className="text-yellow-400" />
                                    <p className="text-lg font-semibold ">Rating: {craft.rating}</p>
                                </div>
                                
                                <p className="text-lg font-semibold">Price: {craft.price}</p>
                            </div>
                            <h2 className="text-xl font-semibold">Category: <span className="text-base font-normal"> {craft.sCategory}</span></h2>
                            <h2 className="text-xl font-semibold">Delivery Time: <span className="text-base font-normal">{craft.processTime}</span></h2>
                            <h2 className="text-xl font-semibold">Description: <span className="text-base font-normal">{craft.description}</span> </h2>
                        </div>
                        <div className="absolute top-11 left-11">
                            {
                                !(parseInt(craft.stock)>0)?(
                                    <p className="text-red-500 bg-red-200 rounded-md p-2">sould out</p>
                                ):(<p className="text-lime-500 bg-lime-200 rounded-md p-2">Item left: {craft.stock}</p>)
                            }
                        </div>

                        <Link to={`/craftDetails/${craft._id}`}><button className="w-full p-2 rounded-md bg-green-400 text-white font-semibold">View Details</button></Link> 
                        
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default CraftByCategory;