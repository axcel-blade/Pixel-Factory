import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <section id='home' className='h-screen scroll-smooth'>
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-screen object-cover"
                >
                    <source src="./PixelFactory.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/75"></div>

                {/* Home */}
                <div className="relative flex flex-col items-center justify-center h-full">
                    <div>
                        <Image src="/WelcomePixelFactory.svg" alt="" width={1080} height={720} />
                    </div>
                    <div>
                        <Link href='#services'>
                            <Image src="/ExploreServices.svg" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id='services' className='h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center h-full'>
                    <div>
                        <h1 className='text-5xl font-poppins'>SERVICES</h1>
                    </div>
                    <div className='flex flex-row gap-10'>
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
                    <div className='flex flex-row gap-10'>
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
            </section>
        </div>
    )
}