"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function BookCall() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="max-w-7xl mx-auto mb-60 mt-20 w-full flex flex-col md:flex-row px-4   items-center justify-between gap-6 md:gap-12">
      {/* Left Section */}
      <div className="flex-1 space-y-8 text-center md:text-left" id="calender">
        {/* Intro Text */}
        <h2 className="text-xl font-medium">Want to know more?</h2>
        <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">
          Book Intro Call
        </h1>
        <h2 className="text-xl font-semibold text-white">
          What do you get on this free meeting?
        </h2>
        <p className="text-lg text-white mb-6 mx-auto md:text-xl">
          Choose the best time for you, and we’ll confirm the details. This free meeting is designed to help you take your next big step!
        </p>

        {/* Two-Column List of Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div className="space-y-4">
            <p className="text-xl font-semibold text-white">Q&A</p>
            <p className="text-xl font-semibold text-white">Strategy</p>
            <p className="text-xl font-semibold text-white">Growth</p>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-semibold text-white">Guidance</p>
            <p className="text-xl font-semibold text-white">Plan</p>
            <p className="text-xl font-semibold text-white">Action</p>
          </div>
        </div>
      </div>


    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md shadow-lg w-full h-full"
    />


    </div>
  );
}
