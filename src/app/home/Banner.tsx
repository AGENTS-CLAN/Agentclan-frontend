"use client";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function BookCallBanner() {
  const handleBookCall = () => {
    window.open("https://calendly.com/vinithn10/in-person", "_blank");
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-3xl shadow-lg max-w-7xl mx-auto mb-[13%] px-4 sm:px-6 lg:px-8">
    <div className="mx-auto my-auto max-w-7xl">
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-[#52e500] to-lime-400 bg-clip-text text-transparent">
              Book a Free Strategy Call
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Choose a time that works best for you, and let’s discuss how we can help you grow. 
              Get insights, strategy, and guidance tailored to your needs.
            </p>

            {/* Modern CTA Button */}
            <div className="mt-6">
              <button
                onClick={handleBookCall}
                className="relative group bg-[#52e500] hover:bg-[#46cc00] text-white text-xl font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Now
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Key Benefits Section */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-lg font-semibold text-white">Expert Guidance</dt>
              <dd className="mt-2 text-gray-400">
                Get strategic advice to take your business to the next level.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-lg font-semibold text-white">No Commitment</dt>
              <dd className="mt-2 text-gray-400">
                It’s free. No obligations—just valuable insights.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 w-full h-[40rem] bg-gradient-to-tr from-green-900 via-green-900 to-green-900 opacity-30"
        suppressHydrationWarning
      />
      </div>
  );
}
