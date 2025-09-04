import { useState } from "react";
import Logo from "../../Images/Logo.png";
import { Search, ShoppingCart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAngleDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

// Dropdown Items
const dropdownItems = ["Show", "Panjabe", "Food", "Trouser"];

// Nav Items with NavLink URLs
const navItems = [
  { name: "Attar", url: "/AttarPage" },
  { name: "Panajbi", url: "/PanjabiPage" },
  { name: "T-shirt", url: "/TshartPage" },
  { name: "Pant & Trouser", url: "/Trouser" },
  { name: "Women's Clothing", url: "/Food" },
  { name: "Combo Offers", url: "/AttarPage" },
  { name: "Shirt", url: "/TshartPage" },
  { name: "Footwear", url: "/Trouser" },
  { name: "Combo", url: "/Food" },
].map(item => ({
  ...item,
  subItems: dropdownItems.map(sub => ({
    name: sub,
    url: `/${sub.toLowerCase()}`
  }))
}));

export default function HeaderNav() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const handleAddToCart = () => setCartCount(cartCount + 1);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col justify-between h-5 w-6 p-1 cursor-pointer"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="block h-[2px] w-full bg-black rounded"></span>
          <span className="block h-[2px] w-full bg-black rounded"></span>
          <span className="block h-[2px] w-full bg-black rounded"></span>
        </button>

        {/* Logo */}
        <NavLink to="/">
          <div className="flex-1 flex justify-center md:justify-start cursor-pointer">
            <img
              src={Logo}
              alt="Logo"
              className="w-[150px] sm:w-[180px] md:w-[200px] h-auto"
            />
          </div>
        </NavLink>

        {/* Desktop Search Bar */}
        <div className="lg:mr-[68px] hidden md:flex items-center border border-black bg-transparent w-1/2 rounded overflow-hidden mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 outline-none px-3 py-2"
          />
          <button className="bg-black flex items-center justify-center px-4 h-[40px]">
            <Search className="text-white w-5 h-5" />
          </button>
        </div>

        {/* Right Icons */}
        <div className="lg:gap-[4rem] flex items-center gap-3 md:gap-4">
          <NavLink
            to="/Login"
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faUser} className="text-black w-5 h-5" />
          </NavLink>

          <div className="relative">
            <button
              className="bg-white p-2 rounded-full shadow"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] sm:text-xs px-1.5 rounded-full">
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center gap-6 p-4 bg-white border-t">
        {navItems.map((item, i) => (
          <li key={i} className="relative group">
            <NavLink
              to={item.url}
              className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-[18px] text-black font-normal flex items-center gap-1"
            >
              {item.name}
              {item.subItems && (
                <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 w-3 h-3" />
              )}
            </NavLink>
            {item.subItems && (
              <ul className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50">
                {item.subItems.map((sub, j) => (
                  <li key={j}>
                    <NavLink
                      to={sub.url}
                      className="block px-3 py-2 hover:bg-gray-100 flex justify-between items-center text-black"
                    >
                      {sub.name}
                      <FontAwesomeIcon icon={faCheck} className="text-gray-300 w-3 h-3" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="absolute top-0 left-0 w-full max-w-xs h-full bg-white p-4 shadow-lg flex flex-col gap-2 overflow-y-auto">
            <button
              className="self-end mb-2 p-2 hover:bg-gray-100 rounded transition"
              onClick={() => setMobileNavOpen(false)}
            >
              Close
            </button>
            {navItems.map((item, i) => (
              <div key={i} className="relative">
                <div
                  onClick={() => setMobileDropdownOpen(mobileDropdownOpen === i ? null : i)}
                  className="block px-3 py-2 rounded hover:bg-gray-100 text-black font-medium flex items-center justify-between cursor-pointer"
                >
                  <NavLink to={item.url}>{item.name}</NavLink>
                  {item.subItems && (
                    <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 w-3 h-3" />
                  )}
                </div>
                {item.subItems && mobileDropdownOpen === i && (
                  <ul className="ml-4 mt-1 border-l border-gray-200 bg-white rounded">
                    {item.subItems.map((sub, j) => (
                      <li key={j}>
                        <NavLink
                          to={sub.url}
                          className="block px-3 py-2 hover:bg-gray-100 flex justify-between items-center text-black"
                        >
                          {sub.name}
                          <FontAwesomeIcon icon={faCheck} className="text-gray-300 w-3 h-3" />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
