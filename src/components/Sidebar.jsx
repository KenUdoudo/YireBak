import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const Sidebar = () => {
  const mainNav = [
    { name: "Dashboard", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Order List", path: "/order-list" },
    { name: "Users", path: "/users" },
    { name: "Sales", path: "/sales" },
    { name: "Product Stock", path: "/product-stock" },
  ];

  const bottomNav = [
    { name: "Settings", path: "/settings" },
    { name: "Log Out", path: "/log-out" },
  ];

  const navStyle = ({ isActive }) =>
    `w-full text-[14px] py-[15px] rounded-[10px] text-center transition-all duration-200
    ${
      isActive
        ? "bg-[#4880FF] text-white"
        : "text-black hover:bg-[#4880FF] hover:text-white"
    }`;

  return (
    <div className="w-[20%] h-screen flex flex-col bg-white border-r">

      {/* Logo */}
      <div className="flex justify-center pt-[24px]">
        <img src={logo} alt="Logo" />
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col px-[20px] mt-[40px] gap-3 flex-1">
        {mainNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}  // Important for root route
            className={navStyle}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col px-[20px] gap-3 pb-[30px]">
        {bottomNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={navStyle}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;