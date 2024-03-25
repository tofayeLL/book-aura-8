import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <NavLink to={'/'}><button className="btn"><a>Home</a></button></NavLink>
        <NavLink to={'/listed'}> <button className="btn"><a>Listed Books</a></button></NavLink>
        <NavLink to={'/pages'}><button className="btn"><a>Pages to Read</a></button></NavLink>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 space-y-2">

                            {
                                links
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-4 space-x-3">
                        {
                            links
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="space-x-4">
                        <a className="btn bg-[#23be0a] text-white">Sing In</a>
                        <a className="btn bg-[#59c6d2] text-white">Sign Up</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;