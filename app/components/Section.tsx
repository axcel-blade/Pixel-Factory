import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { withBasePath } from "@/lib/paths";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "light";
};

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
  variant = "default",
}: SectionProps) {
  const variantClass = variant === "light" ? "bg-white text-black" : "";

  return (
    <section
      id={id}
      className={`flex min-h-screen w-full scroll-mt-24 items-center py-16 sm:py-20 ${variantClass} ${className}`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:px-8 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`w-full text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionCTA({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="mt-2 shrink-0 transition-opacity hover:opacity-80"
    >
      <Image
        src={withBasePath(src)}
        alt={alt}
        width={100}
        height={100}
        className="h-auto w-20 sm:w-24"
      />
    </Link>
  );
}
