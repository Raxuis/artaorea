"use client";
import { animatePageOut } from "@/utils/transitions";
import { usePathname, useRouter } from "next/navigation";

export interface TransitionLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export function TransitionLink({ href, label, onClick }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
    if (onClick) {
      onClick();
    }
  }

  return (
    <a onClick={handleClick} className="cursor-pointer">
      {label}
    </a>
  );
}

export default TransitionLink;
