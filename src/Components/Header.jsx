import { useState } from "react";
import Logo from "../Images/logo.png";
import { Search, User, ShoppingCart } from "lucide-react";

const navItems = [
  { name: "Attar", url: "#", subItems: ["Option 1", "Option 2"] },
  { name: "Panajbi", url: "#", subItems: ["Option 1", "Option 2"] },
  { name: "T-shirt", url: "#", subItems: ["Option 1", "Option 2"] },
  { name: "Pant & Trouser", url: "#", subItems: ["Option 1", "Option 2"] },
  { name: "Women's Clothing", url: "#", subItems: ["Option 1", "Option 2"] },
  { name: "Combo Offers", url: "#", subItems: ["Option 1", "Option 2"] },
  { name: "Shirt", url: "#", subItems: ["Option 1", "Option 2"] },
  { name: "Footwear", url: "#", subItems: ["Option 1", "Option 2"] },
  { name: "Combo", url: "#", subItems: ["Option 1", "Option 2"] },
];

export default function HeaderNav() {
  const [cartCount, setCartCount] = useState(3);
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Top Header: Logo + Search + Icons */}
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-[200px] h-[70px]" />
        </div>

        {/* Search bar (Desktop) */}
        <div className="hidden md:flex items-center bg-gray-100 border px-3 py-2 w-1/2 rounded">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 outline-none px-2"
          />
          <Search className="text-gray-500" size={20} />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Search icon (Mobile) */}
          <button className="md:hidden">
            <Search className="w-6 h-6" />
          </button>

          {/* User icon */}
          <button>
            <User className="w-6 h-6" />
          </button>

          {/* Cart icon */}
          <div className="relative">
            <button>
              <ShoppingCart className="w-6 h-6" />
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-6 p-4">
          {navItems.map((item, i) => (
            <li key={i} className="relative group">
              <a
                href={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(i);
                }}
                className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-[21px] text-black font-normal inline-block"
              >
                {item.name}
              </a>

              {/* Dropdown */}
              {item.subItems && (
                <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                  {item.subItems.map((sub, j) => (
                    <li key={j}>
                      <a href="#" className="block px-3 py-2 hover:bg-gray-100">
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden p-4 border-t flex justify-between">
          <button
            className="px-3 py-2 border rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col gap-2 p-4 bg-white border-t">
            {navItems.map((item, i) => (
              <li key={i} className="relative">
                <a
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown(i);
                  }}
                  className="block px-3 py-2 rounded hover:bg-gray-100"
                >
                  {item.name}
                </a>
                {openIndex === i && item.subItems && (
                  <ul className="ml-4 mt-1 border-l border-gray-200">
                    {item.subItems.map((sub, j) => (
                      <li key={j}>
                        <a href="#" className="block px-3 py-2 hover:bg-gray-100">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
