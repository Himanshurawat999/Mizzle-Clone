import React from 'react'

function Button({text}) {
  return (
    <button className='px-4 py-2 font-[500] bg-[var(--primary-dark)] tracking-[0.5px] rounded-sm text-[var(--white-custom)]'>{text}</button>
  )
}

export default Button