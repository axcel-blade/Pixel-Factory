import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="relative h-screen w-full overflow-hidden scroll-auto">
            <main>
                <section id='home'>
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
                        <div className='grid grid-rows-2'>
                            <div>
                                <Image src="/WelcomePixelFactory.svg" alt="" width={1920} height={1080} />
                            </div>
                            <div>
                                <Link href={'#services'}>
                                    <Image src="/ExploreServices.svg" alt="" width={100} height={100} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='services'>
                    <span className='font-sans text-lg'>Services</span>
                </section>
            </main>
        </div>
    )
}
