"use client";

import { FaAlignJustify } from "react-icons/fa6";

export default function NavTopComponent({
  setSidebarVisible,
  isSidebarVisible,
}) {
  return (
    <>
      <header className="bg-orange-500 shadow flex items-center justify-between p-4">
        <div className="md:hidden bg-orange-500">
          <button
            className=" text-white text-lg"
            onClick={() => setSidebarVisible(!isSidebarVisible)}
          >
            <FaAlignJustify />
          </button>
        </div>
        <div className="hidden relative md:block">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-semibold">Thomas Anree</p>
            <p className="text-xs text-gray-500">UX Designer</p>
          </div>
          <img
            className="h-10 w-10 rounded-full"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>
      </header>
    </>
  );
}
