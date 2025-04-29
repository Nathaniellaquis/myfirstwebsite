"use client";

import dynamic from "next/dynamic";

// Dynamically import the AnimatedBackground with no SSR
const AnimatedBackground = dynamic(
    () => import("@/components/animated-background").then(mod => mod.AnimatedBackground),
    { ssr: false }
);

export function AnimatedWrapper() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatedBackground />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
        </div>
    );
} 