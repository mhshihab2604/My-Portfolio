import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Root = () => {
    return (
        <div className="font-abc bg-gradient-to-b text-white from-[#14141B] to-[#211239] min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;