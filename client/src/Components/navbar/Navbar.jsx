import "./navbar.scss"
import { IoHomeOutline, IoMoon } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import {Link} from "react-router-dom";
import { CiMail } from "react-icons/ci";
//import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>FestivalMeetUp</span>
                </Link>
                <IoHomeOutline/>
                <IoMoonOutline/>
                <IoGridOutline/>
                <div className="search">
                    <IoSearch/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="right">
                <IoPersonOutline/>
                <IoMailOutline/>
                <IoNotificationsOutline/>
                <div className="user">
                    <img src="https://i.pinimg.com/474x/13/e8/8b/13e88b4a07b75328341ef445df26c9a7.jpg" alt=""/>
                    <span>User</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar