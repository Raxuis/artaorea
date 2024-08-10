"use client";
import { cn } from "@/lib/utils";
import { animatePageOut } from "@/utils/transitions";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export interface TransitionLinkProps {
  href: string;
  label: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function TransitionLink({ href, label, onClick, className }: TransitionLinkProps) {
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
    <a
      onClick={handleClick}
      className={cn("cursor-pointer", className)}
    >
      {label}
    </a>
  );
}

export default TransitionLink;
