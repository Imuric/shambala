import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Brand Name */}
        <div className="text-xl font-bold text-slate-900">
          Shambala Enterprises
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600">
            Contact
          </Link>
          <Button>Get a Quote</Button>
        </div>
      </div>
    </nav>
  );
}