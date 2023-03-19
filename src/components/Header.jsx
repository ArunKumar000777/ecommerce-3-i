import React from "react";
import Logo1 from "../assets/logoFirstSection.png";
import Logo2 from "../assets/logoSecondSection.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
    return (
        <div className="h-36 border-2 px-36 flex">
            {/* child 1 */}
            <div className="flex items-center">
                <div className="flex">
                    <img src={Logo1} alt="" className="h-8" />
                    <img src={Logo2} alt="" className="h-6 mt-1" />
                </div>
                <div>
                    <h3>logoipsm</h3>
                </div>
            </div>
            {/* child 2 */}
            <div className="self-center">
                <span>Classified</span>
            </div>
            <div className="self-center bg-input_color ">
                <input type="text" placeholder="Search here" className="bg-input_color h-[70px] w-[450px]"/>
                <SearchIcon style={{ color: "#3187ED" }} />
            </div>
        </div>
    );
};

export default Header;
