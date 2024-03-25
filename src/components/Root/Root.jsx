import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="container mx-auto lg:px-20 px-2 ">
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;