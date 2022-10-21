import { OpenZeroTrustSVG, RancherLogoSVG } from '@/assets/images'
import EpinioLogo from '@/assets/products-logos/icon-epinio.svg'
import HarvesterLogo from '@/assets/products-logos/icon-harvester.svg'
import KubewardenLogo from '@/assets/products-logos/icon-kubewarden.svg'
import OpniLogo from '@/assets/products-logos/icon-opni.svg'
import Image from 'next/image'
import { DocAndGitLinks } from '../DocAndGitLinks'
export const Header = () => {
  return (
    <div className='relative bg-white text-black dark:bg-secondary-dark dark:text-black py-2'>
      <div className='grid grid-flow-row place-self-end md:grid-flow-col mx-auto 2xl:w-4/6'>
        {/* Main Header */}
        <div className='place-self-start md:lef-0'>
          <OpenZeroTrustSVG className='w-40 place-self-start md:left-0 px-4 fill-current text-blue-500 dark:text-blue-500 my-4' />
        </div>

        <div className='flex place-self-end md:place-self-end self-center gap-2 px-4 py-4'>
          {/* <OpenZeroTrustSVG className='w-40 place-absolute-start md:place-self-start-0 fill-current text-blue-500-light dark:text-blue-500 my-4' /> */}

          <DocAndGitLinks />
          <div className='relative flex self-center align-middle md:ml-2 group hover:cursor-pointer'>
            <div className='p-2 border border-gray-400 border-opacity-40'>
              <span className='hidden md:flex text-sm'>More from SUSE</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='flex md:hidden w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </div>

            <div className='absolute -left-20 md:left-0 top-10 hidden group-hover:flex flex-col bg-white  dark:bg-suse-pine_green text-sm drop-shadow shadow-sm shadow- p-4 z-10 min-w-[180px] transition-all'>
              <a rel='nofollow noreferrer' href='https://rancher.com/' target='_blank' className='flex gap-2 hover:ml-2 transition-all'>
                <RancherLogoSVG className='w-4' />
                Rancher
              </a>

              <hr className='mt-2 mb-2 border-blue-400 border-opacity-20' />

              <a rel='nofollow noreferrer' href='https://epinio.io/' target='_blank' className='flex py-2 gap-2 hover:ml-2 transition-all'>
                <Image width={16} height={16} src={EpinioLogo.src} alt='' />
                Epinio
              </a>
              <a rel='nofollow noreferrer' href='https://harvesterhci.io/' target='_blank' className='flex py-2 gap-2 hover:ml-2 transition-all'>
                <Image width={16} height={16} src={HarvesterLogo.src} alt='' />
                Harvester
              </a>
              <a rel='nofollow noreferrer' href='https://www.kubewarden.io/' target='_blank' className='flex py-2 gap-2 hover:ml-2 transition-all'>
                <Image width={20} height={20} src={KubewardenLogo.src} alt='' />
                Kubewarden
              </a>
              <a rel='nofollow noreferrer' href='https://opni.io/' target='_blank' className='flex py-2 gap-2 hover:ml-2 transition-all'>
                <Image width={16} height={16} src={OpniLogo.src} alt='' />
                Opni
              </a>

              <hr className='mt-2 mb-2 border-blue-400 border-opacity-20' />

              <a rel='nofollow noreferrer' href='https://opensource.suse.com/' target='_blank' className='flex gap-2 hover:ml-2 transition-all'>
                More projects...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
