import { ChevronRightIcon } from "@radix-ui/react-icons";
import TransitionLink from "./TransitionLink";
import Image from "next/image";

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "Accueil", url: "/" },
  { text: "A propos de moi", url: "/about-me" },
  { text: "Mes travaux", url: "/works" }
];

export function Footer() {
  return (
    <footer className="p-5 lg:px-10">
      <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
        <a href="#" className="flex items-center gap-x-2">
          <Image
            width={32}
            height={32}
            className="size-8 rounded-full"
            src="/assets/icons/logo.png"
            alt="Artaorea"
            priority
          />
          <h2 className="font-bold text-neutral-900 dark:text-white">
            Artaorea
          </h2>
        </a>
        <ul className="flex items-center justify-center gap-x-10">
          {links.map((link, index) => (
            <TransitionLink
              key={index}
              href={link.url}
              label={link.text}
              className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-cyan hover:underline hover:underline-offset-4 dark:font-medium hover:dark:text-neutral-100"
            >
            </TransitionLink>
          ))}
        </ul>
        <TransitionLink
          href="/contact"
          className="inline-flex w-fit items-center justify-center gap-x-1 rounded-md bg-cyan px-6 py-2 text-sm font-semibold tracking-tighter text-white ring-1 transition duration-200 hover:ring-2 hover:ring-cyan hover:ring-offset-2 lg:h-12 lg:text-base"
          label={
            <>
              Me contacter
              <ChevronRightIcon className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </>
          }
        />
      </div>
    </footer>
  );
}
