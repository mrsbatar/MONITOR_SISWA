import React from "react";
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, Fabars } from "React-icons/fa";
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-20 md:w-64">
        <div className="flex justify-between item-center">
          <h2 className="text-x1 font-bold">MyApp</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="flex item-center p-4 hover:bg-gray-700 cursor-pointer">
              <FaHome size={24} />
              <span className="ml-4 md:block">Beranda</span>
            </li>
            <li className="flex item-center p-4 hover:bg-gray-700 cursor-pointer">
              <FaUserAlt size={24} />
              <span className="ml-4 md:block">Datauser</span>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
};
export default Sidebar;
