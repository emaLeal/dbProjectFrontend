//import { verify, refresh } from "@/modules/auth/actions/actions";
import PageHome from "@/modules/home/home";
//import { cookies } from "next/headers";
//import { redirect } from "next/navigation";

import Image from 'next/image';
import icon from '@/public/img/icon.png';
import educacion from '@/public/educacion.png';
import docker from '@/public/logos/docker.png';
import htmlcss from '@/public/logos/htmlcss.png';
import javascript from '@/public/logos/javascript.png';
import psql from '@/public/logos/psql.png';
import python from '@/public/logos/python.png';
import reactjs from '@/public/logos/reactjs.png';
import tailwind from '@/public/logos/tailwind.png';
import nextjs from '@/public/logos/nextjs.png';
import idea from '@/public/idea.png';
import idea2 from '@/public/idea2.png';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-white ${styles.container}`}>
      {/* Encabezado */}
      <header className={`${styles.header}`}>
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Image src={icon} alt="Attenzio Logo" width={80} height={90} />
        </div>
        <h1 className={styles.title}>BIENVENIDO A ATTENZIO</h1>
        <button className={styles.botonEntrar}>Entrar</button>
      </header>

      {/* Imagen principal */}
      <section className={`${styles.section} mt-12`}>
        <div className="flex justify-center items-center">
          <Image
            src={educacion}
            alt="Educación"
            width={794}
            height={400}
            className=""
          />
        </div>
      </section>

      {/* Atención y soporte y ¿Quiénes Somos? */}
      <section className={`mt-16 ${styles.cardsContainer}`}>
        <div className={`${styles.card} flex flex-row items-start space-x-4`}>
          <div>
            <h2 className={styles.tituloSeccion}>Atención y Soporte</h2>
            <p>Email: campusvirtual@correo.attenzio.co</p>
            <p>Tel: 603 367 98 </p>
          </div>
          <Image
            src={idea}
            alt="idea"
            width={200}
            height={264}
            className=""
          />
        </div>

        <div className={`${styles.card} flex flex-row items-start space-x-4`}>
          <div>
            <h2 className={styles.tituloSeccion}>¿Quiénes Somos?</h2>
            <p>Una plataforma para el control de asistencia</p>
            <p>y atención a clase usando la dupla Geolocation</p>
            <p>+ Código QR</p>
          </div>
          <Image
            src={idea2}
            alt="idea2"
            width={170}
            height={180}
            className=""
          />
        </div>
      </section>

      {/* Línea separadora con texto "softwares" */}
      <div className="flex items-center justify-center w-full mt-8">
        <hr className="border-t-2 border-orange-500 w-1/3" />
        <span className="text-orange-500 mx-2 font-semibold text-lg">softwares</span>
        <hr className="border-t-2 border-orange-500 w-1/3" />
      </div>

      {/* Logos de software */}
      <section className={`mt-12 ${styles.logosContainer}`}>
        {[docker, htmlcss, javascript, psql, python, reactjs, nextjs, tailwind].map(
          (logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Logo"
              width={100}
              height={300}
              className={styles.logo}
            />
          )
        )}
      </section>

      {/* Línea separadora con texto "Attenzio" */}
      <div className="flex items-center justify-center w-full mt-8">
        <hr className="border-t-2 border-orange-500 w-1/3" />
        <span className="text-orange-500 mx-2 font-semibold text-lg">Attenzio</span>
        <hr className="border-t-2 border-orange-500 w-1/3" />
      </div>
      {/* Franja naranja en el pie de página */}
      <footer className={styles.footer}></footer>
    </div>
    
    
  );
}

  /*
  que pena la ignorancia pero esto sirve ? jajajaj

  const cookieManager = cookies(); 
  const access = cookieManager.get("access");
  const verifySession = await verify(access);
  console.log(verifySession);
  if (!verifySession) {
    const refreshToken = cookieManager.get("refresh");
    if (!refreshToken) {
      redirect("/login");
    }
    const refreshSession = await refresh(refreshToken);
    if (!refreshSession) redirect("/login");
  }

  return <PageHome />;
}
*/