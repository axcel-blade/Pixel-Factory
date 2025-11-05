import React from 'react'
import Image from 'next/image'

export default function HomePage() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="./PixelFactory.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Page Content */}
            <div className="relative flex items-center justify-center h-full">
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <Image src="/WelcomePixelFactory.svg" alt="" width={820} height={580} />
                    </div>
                    <div>
                        <Image src="/ExploreServices.svg" alt="" width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}
