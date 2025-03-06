import { Fugaz_One } from "next/font/google";
import React from "react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
// Dashboard Component
export default function Dashboard() {
  const statues = {
    num_days: 14,
    time_remaining: "14:12:12",
    date: new Date().toDateString(),
  };
  const moods = {
    crying: "😭",
    Sad: "😥",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
  };
  return (
    <div className="flex flex-1 flex-col gap-4 sm:gap-8 md:gap-12">
      <div className="grid grid-col sm:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg">
        {Object.keys(statues).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className="p-4 flex flex-col gap-1 sm:gap-2">
              <p className="font-medium uppercase text-xs sm:text-sm">
                {status.replaceAll("_", "")}
              </p>
              <p className={`text-base sm:text-lg ${fugaz.className}`}>
                {statues[status]}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}
      >
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <div className="grid grid-col-2 sm:grid-cols-5 gap-4">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              className={`${mood === 4 ? "col-span-2" : ""}${fugaz.className}`}
              key={moodIndex}
            >
              <p>{mood}</p>
              <p>{moods[moodIndex]}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
