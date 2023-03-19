import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const NavBar = () => {
    return (
        <div className="h-[53px] bg-primary_color flex justify-between px-36">
            {/* left side */}
            <div className="flex items-center gap-x-4">
                <div className="flex">
                    <div>
                        <LocalPhoneIcon style={{ color: "white" }} />
                    </div>
                    <span className="text-white">+221 555 888</span>
                </div>
                <div className="flex">
                    <div>
                        <EmailIcon style={{ color: "white" }} />
                    </div>
                    <span className="text-white">support@gmail.com</span>
                </div>
            </div>
            {/* right side */}
            <div className="flex items-center gap-x-4">
                <div className="flex">
                    <div>
                        <LocationOnIcon style={{ color: "white" }} />
                    </div>
                    <span className="text-white">Locations</span>
                </div>
                <div className="flex">
                    <span className="text-white">$ Dollar (US)</span>
                    <div>
                        <ArrowDropDownIcon style={{ color: "white" }}/>
                    </div>
                </div>
                <div className="flex">
                    <span className="text-white">EN</span>
                    <div>
                        <ArrowDropDownIcon style={{ color: "white" }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
