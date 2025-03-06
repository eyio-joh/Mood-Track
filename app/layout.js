import "./globals.css";
// import Transition from "./../components/Transition";
import { Fugaz_One, Open_Sans } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Mood-Track ",
  description: "Track your daily mood every day of the year",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`text-base sm:text-lg ${fugaz.className} textGradient`}>
        Mood-Track
      </h1>
      <div className=" flex items-center justify-between">
        {" "}
        PLACEHOLDER CTA || STAT
      </div>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`text-indigo-500 ${fugaz.className}`}> Created with❤️ </p>
    </footer>
  );

  return (
    <html lang="en">
      <body
        // ${geistSans.variable} ${geistMono.variable} antialiased
        className={` w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex-col text-slate-800 ${opensans.className}`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
