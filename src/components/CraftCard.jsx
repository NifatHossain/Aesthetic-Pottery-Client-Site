import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CraftCard = ({craft}) => {
    const {name,image,price,rating, stock,_id}= craft;
    const stockInt=(parseInt(stock))
    return (
        <div>
            <div className=" relative p-8 border-2 bg-slate-100 mx-auto rounded-md flex flex-col gap-3">
                <img className="rounded-md" src={image} alt="" />
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <div className="flex justify-around">
                        <div className="flex items-center">
                            <FaStar className="text-yellow-400" />
                            <p className="text-lg font-semibold ">Rating: {rating}</p>
                        </div>
                        
                        <p className="text-lg font-semibold">Price: {price}</p>
                    </div>
                </div>
                <div className="absolute top-11 left-11">
                    {
                        !(stockInt>0)?(
                            <p className="text-red-500 bg-red-200 rounded-md p-2">sould out</p>
                        ):(<p className="text-lime-500 bg-lime-200 rounded-md p-2">Item left: {stockInt}</p>)
                    }
                </div>

                <Link to={`/craftDetails/${_id}`}><button className="w-full p-2 rounded-md bg-green-400 text-white font-semibold">View Details</button></Link> 
                
            </div>
        </div>
    );
};

export default CraftCard;