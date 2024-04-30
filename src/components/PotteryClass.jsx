
const PotteryClass = () => {
    return (
        <div>
            <div className="w-full p-2 my-5 rounded-md">
                <h2 className="text-center text-3xl font-semibold">Exclusive Pottery Class</h2>
            </div>
            <div className="card w-full bg-base-100 image-full">
                <figure><img src="https://i.ibb.co/9vnKVtp/slider4.jpg" alt="Shoes" /></figure>
                <div className="flex flex-col card-body">
                    <h2 className="text-3xl font-bold text-center text-white">Explore your Inner Artist</h2>
                    <p className="text-lg text-center text-white">Visit our pottery classes and learn from expert artists</p>
                    
                    <p className="text-lg text-center text-white">Class Times</p>
                    <p className="text-lg text-center text-white">Monday-Thursday: 7pm-9pm</p>
                    <p className="text-lg text-center text-white">Saturday-sunday: 1pm-4pm</p>
                    
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PotteryClass;