"use client";
import {
  FaArrowLeft,
  FaFileDownload,
  FaFileSignature,
  FaMeh,
} from "react-icons/fa";
import { FaSchool, FaUser } from "react-icons/fa6";

export default function NavComponent({ isSidebarVisible, setSidebarVisible }) {
  return (
    <>
      <aside
        className={`${
          isSidebarVisible ? "hidden" : "block fixed inset-0 z-50"
        } w-64 md:block bg-orange-500 text-white p-4`}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">TailAdmin</h1>
          {!isSidebarVisible ? (
            <FaArrowLeft
              className="text-white text-2xl"
              onClick={() => setSidebarVisible(!isSidebarVisible)}
            />
          ) : null}
        </div>
        <nav>
          <div className="mt-16 text-sm text-white">
            <h4 className="mb-2  ext-gray-200 font-bold">MENU</h4>
            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-2 text-lg font-semibold hover:bg-orange-600 hover:text-orange-200 p-2 rounded-md transition-all">
                <FaSchool />
                Cursos
              </li>
              <li className="flex items-center gap-2 text-lg font-semibold hover:bg-orange-600 hover:text-orange-200 p-2 rounded-md transition-all">
                <FaFileSignature />
                Inscripciones
              </li>
              <li className="flex items-center gap-2 text-lg font-semibold hover:bg-orange-600 hover:text-orange-200 p-2 rounded-md transition-all">
                <FaFileDownload />
                Reportes
              </li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-white">
            <h4 className="mb-2 text-gray-200 font-bold">MENU ADMINISTRADOR</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-lg font-semibold hover:bg-orange-600 hover:text-orange-200 p-2 rounded-md transition-all">
                <FaUser />
                Usuarios
              </li>
              <li className="flex items-center gap-2 text-lg font-semibold hover:bg-orange-600 hover:text-orange-200 p-2 rounded-md transition-all">
                <FaMeh />
                ¿MY HOME?
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}