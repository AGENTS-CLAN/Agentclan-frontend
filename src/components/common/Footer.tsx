"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);  // Ensure this is only set on the client side
    }, []);

    if (!mounted) {
        return null;  // Prevent rendering until client-side hydration is complete
    }
    const footerNavs = [
        {
            label: "Resources",
            items: [
                { href: '#', name: 'Contact' },
                { href: '#', name: 'Support' },
                { href: '#', name: 'Documentation' },
                { href: '#', name: 'Pricing' },
            ],
        },
        {
            label: "About",
            items: [
                { href: '#', name: 'Terms' },
                { href: '#', name: 'License' },
                { href: '#', name: 'Privacy' },
                { href: '#-us', name: 'About Us' },
            ]
        },
        {
            label: "Explore",
            items: [
                { href: '#', name: 'Showcase' },
                { href: '#', name: 'Roadmap' },
                { href: '#', name: 'Languages' },
                { href: '#', name: 'Blog' },
            ]
        },
        {
            label: "Company",
            items: [
                { href: '#', name: 'Partners' },
                { href: '#', name: 'Team' },
                { href: '#', name: 'Careers' },
            ],
        }
    ];

    return (
        <footer className="pt-10 bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="justify-between items-center gap-12 md:flex">
                    <div className="flex-1 max-w-lg">
                        <h3 className="text-green-500 text-2xl font-bold">
                            Get our beautiful newsletter straight to your inbox.
                        </h3>
                    </div>
                    <div className="flex-1 mt-6 md:mt-0">
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-green-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-green-600 hover:bg-green-500 active:bg-green-700 active:shadow-none rounded-lg shadow">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
                    {footerNavs.map((item, idx) => (
                        <ul className="space-y-4 text-gray-300" key={idx}>
                            <h4 className="text-gray-200 font-semibold sm:pb-2">{item.label}</h4>
                            {item.items.map((el, idx) => (
                                <li key={idx}>
                                    <Link href={el.href} className="duration-150 hover:text-gray-400">
                                        {el.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
                    <p className="text-green-500">© 2025 Your Company Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
