import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'} className="font-semibold">Home</Link></li>
                        <li><Link to={'/allitems'} className="font-semibold">All Art & craft Items</Link></li>
                        <li><Link to={'/additems'} className="font-semibold">My Art & Craft List</Link></li>
                        
                    </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">Aesthetic Pottery</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'} className="font-semibold">Home</Link></li>
                        <li><Link to={'/allitems'} className="font-semibold">All Art & craft Items</Link></li>
                        <li><Link to={'/additems'} className="font-semibold">My Art & Craft List</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Sign Up</a>
                    {/* avatar */}
                    <div id='avater' className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Logout</a></li>
                        </ul> */}
                    </div>
                    <Tooltip anchorSelect="#avater" style={{ backgroundColor: "rgb(241 245 249)", color: "#222" }} clickable>
                        <p className="text-center">hello</p>
                        <button className="border-2 bg-slate-100 px-2 py-1 rounded-md font-semibold">Log Out</button>
                    </Tooltip>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;