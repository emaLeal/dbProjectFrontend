"use client";

import { FaRegEdit, FaSearch, FaTrashAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";

export default function UserComponent() {
  const usuarios = [
    {
      documentoIdentidad: "12345678",
      nombreCompleto: "Juan Pérez",
      email: "juan.perez@example.com",
      code: "JP001",
      telefono: "+1 555-1234",
      rol: "Administrador",
      estatus: "Activo",
      acciones: "Editar | Eliminar",
    },
    {
      documentoIdentidad: "87654321",
      nombreCompleto: "María López",
      email: "maria.lopez@example.com",
      code: "ML002",
      telefono: "+1 555-5678",
      rol: "Usuario",
      estatus: "Inactivo",
      acciones: "Editar | Eliminar",
    },
    {
      documentoIdentidad: "11223344",
      nombreCompleto: "Carlos Gómez",
      email: "carlos.gomez@example.com",
      code: "CG003",
      telefono: "+1 555-9876",
      rol: "Supervisor",
      estatus: "Activo",
      acciones: "Editar | Eliminar",
    },
    {
      documentoIdentidad: "99887766",
      nombreCompleto: "Ana Torres",
      email: "ana.torres@example.com",
      code: "AT004",
      telefono: "+1 555-6543",
      rol: "Usuario",
      estatus: "Pendiente",
      acciones: "Editar | Eliminar",
    },
  ];

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-bold">Usuarios</h2>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-800 rounded">
            Crear usuario
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-12 p-4 shadow-lg rounded-lg bg-white">
          <div className="flex flex-col col-span-2 m-1">
            <label className="font-bold">Buscar usuario</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-500 w-5 h-5" />
              </div>

              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="Escribe aquí"
              />
            </div>
          </div>
          <div className="flex flex-col m-1">
            <label className="font-bold">Rol</label>
            <select className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="all" selected>
                Todos
              </option>
              <option value="admin">Administrador</option>
              <option value="teachers">Profesores</option>
              <option value="students">Estudiantes</option>
              <option value="Monitors">Monitores</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Estado</label>
            <select className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="all" selected>
                Todos
              </option>
              <option value="activos">Activos</option>
              <option value="desactivados">Desactivados</option>
              <option value="pendientes">Pendientes</option>
              <option value="Monitors">Monitores</option>
            </select>
          </div>
          <div className="flex flex-col justify-center md:items-center">
            <button class="bg-green-600  hover:bg-green-800 text-white font-bold py-2 px-6 border border-green-800 rounded">
              Buscar
            </button>
          </div>
        </div>
        <div className="shadow-lg rounded-lg bg-white ">
          <table class=" w-full px-4">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="px-2 py-2 text-left">Documento</th>
                <th className=" px-2 py-2 text-left">Nombre completo</th>
                <th className="px-2 py-2 text-left">Email</th>
                <th className="px-2 py-2 text-left">Code</th>
                <th className="px-2 py-2 text-left">Telefono</th>
                <th className="px-2 py-2 text-left">Rol</th>
                <th className="px-2 py-2 text-left">Estatus</th>
                <th className="px-2 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr
                  key={index}
                  className=" align-middle hover:bg-orange-300 hover:cursor-pointer"
                >
                  <td className="px-2 py-3">{usuario.documentoIdentidad}</td>
                  <td className="px-2 py-3">{usuario.nombreCompleto}</td>
                  <td className="px-2 py-3">{usuario.email}</td>
                  <td className="px-2 py-3">{usuario.code}</td>
                  <td className="px-2 py-3">{usuario.telefono}</td>
                  <td className="px-2 py-3">{usuario.rol}</td>
                  <td className="px-2 py-3">{usuario.estatus}</td>
                  <td className="px-2 py-3 flex gap-2 justify-center">
                    <FaRegEdit className="text-green-500" />
                    <FaTrashAlt className="text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
