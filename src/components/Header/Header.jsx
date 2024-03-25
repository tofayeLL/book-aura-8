import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/listed'}>Listed Books</NavLink></li>
        <li><NavLink to={'/pages'}>Pages to Read</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
    return (
        <div className="my-8">
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
                    <a className="btn btn-ghost lg:text-4xl text-xl font-bold">Book Aura</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-4 space-x-2">
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