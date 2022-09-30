import Head from 'next/head'
import Image from 'next/image'
import Clock from '../public/icon-clock.svg'
import Eye from '../public/icon-view.svg'
import Nft from '../public/image-equilibrium.jpg'
import Eth from '../public/icon-ethereum.svg'
import Avatar from '../public/image-avatar.png'

export default function Home() {
  return (
    <div className=''>
      <div className='container'>
        <Image src={Nft} alt='nft-image' objectFit='contain' className='nft' />
        <h1>Equilibrium #3429</h1>
        <p className='text-body'>Our Equilibrium collection promotes balance and calm.</p>
        <div className='eth-row'>
          <span className='eth-amount'>
            <Eth />
            <p className='eth-text'>0.041 ETH</p>
          </span>
          <span className='eth-days'>
            <Clock />
            <p>3 days left</p>
          </span>
        </div>
        <hr />
        <Image
          src={Avatar}
          alt='user-avatar'
          objectFit='contain'
          height='30px'
          className='avatar'
        />
        <p>
          Creation of <span>Jules Wyvernd</span>
        </p>
      </div>
    </div>
  )
}
