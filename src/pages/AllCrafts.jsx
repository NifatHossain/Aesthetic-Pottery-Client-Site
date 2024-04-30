import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";


const AllCrafts = () => {
    const crafts= useLoaderData();
    console.log(crafts)
    return (
        <div>
            <div className="w-full my-5 p-2 bg-slate-100 rounded-md">
                <h2 className="text-center text-3xl font-semibold">All Products</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4'>
                {/* <h2 className='text-3xl font-semibold text-center'>{trimedCrafts.length}</h2> */}
                {
                    crafts.map(craft=><CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default AllCrafts;