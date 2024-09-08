import React from 'react'
import BurgerMenu from './BurgerMenu'
import Image from 'next/image'
import { motion, useAnimate } from 'framer-motion';

type HeaderProps = {
  children?: React.ReactNode,
  imageSrc?: string,
  link?: string,
  alt?: string
}

const handleClick = ({ link }: { link?: string }) => () => {
  window.open(link, '_blank');
}

const Header = ({ children, imageSrc, link, alt }: HeaderProps) => {

  return (
    <div className="header">
      <Bubbles />
      {imageSrc ? <motion.div className="character-container" animate={{
        scale: [1, 1.1],
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity
        },
      }} >
        <Image
          src={imageSrc}
          alt={alt || ''}
          className="character"
          onClick={link ? handleClick({ link }) : undefined}
          width={1000}
          height={1000}
          priority
          placeholder="blur"
          blurDataURL={imageSrc}
        />
      </motion.div> : null}
      {children}
      <BurgerMenu />
    </div>
  )
}

const Bubbles = () => {
  return (
    <>
      <div className="top-left-bubble">
        <Image
          src="/assets/icons/shape-1.png"
          alt="shape-1"
          className="shape shape-1"
          width={1000}
          height={1000}
        />
      </div>
      <div className="top-right-bubble">
        <Image
          src="/assets/icons/shape-2.png"
          alt="shape-2"
          className="shape shape-2"
          width={1000}
          height={1000}
        />
      </div>
      <div className="bottom-left-bubble">
        <Image
          src="/assets/icons/shape-2.png"
          alt="shape-1"
          className="shape shape-3"
          width={1000}
          height={1000}
        />
      </div>
      <div className="bottom-right-bubble">
        <Image
          src="/assets/icons/shape-1.png"
          alt="shape-2"
          className="shape shape-4"
          width={1000}
          height={1000}
        />
      </div>
    </>
  )
}

export default Header
