import Link from "next/link";
import {
  FaArrowLeft,
  FaFileDownload,
  FaFileSignature,
  FaHome,
  FaMeh,
} from "react-icons/fa";
import { FaSchool, FaUser, FaUserGear } from "react-icons/fa6";

export default function NavComponent({ isSidebarVisible, setSidebarVisible }) {
  const sections = [
    { name: "Home", route: "", iconComponent: <FaHome /> },
    { name: "Clases", route: "course", iconComponent: <FaSchool /> },
    { name: "Inscripciones", route: "course", iconComponent: <FaFileSignature /> },
    { name: "Reportes", route: "course", iconComponent: <FaFileDownload /> },
  ];

  const adminSections = [
    { name: "Usuarios", route: "", iconComponent: <FaUser /> },
    { name: "Roles", route: "", iconComponent: <FaUserGear /> },

  ];

  return (
    <>
      <aside
        className={`${isSidebarVisible ? "hidden" : "block fixed inset-0 z-50"
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
              {sections.map((section, index) => (
                <li
                  key={index}
                  className=" rounded-md transition-all"
                >
                  <Link href={`/dashboard/${section.route}`}>
                  <p className="flex items-center gap-2 text-lg font-semibold cursor-pointer hover:bg-orange-600 hover:text-orange-200 p-2  rounded-md">
                  {section.iconComponent}
                  {section.name}
                  </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 text-sm text-white">
            <h4 className="mb-2 text-gray-200 font-bold">MENU ADMINISTRADOR</h4>
            <ul className="space-y-4">
              {adminSections.map((section, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer items-center gap-2 text-lg font-semibold hover:bg-orange-600 hover:text-orange-200 p-2 rounded-md transition-all"
                >
                  {section.iconComponent}
                  {section.name}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
