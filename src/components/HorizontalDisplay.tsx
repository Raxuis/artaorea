import React from 'react'


interface HorizontalDisplayProps {
  imageSrc: string;
  alt: string;
  className?: string;
  title: string;
  dimensions: string;
  technics: string[];
  description: string;
}

const HorizontalDisplay = ({ imageSrc, alt, className, title, dimensions, technics, description }: HorizontalDisplayProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[2fr_2fr] xl:grid-cols-[1fr_3fr] gap-[15vw] sm:gap-[10vw] art-container ${className}-container max-sm:m-5`}>
      <img src={imageSrc} alt={alt} className={`${className} h-[500px] w-[400px] object-cover rounded-lg mx-auto`} />
      <div className="art-text">
        <div className={`art-header bg-cyan text-white ${className}-header w-full text-center p-3 sm:p-5 space-y-1`}>
          <h1 className="border-b border-white inline-flex">{title}</h1>
          <p>{dimensions}</p>
          <p>Technique: {technics.join(', ')}</p>
        </div>
        <div className="art-content text-lg xl:text-xl mt-2">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HorizontalDisplay