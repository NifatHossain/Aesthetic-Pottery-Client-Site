import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";


const AllCrafts = () => {
    const crafts= useLoaderData();
    console.log(crafts)
    return (
        <div>
            <h2>All Crafts Section</h2>
            <div className='grid grid-cols-3 mx-auto gap-4'>
                {/* <h2 className='text-3xl font-semibold text-center'>{trimedCrafts.length}</h2> */}
                {
                    crafts.map(craft=><CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default AllCrafts;