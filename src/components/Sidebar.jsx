import { useState } from "react";
import logo from "../assets/Logo.png";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  const mainNav = [
    "dashboard",
    "products",
    "order list",
    "users",
    "sales",
    "product stock",
  ];

  const bottomNav = ["settings", "log out"];

  return (
    <div className="w-[20%] h-screen flex flex-col bg-white border-r">

      {/* Logo */}
      <div className="flex justify-center pt-[24px]">
        <img src={logo} alt="Logo" />
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col px-[20px] mt-[40px] gap-3 flex-1">
        {mainNav.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={`w-full text-[14px] capitalize py-[15px] rounded-[10px] cursor-pointer text-center transition-all duration-200
              ${
                active === item
                  ? "bg-[#4880FF] text-white"
                  : "text-black hover:bg-[#4880FF] hover:text-white"
              }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col px-[20px] gap-3 pb-[30px]">
        {bottomNav.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={`w-full text-[14px] capitalize py-[15px] rounded-[10px] cursor-pointer text-center transition-all duration-200
              ${
                active === item
                  ? "bg-[#4880FF] text-white"
                  : "text-black hover:bg-[#4880FF] hover:text-white"
              }`}
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;