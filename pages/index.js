import Head from 'next/head'
import Image from 'next/image'
import Clock from '../public/icon-clock.svg'
import Eye from '../public/icon-view.svg'
import Nft from '../public/image-equilibrium.jpg'
import Eth from '../public/icon-ethereum.svg'
import Avatar from '../public/image-avatar.png'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen bg-Verydarkblue '>
      <div className='container w-[350px] bg-darkblue flex flex-col justify-center items-center rounded-xl p-6'>
        <div className='z-0 bg-Cyan rounded-xl w-[300px] h-[300px] relative text-center group hover:cursor-pointer'>
          <div className='absolute z-20 flex h-full opacity-0 left-32 group-hover:opacity-100 group-hover:duration-300'>
            <Eye className='flex flex-col items-center justify-center w-12 m-auto ' />
          </div>
          <Image
            src={Nft}
            alt='nft pic'
            height={300}
            width={300}
            className='static z-10 rounded-lg group-hover:opacity-50 group-hover:duration-300'
          />
        </div>
        <div className='w-[300px] flex flex-col space-y-3 rounded-xl pt-5 '>
          <h1 className='text-[22px] text-Outlaw font-medium tracking-[.5px] text-White hover:opacity-90 hover:text-Cyan hover:duration-300 cursor-pointer text-Outfit'>
            Equilibrium #3429
          </h1>
          <p className='font-light text-Softblue opacity-80 text-[16px] tracking-[.5px]'>
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className='flex justify-between w-full'>
            <div className='flex items-center justify-center space-x-2'>
              <Eth />
              <p className='text-Cyan text-[15px] font-medium'>0.041 ETH</p>
            </div>
            <div className='flex items-center justify-center space-x-2'>
              <Clock />
              <p className='text-Softblue text-[15px]'>3 days left</p>
            </div>
          </div>
          <div className='relative py-3'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-b border-[1px] border-Softblue opacity-20'></div>
            </div>
            <div className='relative flex justify-center'>
              <span className='px-[150px]'></span>
            </div>
          </div>
          <div className='flex items-center pb-2'>
            <Image
              src={Avatar}
              alt='avatar'
              width={33}
              height={33}
              style={{
                border: '1px',
                borderStyle: 'solid',
                borderColor: 'White',
                borderRadius: '50%'
              }}
            />
            <p className='pl-4 text-Softblue opacity-80 text-[15px]'>Creation of</p>
            <p className='pl-1 text-[15px] text-White opacity-90 font-light hover:opacity-90 hover:text-Cyan hover:duration-300 cursor-pointer text-Outfit'>
              Jules Wyvern
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
