import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Root = () => {
    return (
        <div className="font-abc bg-gradient-to-b text-white from-[#14141B] to-[#211239] min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;