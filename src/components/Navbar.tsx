"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DashboardBtn from "./DashboardBtn";

function Navbar(){
    return (
        <nav className="border-b px-6">
            <div className="flex h-15 items-center px-6 container mx-auto">
                {/* Left Side LOGO */}
                <Link href="/" className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity">
                    <CodeIcon className="size-8 text-sky-600 " />
                    <span className="bg-gradient-to-r from-sky-400 to-teal-600 bg-clip-text text-transparent">CodeHire</span>
                </Link>


                {/* Right Side - Actions : Dashboard , Toggle etc */}
                <SignedIn>
                    <div className="flex items-center space-x-4 ml-auto">
                        <DashboardBtn />
                        <ModeToggle />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar;