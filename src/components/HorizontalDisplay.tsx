import React from 'react'


interface HorizontalDisplayProps {
  imageSrc: string;
  alt: string;
  className?: string;
  title: string;
  dimensions: string;
  technics: string[];
  description: string;
  reversed?: boolean;
}

const HorizontalDisplay = ({ imageSrc, alt, className, title, dimensions, technics, description, reversed }: HorizontalDisplayProps) => {
  return (
    <>
      {
        reversed ? (
          <div className={`art-container grid grid-cols-1 gap-[15vw] sm:gap-[10vw] lg:grid-cols-[2fr_2fr] xl:grid-cols-[3fr_1fr] ${className}-container max-sm:m-5`}>
            <div className="art-text">
              <div className={`art-header bg-cyan text-white ${className}-header w-full space-y-1 p-3 text-center sm:p-5`}>
                <h1 className="inline-flex border-b border-white">{title}</h1>
                <p>{dimensions}</p>
                <p>Technique: {technics.join(', ')}</p>
              </div>
              <div className="art-content mt-2 text-lg xl:text-xl">
                <p>
                  {description}
                </p>
              </div>
            </div>
            <img src={imageSrc} alt={alt} className={`${className} mx-auto h-[500px] w-[400px] rounded-lg object-cover`} />
          </div>
        ) : (
          <div className={`art-container grid grid-cols-1 gap-[15vw] sm:gap-[10vw] lg:grid-cols-[2fr_2fr] xl:grid-cols-[1fr_3fr] ${className}-container max-sm:m-5`}>
            <img src={imageSrc} alt={alt} className={`${className} mx-auto h-[500px] w-[400px] rounded-lg object-cover`} />
            <div className="art-text">
              <div className={`art-header bg-cyan text-white ${className}-header w-full space-y-1 p-3 text-center sm:p-5`}>
                <h1 className="inline-flex border-b border-white">{title}</h1>
                <p>{dimensions}</p>
                <p>Technique: {technics.join(', ')}</p>
              </div>
              <div className="art-content mt-2 text-lg xl:text-xl">
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default HorizontalDisplay