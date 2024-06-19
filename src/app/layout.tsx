import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/molecule/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="absolute bottom-0 w-full sm:hidden">
          <NavBar />
        </header>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
