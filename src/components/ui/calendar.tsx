"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [time, setTime] = React.useState<string | undefined>(undefined);
  const [submitted, setSubmitted] = React.useState(false);
  const [showCalendar, setShowCalendar] = React.useState(true); // To control visibility of the calendar

  React.useEffect(() => {
    setDate(new Date());
  }, []);

  const handleTimeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleChangeDate = () => {
    setShowCalendar(true); // Show calendar again when user clicks on the selected date
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <div className="text-4xl font-bold text-green-500 mb-6">
          <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
          <p>Thank you for booking!</p>
        </div>
        <p className="text-lg">
          We’ve received your booking and will confirm the details soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
    {/* Calendar Section */}
    {showCalendar && (
      <div className="flex-shrink-0">
        <DayPicker
          showOutsideDays={showOutsideDays}
          className={cn("p-4", className)}
          classNames={{
            months:
              "flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0",
            month: "space-y-4 text-3xl font-semibold",
            caption:
              "flex justify-center pt-2 relative items-center text-3xl font-semibold",
            caption_label: "text-3xl font-bold text-green-500",
            nav: "space-x-3 flex items-center",
            nav_button: cn(
              buttonVariants({ variant: "outline" }),
              "h-12 w-12 bg-transparent p-0 opacity-90 hover:opacity-100"
            ),
            nav_button_previous: "absolute left-3",
            nav_button_next: "absolute right-3",
            table: "w-full border-collapse space-y-2",
            head_row: "flex text-2xl font-semibold",
            head_cell:
              "text-muted-foreground rounded-md w-14 font-semibold text-[1.25rem]",
            row: "flex w-full mt-3",
            cell: cn(
              "relative p-0 text-center text-lg font-semibold focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
              props.mode === "range"
                ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                : "[&:has([aria-selected])]:rounded-md"
            ),
            day: cn(
              buttonVariants({ variant: "ghost" }),
              "h-14 w-14 p-0 font-semibold aria-selected:opacity-100"
            ),
            day_range_start: "day-range-start",
            day_range_end: "day-range-end",
            day_selected:
              "bg-green-600 text-primary-foreground hover:bg-green-600 hover:text-primary-foreground focus:bg-green-600 focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside:
              "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle:
              "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            ...classNames,
          }}
          components={{
            IconLeft: ({ className, ...props }) => (
              <ChevronLeft className={cn("h-6 w-6", className)} {...props} />
            ),
            IconRight: ({ className, ...props }) => (
              <ChevronRight className={cn("h-6 w-6", className)} {...props} />
            ),
          }}
          {...props}
          onDayClick={(day) => {
            setDate(day);
            setShowCalendar(false); // Hide calendar after date selection
          }}
        />
      </div>
    )}

    {/* Date and Time Selection Section */}
    {!showCalendar && date && (
      <div className="flex flex-col items-center justify-center text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <div className="w-full">
          {/* Display selected date with input field */}
          <label className="block text-2xl font-semibold text-white">
            Selected Date
          </label>
          <input
            type="date"
            value={date.toLocaleDateString("en-CA")} // Using the 'en-CA' format (YYYY-MM-DD) for date input
            onChange={handleChangeDate}
            className="mt-4 p-4 w-full rounded-lg text-lg text-white"
            onFocus={() => setShowCalendar(true)} // Show calendar when input is focused
          />

          {/* Time selection */}
          <div className="mt-6">
            <label className="block text-xl font-semibold text-white">
              Select Time
            </label>
            <select
              className="mt-4 p-4 w-full rounded-lg text-lg text-white"
              value={time}
              onChange={handleTimeSelect}
            >
              <option value="" disabled>
                Select a time
              </option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
            </select>
          </div>

          {/* Submit Button */}
          {time && (
            <div className="mt-6 w-full">
              <button
                className="px-8 py-3 text-xl font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none w-full"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
