'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { fetchNavbarData, NavbarItem } from '../../app/navbarData'; 

interface MenuItem {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [navbarData, setNavbarData] = useState<NavbarItem[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loadNavbar = async () => {
      const data = await fetchNavbarData();
      setNavbarData(data);
    };

    loadNavbar();
  }, []);

  const menuItems: MenuItem[] = useMemo(() => {
    return navbarData.slice(0, 5).map((item) => ({
      name: item.name,
      path: item.data,
    }));
  }, [navbarData]);

  const handleMenuClick = (item: MenuItem) => {
    setActiveItem(item.name);
    router.push(item.path);
    setShowMenu(false);
  };

  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === pathname);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [pathname, menuItems]);

  return (
    <>
      {showMenu && (
        <div className="fixed inset-0 bg-black/40 z-10" onClick={() => setShowMenu(false)} />
      )}

      <div className="absolute md:top-[50%] z-20">
        <span className="text-green-500 text-sm font-medium block mb-1 text-left">
          {navbarData?.[5]?.data}
        </span>

        {showMenu && (
          <div
            className="border border-green-500 rounded-xl p-4 text-sm shadow-2xl text-black w-40 max-w-[90vw] text-center relative z-30 md:translate-x-0 md:animate-slide-in-left"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div
              onClick={() => setShowMenu(false)}
              className="absolute top-2 right-2 text-xl text-black cursor-pointer hover:text-red-500"
            >
              &times;
            </div>

            <p className="text-2xl font-bold mb-4">
              {navbarData?.[6]?.data}
              <span className="text-green-500">{navbarData?.[7]?.data}</span>
            </p>

            <ul className="text-sm">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClick(item)}
                  className={`cursor-pointer px-2 py-2 ${
                    index !== menuItems.length - 1 ? "border-b border-gray-300" : ""
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
