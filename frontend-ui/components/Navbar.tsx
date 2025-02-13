'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
            <Image src={"/logo.png"} alt="logo" height={30} width={100}/>
            </Link>
          
         
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
            <Link href="/features" className="text-gray-700 hover:text-black">Features</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
            <Link href="/features" className="text-gray-700 hover:text-black">Features</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}