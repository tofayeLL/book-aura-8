import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div >
            <div className="container mx-auto lg:px-20 ">
                <Header></Header>
            </div>
            <div className="container mx-auto lg:px-20 px-2 ">
                <Outlet></Outlet>
            </div>

        </div >
    );
};

export default Root;