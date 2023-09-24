import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
          <nav className="flex justify-between items-center px-8 py-6 ">    

          <img className="w-48" src="/public/Resources/Logo.png" alt="" />      

            <ul className="flex gap-5 font-semibold text-lg">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav> 
        </div >
    );
};

export default Header;