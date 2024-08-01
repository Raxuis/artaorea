import React from 'react'
import BurgerMenu from './BurgerMenu'

type HeaderProps = {
  children?: React.ReactNode,
  imageSrc?: string,
  link?: string,
  alt?: string
}

const handleClick = ({ link }: { link?: string }) => () => {
  window.open(link, '_blank');
}

const Header = ({ children, imageSrc, link, alt }: HeaderProps) => (
  <div className="header">
    <Bubbles />
    {imageSrc ? <div className="character-container">
      <img src={imageSrc} alt={alt} className="character" onClick={link ? handleClick({ link }) : undefined} />
    </div> : null}
    {children}
    <BurgerMenu />
  </div>
)

const Bubbles = () => {
  return (
    <>
      <div className="top-left-bubble">
        <img src="/assets/icons/shape-1.png" alt="shape-1" className="shape shape-1" />
      </div>
      <div className="top-right-bubble">
        <img src="/assets/icons/shape-2.png" alt="shape-2" className="shape shape-2" />
      </div>
      <div className="bottom-left-bubble">
        <img src="/assets/icons/shape-2.png" alt="shape-1" className="shape shape-3" />
      </div>
      <div className="bottom-right-bubble">
        <img src="/assets/icons/shape-1.png" alt="shape-2" className="shape shape-4" />
      </div>
    </>
  )
}

export default Header