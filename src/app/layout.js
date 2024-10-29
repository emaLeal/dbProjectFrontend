// layout.js
import "./globals.css";

export const metadata = {
  title: "Attenzio - Educación Virtual",
  description: "Portal educativo de Attenzio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased bg-gradient-to-r from-purple-50 to-indigo-100">
        {children}
      </body>
    </html>
  );
}


