import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/redux/provider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GestionAppL",
  description: "Leo Monay app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto flex flex-col items-center w-screen min-h-screen p-5">
          <Provider>
            <NavBar />
            {children}
          </Provider>
        </main>
      </body>
    </html>
  );
}
