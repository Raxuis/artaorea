import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='m-[5vh_5vw] flex flex-col sm:m-[10vh_10vw]'>
      {children}
    </section>
  )
}

export default Container