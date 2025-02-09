"use client";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";

export default function Banner() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Subscribed with:", email);
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-3xl shadow-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Subscribe to our newsletter
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Stay updated with the latest news, insights, and exclusive content delivered to your inbox.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row max-w-md gap-4" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-green-500 sm:text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-500 focus:ring-2 focus:ring-green-500"
              >
                Subscribe
              </button>
            </form>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 text-base text-gray-400">
                Get insightful articles and news delivered to you weekly.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-base text-gray-400">
                We respect your privacy. No spam, just quality content.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 w-full h-[40rem] bg-gradient-to-tr from-green-900 via-green-900 to-green-900 opacity-30"
        suppressHydrationWarning
      />
    </div>
  );
}
