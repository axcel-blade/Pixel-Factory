import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InstagramFeed from '../components/InstagramFeed'
import ImageScroll from '../components/ImageScroll'

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
            <section id='services' className='sm:h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center-safe h-full'>
                    <div>
                        <h1 className='text-6xl font-poppins'>
                            <b>SERVICES</b>
                        </h1>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-10'>
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
                    <div className='flex flex-col sm:flex-row gap-10'>
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
                        <InstagramFeed />
                    </div>
                    <div>
                        <Link href='#ourclients'>
                            <Image src="/OurClients.png" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our clients */}
            <section id='ourclients'className='sm:h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center-safe h-full gap-3'>
                    <div>
                        <h1 className='text-6xl font-poppins'>
                            <b>OUR CLIENTS</b>
                        </h1>
                    </div>
                    <div>
                        <span className='text-lg font-poppins'>We’re proud to work with a diverse range of clients across industries, from startups to global brands.</span>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-10 justify-center items-center'>
                        <div className='flex flex-row items-center gap-5 bg-white h-full'>
                            <ImageScroll />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-9xl font-bold'>50</h1>
                                <h1 className='text-3xl'>Project Count</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-9xl font-bold'>03</h1>
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
            <section id='testimonials'className='lg:h-screen sm:h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center-safe h-full gap-3 bg-white'>
                    <div>
                        <h1 className='text-6xl font-poppins text-black'>
                            <b>TESTIMONIALS</b>
                        </h1>
                    </div>
                    <div className='flex flex-col sm:flex-row'>
                        <Image src="/Review1.png" alt="" width={500} height={500} />
                        <Image src="/Review2.png" alt="" width={500} height={500} />
                    </div>
                    <div>
                        <Link href='#whoweare'>
                            <Image src="/WhoWeAre.png" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section id='whoweare'className='h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center-safe h-full gap-3'>
                    <div>
                        <h1 className='text-6xl font-poppins'>
                            <b>WHO WE ARE</b>
                        </h1>
                    </div>
                    <div>
                        <span className='text-lg font-poppins'>We are an independent, Sri Lanka-based digital content company dedicated to bringing your vision to life.<br/> 
                            As your bridge between creativity and technology, we transform ideas into stunning visual experiences that<br/> 
                            surpass the expected and elevate your project.</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src="/MadhushaPerera.png" alt="" width={300} height={300} />
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl font-poppins'>
                                <b>Madhusha Perera</b>
                            </h1>
                            <h1 className='text-xl font-poppins'>
                                <b>Co-Founder Lead Visual Effects & CGI</b>
                            </h1>
                        </div>
                    </div>
                    <div>
                        <Link href='#contactus'>
                            <Image src="/ContactUs.png" alt="" width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section id='contactus'className='lg:h-screen sm:h-screen scroll-smooth'>
                <div className='relative flex flex-col items-center justify-center-safe h-full gap-5 bg-white'>
                    <div>
                        <h1 className='text-6xl font-poppins text-black'>
                            <b>CONTACT US</b>
                        </h1>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-20 gap-5'>
                        {/* Address */}
                        <div className='flex flex-col'>
                            <h1 className='text-xl font-bold text-black'>ADDRESS</h1>
                            <h1 className='text-lg font-bold text-black/50'>14 Duke St, Bentley WA</h1>
                        </div>
                        {/* Phone */}
                        <div className='flex flex-col'>
                            <h1 className='text-xl font-bold text-black'>PHONE</h1>
                            <h1 className='text-lg font-bold text-black/50'>0123 456 789</h1>
                        </div>
                        {/* Email */}
                        <div className='flex flex-col'>
                            <h1 className='text-xl font-bold text-black'>EMAIL</h1>
                            <h1 className='text-lg font-bold text-black/50'>info@pixelfactorylk.com</h1>
                        </div>
                    </div>
                    <div>
                        <form action="post" className='flex flex-col gap-10'>
                            <div  className='flex flex-col sm:flex-row gap-5'>
                                <div>
                                    <input type="text" placeholder="Name" className='border-b text-black w-full'/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" className='border-b text-black w-full'/>
                                </div>
                                <div>
                                    <input type="tel" placeholder="Phone No." className='border-b text-black w-full' pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"/>
                                </div>
                            </div>
                            <div>
                                <input type="text" placeholder="Your design idea / Dropbox / Cloud link" className='border-b text-black w-full'/>
                            </div>
                            <div>
                                <input type="text" placeholder="Your requirements" className='border-b text-black w-full'/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <button className='flex bg-black text-white font-bold px-4 py-2 rounded'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}