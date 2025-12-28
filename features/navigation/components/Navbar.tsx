"use client";

import Link from "next/link";
import Image from "next/image";
import { navbarConfig } from "../navigation.constants";
import { TNavItem } from "../navigation.types";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Image src="/logo.png" alt="Site Logo" width={32} height={32} className="rounded" /> */}
              <span className="text-xl font-semibold text-gray-900">My Website</span>
            </Link>
          </div>

          {/* Right: Nav Links */}
          <div className="flex space-x-6">
            {navbarConfig.map((item: TNavItem) =>
              item.external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.id} href={item.href} className="text-gray-700 hover:text-blue-500 transition-colors">
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
