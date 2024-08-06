import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex flex-col m-[5vh_5vw] sm:m-[10vh_10vw]'>
      {children}
    </section>
  )
}

export default Container