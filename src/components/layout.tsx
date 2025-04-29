import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLink } from "@/components/nav-link";
import { AnimatedWrapper } from "@/components/animated-wrapper";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col gradient-background relative">
            {/* AnimatedBackground with overlay */}
            <AnimatedWrapper />

            <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border/50">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <h2 className="text-xl font-bold purple-gradient-text">My First Website</h2>
                    </Link>
                    <nav className="flex items-center gap-2 sm:gap-4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                        <ThemeToggle />
                        <Button variant="default" size="sm" className="rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all">Login</Button>
                    </nav>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center w-full relative z-[1]">
                {children}
            </main>
            <footer className="border-t border-border/50 py-8 bg-background/30 backdrop-blur-sm relative z-[1]">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} My First Website. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</Link>
                        <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
} 