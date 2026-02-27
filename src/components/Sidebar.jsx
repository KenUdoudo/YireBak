import { useState } from "react";
import logo from "../assets/Logo.png";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="w-[20%] flex flex-col items-center">
      <img src={logo} alt="Logo" className="pt-[24px]" />

      <div className="flex flex-col items-center px-[20px] w-full mt-[40px] gap-3">

        <div
          onClick={() => setActive("dashboard")}
          className={`w-full text-[14px] text-center py-[15px] rounded-[10px] cursor-pointer transition-all duration-200
            ${
              active === "dashboard"
                ? "bg-[#4880FF] text-white"
                : "bg-white text-black hover:bg-[#4880FF] hover:text-white"
            }`}
        >
          DashBoard
        </div>

      </div>
    </div>
  );
};

export default Sidebar;