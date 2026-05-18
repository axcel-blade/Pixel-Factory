import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import InstagramFeed from "../components/InstagramFeed";
import ImageScroll from "../components/ImageScroll";
import { Section, SectionCTA, SectionHeading } from "../components/Section";

const serviceIcons = [
  { src: "/3D_Architectural_Visulization_icon.png", alt: "3D Architectural Visualization" },
  { src: "/Web_Design_and_Development_icon.png", alt: "Web Design and Development" },
  { src: "/3D_Product_visualization_icon.png", alt: "3D Product Visualization" },
  { src: "/Graphic_Designs_icon.png", alt: "Graphic Design" },
  { src: "/Video_Productions_icon.png", alt: "Video Productions" },
  { src: "/Photography_and_Videography_icon.png", alt: "Photography and Videography" },
].map((icon) => ({ ...icon, src: withBasePath(icon.src) }));

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center scroll-mt-24"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={withBasePath("/PixelFactory.webm")} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-6 px-4 pt-24 pb-16 sm:gap-8 sm:px-6 lg:px-8">
          <Image
            src={withBasePath("/WelcomePixelFactory.svg")}
            alt="Welcome to Pixel Factory"
            width={1080}
            height={720}
            priority
            className="h-auto w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl"
          />
          <Link
            href="#services"
            className="transition-opacity hover:opacity-80"
            aria-label="Explore services"
          >
            <Image
              src={withBasePath("/ExploreServices.svg")}
              alt=""
              width={100}
              height={100}
              className="h-auto w-16 sm:w-20 lg:w-24"
            />
          </Link>
        </div>
      </section>

      <Section id="services">
        <SectionHeading>SERVICES</SectionHeading>

        <ul className="grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {serviceIcons.map((icon) => (
            <li key={icon.src} className="flex justify-center">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={250}
                height={250}
                className="h-auto w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[250px]"
              />
            </li>
          ))}
        </ul>

        <SectionCTA href="#work" src="/Work.png" alt="View our work" />
      </Section>

      <Section id="work" variant="light" innerClassName="gap-6 sm:gap-8">
        <SectionHeading>WORK</SectionHeading>

        <div className="w-full max-w-5xl">
          <InstagramFeed />
        </div>

        <SectionCTA href="#ourclients" src="/OurClients.png" alt="Our clients" />
      </Section>

      <Section id="ourclients">
        <SectionHeading>OUR CLIENTS</SectionHeading>

        <p className="max-w-2xl text-center text-base leading-relaxed sm:text-lg">
          We&apos;re proud to work with a diverse range of clients across
          industries, from startups to global brands.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="w-full max-w-xl lg:flex-1">
            <ImageScroll />
          </div>

          <div className="flex shrink-0 flex-col items-center gap-8 sm:flex-row lg:flex-col lg:gap-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl font-bold leading-none sm:text-7xl lg:text-8xl">
                50
              </span>
              <span className="mt-1 text-xl sm:text-2xl lg:text-3xl">
                Project Count
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl font-bold leading-none sm:text-7xl lg:text-8xl">
                03
              </span>
              <span className="mt-1 text-xl sm:text-2xl lg:text-3xl">
                Years Service
              </span>
            </div>
          </div>
        </div>

        <SectionCTA
          href="#testimonials"
          src="/Testimonials.png"
          alt="Testimonials"
        />
      </Section>

      <Section id="testimonials" variant="light">
        <SectionHeading>TESTIMONIALS</SectionHeading>

        <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap sm:gap-8">
          <Image
            src={withBasePath("/Review1.png")}
            alt="Client review"
            width={500}
            height={500}
            className="h-auto w-full max-w-sm sm:max-w-md"
          />
          <Image
            src={withBasePath("/Review2.png")}
            alt="Client review"
            width={500}
            height={500}
            className="h-auto w-full max-w-sm sm:max-w-md"
          />
        </div>

        <SectionCTA href="#whoweare" src="/WhoWeAre.png" alt="Who we are" />
      </Section>

      <Section id="whoweare">
        <SectionHeading>WHO WE ARE</SectionHeading>

        <p className="max-w-3xl text-center text-base leading-relaxed sm:text-lg">
          We are an independent, Sri Lanka-based digital content company
          dedicated to bringing your vision to life. As your bridge between
          creativity and technology, we transform ideas into stunning visual
          experiences that surpass the expected and elevate your project.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Image
            src={withBasePath("/MadhushaPerera.png")}
            alt="Madhusha Perera"
            width={300}
            height={300}
            className="h-auto w-48 max-w-full sm:w-56 lg:w-72"
          />
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-lg font-bold sm:text-xl">Madhusha Perera</h3>
            <p className="text-base font-bold sm:text-xl">
              Co-Founder Lead Visual Effects &amp; CGI
            </p>
          </div>
        </div>

        <SectionCTA href="#contactus" src="/ContactUs.png" alt="Contact us" />
      </Section>

      <Section id="contactus" variant="light" innerClassName="gap-6 sm:gap-8">
        <SectionHeading>CONTACT US</SectionHeading>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-8 sm:text-left">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold sm:text-xl">ADDRESS</h3>
            <p className="text-base text-black/50 sm:text-lg">
              14 Duke St, Bentley WA
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold sm:text-xl">PHONE</h3>
            <p className="text-base text-black/50 sm:text-lg">0123 456 789</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold sm:text-xl">EMAIL</h3>
            <p className="break-all text-base text-black/50 sm:text-lg">
              info@pixelfactorylk.com
            </p>
          </div>
        </div>

        <form action="post" className="flex w-full max-w-3xl flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full min-w-0 border-b border-black/30 bg-transparent py-2 text-black outline-none focus:border-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full min-w-0 border-b border-black/30 bg-transparent py-2 text-black outline-none focus:border-black"
            />
            <input
              type="tel"
              placeholder="Phone No."
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
              className="w-full min-w-0 border-b border-black/30 bg-transparent py-2 text-black outline-none focus:border-black"
            />
          </div>
          <input
            type="text"
            placeholder="Your design idea / Dropbox / Cloud link"
            className="w-full min-w-0 border-b border-black/30 bg-transparent py-2 text-black outline-none focus:border-black"
          />
          <input
            type="text"
            placeholder="Your requirements"
            className="w-full min-w-0 border-b border-black/30 bg-transparent py-2 text-black outline-none focus:border-black"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded bg-black px-6 py-2.5 font-bold text-white transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </Section>
    </main>
  );
}
