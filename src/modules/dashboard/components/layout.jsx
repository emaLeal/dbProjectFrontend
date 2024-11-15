"use client";

import { useState } from "react";
import NavComponent from "./nav";
import NavTopComponent from "./navTop";

export default function LayoutComponent({ children }) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);


  return (
    <>
      <div className="flex h-screen">
        {/* <!-- Menú lateral --> */}
        <NavComponent
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        {/* <!-- Contenedor Principal --> */}
        <div className="flex-1 flex flex-col">
          {/* <!-- Menú superior --> */}
          <NavTopComponent
            setSidebarVisible={setSidebarVisible}
            isSidebarVisible={isSidebarVisible}
          />

          {/* <!-- Área de Contenido --> */}
          <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
            {/* <!-- Sección de estadísticas --> */}
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
