import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/molecule/NavBar";
import NavSide from "@/components/molecule/NavSide";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NavFooterList from "@/components/molecule/NavFooterList";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Ekorahy",
    default: "Personal Website | Ekorahy",
  },
  description: "Personal website of ekorahy",
  keywords: ["personal website", "portfolio", "front-end developer"],
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-zinc-700 dark:bg-zinc-950 dark:text-zinc-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed bottom-0 z-50 w-full sm:hidden">
            <NavBar />
          </header>
          <main className="mx-auto mb-20 flex max-w-6xl gap-6 p-4 sm:mb-0 sm:p-8">
            <NavSide />
            <div className="w-full sm:pl-56">
              <div>{children}</div>
              <footer className="mt-8">
                <NavFooterList />
                <div className="mx-auto mb-8 mt-12 w-max">
                  <h3 className="mb-2 text-center font-bold text-zinc-950 dark:text-white">
                    Reach me out
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-4xl">
                    <Link
                      className="hover:text-slate-950 dark:hover:text-white"
                      href="https://www.linkedin.com/in/ekorahy/"
                    >
                      <FiLinkedin />
                    </Link>
                    <Link
                      className="hover:text-slate-950 dark:hover:text-white"
                      href="mailto:ekorahy@gmail.com"
                    >
                      <HiOutlineMail />
                    </Link>
                    <Link
                      className="hover:text-slate-950 dark:hover:text-white"
                      href="https://github.com/ekorahy"
                    >
                      <FiGithub />
                    </Link>
                  </div>
                </div>
                <p className="text-center">Copyright &#169; Ekorahy 2024</p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
