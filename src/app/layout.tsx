import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/molecule/NavBar";
import NavSide from "@/components/molecule/NavSide";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed bottom-0 w-full sm:hidden">
          <NavBar />
        </header>
        <main className="mx-auto mb-20 flex max-w-6xl gap-6 p-4">
          <NavSide />
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
