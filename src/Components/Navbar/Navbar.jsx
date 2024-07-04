import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                        <Link to="/">
                            <li className="group flex  cursor-pointer flex-col">
                                Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>

                        <Link to='/about'>
                            <li className="group flex  cursor-pointer flex-col">
                                About <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        
                        <Link to="/portfolio">
                            <li className="group flex  cursor-pointer flex-col">
                                Portfolio <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        
                        <Link to="/skill">
                            <li className="group flex  cursor-pointer flex-col">
                                Skill  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>

                        <Link to="/contact">
                            <li className="group flex  cursor-pointer flex-col">
                                Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                    </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex items-center justify-between gap-16">
                        <ul className="flex items-center justify-between gap-10">
                            <Link to="/">
                                <li className="group flex  cursor-pointer flex-col">
                                    Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            </Link>

                            <Link to='/about'>
                                <li className="group flex  cursor-pointer flex-col">
                                    About <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            </Link>

                            <Link to="/portfolio">
                                <li className="group flex  cursor-pointer flex-col">
                                    Portfolio <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            </Link>
                            
                            <Link to="/skill">
                                <li className="group flex  cursor-pointer flex-col">
                                    Skill  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            </Link>

                            <Link to="/contact">
                                <li className="group flex  cursor-pointer flex-col">
                                    Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#B968C7] transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </div>
    );
};

export default Navbar;

