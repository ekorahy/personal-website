import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/molecule/NavBar";
import NavSide from "@/components/molecule/NavSide";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-500`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed z-50 bottom-0 w-full sm:hidden">
            <NavBar />
          </header>
          <main className="mx-auto mb-20 flex max-w-6xl gap-6 p-4 sm:p-8">
            <NavSide />
            <div className="w-full sm:pl-56">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
