"use client";

import { FaSchool, FaUser, FaUserGraduate } from "react-icons/fa";

export default function PageDashboard() {
  const sections = [
    {
      name: "Estudiantes",
      cantidad: 100,
      color: "red",
      icon: <FaUserGraduate />,
    },
    {
      name: "Clases",
      cantidad: 20,
      color: "green",
      icon: <FaSchool />,
    },
    {
      name: "Usuarios",
      cantidad: 240,
      color: "purple",
      icon: <FaUser />,
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white  rounded-lg shadow text-center">
            <div
              className={`flex justify-center items-end text-7xl rounded-t-lg text-white bg-${section.color}-600 h-20`}
            >
              {section.icon}
            </div>
            <div className="h-24 flex flex-col items-center justify-center">
              <div className="">
                <p className="font-bold text-lg">{section.cantidad}</p>
                <p className="text-gray-500 text-xl">{section.name}</p>
              </div>
            </div>
            <div>
              <button
                className={`bg-${section.color}-600 w-full py-2 hover:bg-${section.color}-500 text-white font-bold`}
              >
                {" "}
                Agregar
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
