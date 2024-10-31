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

            {/* <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div class="bg-white p-6 rounded-lg shadow text-center">
                <p class="text-sm font-medium text-gray-500">Total views</p>
                <p class="text-2xl font-semibold">$3.456K</p>
                <p class="text-green-500 text-sm">+0.43%</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow text-center">
                <p class="text-sm font-medium text-gray-500">Total Profit</p>
                <p class="text-2xl font-semibold">$45.2K</p>
                <p class="text-green-500 text-sm">+4.35%</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow text-center">
                <p class="text-sm font-medium text-gray-500">Total Products</p>
                <p class="text-2xl font-semibold">2,450</p>
                <p class="text-green-500 text-sm">+2.59%</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow text-center">
                <p class="text-sm font-medium text-gray-500">Total Users</p>
                <p class="text-2xl font-semibold">3,456</p>
                <p class="text-red-500 text-sm">-0.95%</p>
              </div>
            </section>

            <section>
              <div class="bg-white p-6 rounded-lg shadow">
                <h2 class="text-xl font-semibold mb-4">Total Revenue</h2>
                <div class="h-40 bg-blue-100 rounded-lg">[Gráfica Aquí]</div>
              </div>
            </section> */}
          </main>
        </div>
      </div>
    </>
  );
}
