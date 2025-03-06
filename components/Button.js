import { Fugaz_One } from "next/font/google";
import React from "react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Button(props) {
  const { text, dark, full } = props;
  return (
    <button
      // Only use `dark` inside className, do NOT spread it on the button
      className={`rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid ${
        dark ? "text-white bg-indigo-600 border-indigo-700" : "text-indigo-600"
      } ${full ? "grid place-items-center w-full" : ""}`}
    >
      <p
        className={`px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ${fugaz.className}`}
      >
        {text}
      </p>
    </button>
  );
}
