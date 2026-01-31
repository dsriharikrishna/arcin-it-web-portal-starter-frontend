"use client";

import Image from "next/image";

export default function ContactMap() {
    return (
        <div className="w-full relative rounded-3xl overflow-hidden bg-blue-50 mt-8 h-[300px] sm:h-[400px] lg:h-[500px]">
            {/* Placeholder for Map Image - typically an uploaded asset or map integration */}
            <Image
                src="/images/map-placeholder.png" // Ideally this should be the uploaded image, but using a placeholder or public asset for now
                alt="World Map Locations"
                fill
                className="object-cover"
                // Fallback if local image missing, using a reliable external placeholder for demo
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" // Generic map image
                }}
            />
            {/* Overlay Markers can be absolutely positioned here if creating a custom map component */}
        </div>
    );
}
