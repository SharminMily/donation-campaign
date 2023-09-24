import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Route = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Route;