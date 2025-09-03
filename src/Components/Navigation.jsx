// import { useState } from "react";

// const navItems = [
//   { name: "Attar", url: "#", subItems: ["Option 1", "Option 2"] },
//   { name: "Panajbi", url: "#", subItems: ["Option 1", "Option 2"] },
//   { name: "T-shirt", url: "#", subItems: ["Option 1", "Option 2"] },
//   { name: "Pant & Trouser", url: "#", subItems: ["Option 1", "Option 2"] },
//   { name: "Women's Clothing", url: "#", subItems: ["Option 1", "Option 2"] },
//   { name: "Combo Offers", url: "#", subItems: ["Option 1", "Option 2"] },
//   { name: "Shirt", url: "#", subItems: ["Option 1", "Option 2"] },
//   { name: "Footwear", url: "#", subItems: ["Option 1", "Option 2"] },
//   { name: "Combo", url: "#", subItems: ["Option 1", "Option 2"] },
// ];

// export default function SimpleNav() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const toggleDropdown = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <nav className="bg-white shadow-md ">
//       {/* Desktop Menu */}
//       <ul className="hidden md:flex flex-wrap gap-4 p-4 justify-center">
//         {navItems.map((item, i) => (
//           <li key={i} className="relative">
//             <a
//               href={item.url}
//               onClick={(e) => {
//                 e.preventDefault();
//                 toggleDropdown(i);
//               }}
//               className="px-3 py-2 rounded hover:bg-gray-100 inline-block cursor-pointer text-[21px] text-black font-normal"
//             >
//               {item.name}
//             </a>
//             {/* Dropdown */}
//             {openIndex === i && item.subItems && (
//               <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md z-50">
//                 {item.subItems.map((sub, j) => (
//                   <li key={j}>
//                     <a
//                       href="#"
//                       className="block px-3 py-2 hover:bg-gray-100"
//                     >
//                       {sub}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden p-4 border-t flex justify-between">
//         <button
//           className="px-3 py-2 border rounded-md"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? "Close" : "Menu"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <ul className="md:hidden flex flex-col gap-2 p-4 bg-white border-t">
//           {navItems.map((item, i) => (
//             <li key={i} className="relative">
//               <a
//                 href={item.url}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleDropdown(i);
//                 }}
//                 className="block px-3 py-2 rounded hover:bg-gray-100"
//               >
//                 {item.name}
//               </a>
//               {openIndex === i && item.subItems && (
//                 <ul className="ml-4 mt-1 border-l border-gray-200">
//                   {item.subItems.map((sub, j) => (
//                     <li key={j}>
//                       <a
//                         href="#"
//                         className="block px-3 py-2 hover:bg-gray-100"
//                       >
//                         {sub}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }
