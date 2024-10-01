"use client";
import Image from "next/image";
import icon from "@/public/img/icon.png"; // Ruta relativa
import ComponentLogin from "./login";
import { useState } from "react";
import ComponentRegister from "./register";

export default function PageLogin() {
  const [login, setlogin] = useState("login");
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gradient-to-tl from-red-600 via-orange-400 to-orange-400">
        <div className="shadow-xl bg-white w-80 p-4 rounded-lg	">
          <div>
            <div className="flex justify-center items-center text-center">
              <Image
                src={icon}
                alt="Attenzio's Logo"
                width={200}
                height={200}
              />
            </div>
            {login == "login" ? (
              <ComponentLogin setlogin={setlogin} />
            ) : (
              <ComponentRegister setlogin={setlogin} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
