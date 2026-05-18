import Image from "next/image";
import { withBasePath } from "@/lib/paths";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex w-full max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
        <Image
          src={withBasePath("/PixelFactoryLogo.svg")}
          alt="Pixel Factory"
          width={100}
          height={100}
          className="h-auto w-16 sm:w-20 lg:w-24"
          priority
        />
      </nav>
    </header>
  );
}
