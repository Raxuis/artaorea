"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

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

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

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
          <ul>
            {
              pathname === '/about-me' ?
                <>
                  <li><Link href="/">Accueil</Link></li>
                  <li><Link href="/contact">Me contacter</Link></li>
                </>
                : pathname === '/contact' ?
                  <>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/about-me">À propos de moi</Link></li>
                  </>
                  : <>
                    <li><Link href="/about-me">À propos de moi</Link></li>
                    <li><Link href="/contact">Me contacter</Link></li>
                  </>
            }
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
