import React from 'react'

export default function ImageScroll() {

    const images = [
        "/Uga.jpg",
        "/JHStudio.jpg",
        "/ASA.png",
        "/Athukorala.jpg",
    ];

    const slider = [...images];

    return (
        <div className="w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll">
            {slider.map((src, index) => (
            <img
                key={index}
                src={src}
                width={150}
                height={150}
                alt=""
                className="rounded-xl object-cover"
            />
            ))}
        </div>
    </div>
    )
}
