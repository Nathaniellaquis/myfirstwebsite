"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <Button
                variant="ghost"
                size="sm"
                className={`rounded-full text-sm font-medium transition-all ${isActive
                    ? "bg-primary/10 text-primary hover:text-primary hover:bg-primary/15"
                    : "hover:text-primary"
                    }`}
            >
                {children}
            </Button>
        </Link>
    );
} 