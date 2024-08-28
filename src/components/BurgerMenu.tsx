"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { scrollToAboutMe, scrollToTypeOfWork } from "@/utils/navigation";
import TransitionLink from "./TransitionLink";

interface MenuItem {
  href?: string;
  label: string;
  onClick?: () => void;
}

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      isOpen &&
      !target.closest(".sidebar") &&
      !target.closest(".burger-menu")
    ) {
      setIsOpen(false);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems: MenuItem[] = [
    { href: "/", label: "Accueil" },
    { href: "/works", label: "Mes travaux" },
    { href: "/contact", label: "Me contacter" },
  ];

  const additionalItems: { [key: string]: MenuItem[] } = {
    "/about-me": [
      { href: "/", label: "Accueil" },
      { href: "/works", label: "Mes travaux" },
      { href: "/contact", label: "Me contacter" },
      { onClick: () => scrollToAboutMe(), label: "Mon parcours" },
    ],
    "/": [
      { href: "/about-me", label: "À propos de moi" },
      { href: "/works", label: "Mes travaux" },
      { href: "/contact", label: "Me contacter" },
    ],
    "/contact": [
      { href: "/", label: "Accueil" },
      { href: "/works", label: "Mes travaux" },
      { href: "/about-me", label: "À propos de moi" },
    ],
  };

  const items = additionalItems[pathname] || menuItems;

  return (
    <>
      <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={isOpen ? "#fff" : "#000"}
          className={`burger-menu-icon ${isOpen ? "active" : ""}`}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul className="mt-4 flex flex-col space-y-2">
            {items.map((item, index) =>
              item.href ? (
                <li key={index}>
                  <TransitionLink href={item.href} label={item.label} onClick={closeMenu} />
                </li>
              ) : (
                <li key={index}>
                  <a className="cursor-pointer" onClick={() => { item.onClick?.(); closeMenu(); }}>
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
