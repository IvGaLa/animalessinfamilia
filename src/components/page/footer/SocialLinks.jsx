import React from 'react'

function SocialLinks({ to, Icon }) {

  const iconSize = 20

  return (
    <a href={to} target='_blank' rel='noreferrer' className='hover:text-green-400 hover:animate-bounce'><Icon size={iconSize} /></a>
  )
}

export default SocialLinks
