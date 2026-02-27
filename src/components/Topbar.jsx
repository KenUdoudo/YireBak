import searchIcon from "../assets/search.png";
import profileIcon from "../assets/pfp.png";
import flag from "../assets/English.png";
import dropdown from "../assets/DropDown.png";
import notification from "../assets/notification.png";
const Topbar = () => {
  return (
    <div className="w-full h-[70px] flex items-center justify-between px-[30px]">
        <div className="flex flex-row gap-[10px] items-center border-[1px] border-[#E0E0E0] rounded-[50px] px-[15px] py-[10px] w-[380px]">
            <img src={searchIcon} alt="Search Icon" />
            <input type="text" placeholder="Search" className="text-[#202224] text-[14px] outline-0 w-full"/>
        </div>

        <div className="flex flex-row gap-[26px] items-center">
            <img src={notification} alt="Notification Icon" />
            <div >
                <img src={flag} alt="Flag Icon" />
                <p>English</p>
                <img src={dropdown} alt="Dropdown Icon" />
            </div>
        </div>
    </div>
  );
};

export default Topbar;