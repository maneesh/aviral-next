"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Training", path: "/arivalai-training" },
    { name: "Contact us", path: "/contact" },
  ];

  const handleMenuClick = (item: any) => {
    setActiveItem(item.name);
    router.push(item.path);
    setShowMenu(false);
  };

  return (
    <>
      {/* Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-10"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      <div className="absolute md:top-[30%]  left-4 z-20">
        <span className="text-green-500 text-sm font-medium block mb-1 text-left">
          Menu
        </span>

        {/* Menu Content */}
        {showMenu && (
          <div
            className="border border-green-500 rounded-xl p-4 text-sm shadow-2xl text-black w-40 sm:w-40 max-w-[90vw] text-center relative z-30 md:translate-x-0 md:animate-slide-in-left"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            {/* Close icon */}
            <div
              onClick={() => setShowMenu(false)}
              className="absolute top-2 right-2 text-xl text-black cursor-pointer hover:text-red-500"
            >
              &times;
            </div>

            <p className="text-2xl font-bold mb-4">
              aviral<span className="text-green-500">ai</span>
            </p>

            <ul className="text-sm">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClick(item)}
                  className={`cursor-pointer px-2 py-2 ${
                    index !== menuItems.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  } ${
                    activeItem === item.name
                      ? "text-green-500 font-semibold"
                      : "hover:text-green-500"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hamburger Icon */}
        {!showMenu && (
          <div className="cursor-pointer z-30" onClick={() => setShowMenu(true)}>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        )}
      </div>

     
    </>
  );
};

export default Navbar;
