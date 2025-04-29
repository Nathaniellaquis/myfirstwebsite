"use client";

import { useState, useEffect } from "react";

interface ResponsiveMapProps {
    address: string;
    className?: string;
    height?: string;
}

export function ResponsiveMap({
    address = "Digital City",
    className = "",
    height = "400px"
}: ResponsiveMapProps) {
    const [mapUrl, setMapUrl] = useState<string>("");

    useEffect(() => {
        // Create a URL-encoded address
        const encodedAddress = encodeURIComponent(address);
        setMapUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=14`);
    }, [address]);

    return (
        <div className={`relative overflow-hidden rounded-2xl shadow-xl ${className}`} style={{ height }}>
            {mapUrl ? (
                <iframe
                    src={mapUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    allowFullScreen
                ></iframe>
            ) : (
                // Fallback/loading state
                <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                    <div className="text-xl font-medium text-center max-w-md px-4">
                        Loading map...
                    </div>
                </div>
            )}
        </div>
    );
} 