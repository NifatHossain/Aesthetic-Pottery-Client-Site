import { useLoaderData } from "react-router-dom";


const CraftDetails = () => {
    const craftInfo = useLoaderData()
    const{name,image,price,rating,description,processTime,customOption,sCategory}= craftInfo;
    console.log(craftInfo);
    return (
        <div>
            <div className="flex items-center gap-7 border justify-center mt-10 p-3 bg-slate-50">
                <img className="rounded-md w-[500px]" src={image} alt="" />
                <div >
                    <h2 className="text-3xl font-bold text-green-400">{name}</h2>
                    <p className="text-xl font-bold ">Product Category: <span className="font-semibold"> {sCategory}</span></p>
                    <h3 className="text-xl font-bold ">Price: <span className="font-semibold"> {price}</span></h3>
                    <p className="text-xl font-bold ">Rating: <span className="font-semibold"> {rating}</span></p>
                    <p className="text-xl font-bold ">Delivery Time: <span className="font-semibold"> {processTime}</span></p>
                    <p className="text-xl font-bold ">Option of Customization: <span className="font-semibold">{customOption}</span> </p>
                    <p className="text-xl font-bold ">Product Description: <span className="font-semibold">{description}</span> </p>
                    <button className="bg-green-400 btn font-semibold mt-5 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;