import "./globals.css";
import { Poppins } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex flex-col'>
        <Header />
        <main className="primary-container flex-1 flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
