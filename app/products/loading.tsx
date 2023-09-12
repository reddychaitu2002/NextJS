


import React, { FC } from 'react'

interface LoadingProps {
  
}

const Loading: FC<LoadingProps> = ({  }) => {
  return (
    <main>
      <section className='w-full flex items-center gap-6 justify-center'>
      <div className='flex flex-col items-center py-20 justify-center md:justify-between md:flex-row flex-wrap  gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20  md:px-0'>
        {Array(4).fill(0).map((el,_i) => (
          <div className='w-[15rem] h-max flex flex-col justify-center items-center flex-wrap gap-6 p-4 '>
            <div className='w-full h-[10rem] bg-gray-400 animate-pulse'></div>
            <div className='w-full h-[2rem] bg-gray-400 animate-pulse'></div>
            <div className='w-full h-[2rem] bg-gray-400 animate-pulse'></div>
          </div>
        ))}
        </div>
        </section>
    </main>
  )
}

export default Loading;