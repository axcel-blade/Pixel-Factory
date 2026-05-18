import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const images = [
  "/Uga.jpg",
  "/JHStudio.jpg",
  "/ASA.png",
  "/Athukorala.jpg",
].map((src) => withBasePath(src));

export default function ImageScroll() {
  const slider = [...images, ...images];

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white">
      <div className="flex w-max animate-scroll gap-6">
        {slider.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            width={150}
            height={150}
            alt=""
            className="h-[120px] w-[120px] shrink-0 rounded-xl object-cover sm:h-[140px] sm:w-[140px] lg:h-[150px] lg:w-[150px]"
          />
        ))}
      </div>
    </div>
  );
}
