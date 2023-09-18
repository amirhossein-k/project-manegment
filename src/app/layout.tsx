import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "مدیریت مالی اتوفلاح",
  description: "مدیریت",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-fit`}>
        {children}
      </body>
    </html>
  );
}
