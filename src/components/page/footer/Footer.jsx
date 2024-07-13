import React, { useContext } from 'react'
import Contexto from 'components/contexts/Contexto'
import { NavLink } from 'react-router-dom'
import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react'
import SocialLinks from './SocialLinks'

function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const { data } = useContext(Contexto)

  return (
    <div className='absolute bottom-0 w-full px-4'>
      <footer className="rounded-lg shadow mb-1">
        <div className="p-4 md:flex md:items-center rounded-lg md:justify-between bg-white">
          <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">© {currentYear} <NavLink to={data.config.rutas.root} className='hover:underline'>{data.config.title}</NavLink></span>
          <span className='flex flex-wrap'>
            <SocialLinks to='https://x.com/home' Icon={IconBrandX} />
            <SocialLinks to='https://www.facebook.com/' Icon={IconBrandFacebook} />
            <SocialLinks to='https://www.instagram.com/' Icon={IconBrandInstagram} />
          </span>
          {
            (data.enlaces.length > 0) &&
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 sm:mt-0">
              {
                data.enlaces.map((enlace, index) => (
                  (enlace.where.find(where => where === data.linkstypes.footer)) &&
                  <li key={`${index}-${enlace.text}`}>
                    <NavLink className="hover:underline me-4 md:me-6" to={enlace.to}>{enlace.text}</NavLink>
                  </li>
                ))
              }
            </ul>
          }
        </div>
      </footer>
    </div>
  )
}

export default Footer
