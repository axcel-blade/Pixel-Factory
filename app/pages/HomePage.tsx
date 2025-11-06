import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            {/* Home */}
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

                {/* Home page content */}
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
                <div className='relative flex flex-col items-center justify-center-safe h-full'>
                    <div>
                        <h1 className='text-6xl font-poppins'>
                            <b>SERVICES</b>
                        </h1>
                    </div>
                    <div className='flex flex-row gap-10'>
                        <div>
                            <Image src="/3D_Architectural_Visulization_icon.png" alt="" width={250} height={250} />
                        </div>
                        <div>
                            <Image src="/Web_Design_and_Development_icon.png" alt="" width={250} height={250} />
                        </div>
                        <div>
                            <Image src="/3D_Product_visualization_icon.png" alt="" width={250} height={250} />
                        </div>
                    </div>
                    <div className='flex flex-row gap-10'>
                        <div>
                            <Image src="/Graphic_Designs_icon.png" alt="" width={250} height={250} />
                        </div>
                        <div>
                            <Image src="/Video_Productions_icon.png" alt="" width={250} height={250} />
                        </div>
                        <div>
                            <Image src="/Photography_and_Videography_icon.png" alt="" width={250} height={250} />
                        </div>
                    </div>
                    <div>
                        <Link href='#work'>
                            <Image src="/Work.png" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Work */}
            <section id='work'className='h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center-safe h-full bg-white'>
                    <div>
                        <h1 className='text-6xl font-poppins text-black'>
                            <b>WORK</b>
                        </h1>
                    </div>
                    <div>
                        <Link href='#ourclients'>
                            <Image src="/OurClients.png" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our clients */}
            <section id='ourclients'className='h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center-safe h-full gap-3'>
                    <div>
                        <h1 className='text-6xl font-poppins'>
                            <b>OUR CLIENTS</b>
                        </h1>
                    </div>
                    <div>
                        <span  className='text-lg font-poppins'>We’re proud to work with a diverse range of clients across industries, from startups to global brands.</span>
                    </div>
                    <div className='flex flex-row gap-10 justify-center items-center'>
                        <div className='flex flex-row items-center gap-5 bg-white h-full'>
                            <Image src="/Uga.jpg" alt="" width={150} height={150} />
                            <Image src="/JHStudio.jpg" alt="" width={150} height={150} />
                            <Image src="/ASA.png" alt="" width={150} height={150} />
                            <Image src="/Athukorala.jpg" alt="" width={150} height={150} />
                        </div>
                        <div className='flex flex-col items-center gap-5'>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-9xl font-bold'>50</h1>
                                <h1 className='text-3xl'>Project Count</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-9xl font-bold'>3</h1>
                                <h1 className='text-3xl'>Years Service</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href='#testimonials'>
                            <Image src="/Testimonials.png" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id='testimonials'className='h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center-safe h-full gap-3 bg-white'>
                    <div>
                        <h1 className='text-6xl font-poppins text-black'>
                            <b>TESTIMONIALS</b>
                        </h1>
                    </div>
                    <div className='flex flex-row'>
                        <Image src="/Review1.png" alt="" width={500} height={500} />
                        <Image src="/Review2.png" alt="" width={500} height={500} />
                    </div>
                    <div>
                        <Link href='#ourclients'>
                            <Image src="/WhoWeAre.png" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}