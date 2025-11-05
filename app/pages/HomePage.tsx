import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="relative h-full w-full overflow-hidden scroll-auto">
            <div id='home'>
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-fit object-cover"
                >
                    <source src="./PixelFactory.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/75"></div>

                {/* Page Content */}
                <div className="relative flex flex-col items-center justify-center h-full">
                    <div>
                        <Image src="/WelcomePixelFactory.svg" alt="" width={920} height={680} />
                    </div>
                    <div>
                        <Link href={'#services'}>
                            <Image src="/ExploreServices.svg" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>

                <div className='relative flex flex-col items-center justify-between h-full'>
                    <div>
                        <span>
                            <h1>Services</h1>
                        </span>
                    </div>
                    <div className='flex flex-row'>
                        <div>
                            <Image src="/3D_Architectural_Visulization_icon.png" alt="" width={200} height={200} />
                        </div>
                        <div>
                            <Image src="/Web_Design_and_Development_icon.png" alt="" width={200} height={200} />
                        </div>
                        <div>
                            <Image src="/3D_Product_visualization_icon.png" alt="" width={200} height={200} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div>
                            <Image src="/Graphic_Designs_icon.png" alt="" width={200} height={200} />
                        </div>
                        <div>
                            <Image src="/Video_Productions_icon.png" alt="" width={200} height={200} />
                        </div>
                        <div>
                            <Image src="/Photography_and_Videography_icon.png" alt="" width={200} height={200} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}