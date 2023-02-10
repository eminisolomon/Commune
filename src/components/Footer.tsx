import React from 'react'
import { CONTENT } from '../content'

export const Footer = () => {
  const { who_used_p, who_used } = CONTENT
  
  return(
    <div className="px-5 md:px-16 lg:px-24 py-8">
      <p className="mb-3 font-semibold text-xl">{who_used_p}</p>
      <div className="flex flex-wrap">
        {who_used.map((company, index: number) => (
          <img 
            key={index}
            src={company}
            alt="company logo"
            className="p-2 w-16"
          />
        ))}
      </div>
    </div>
  )
}