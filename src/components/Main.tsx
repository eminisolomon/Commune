import React, { useEffect } from 'react'
import { Images } from '../assets'
import { CONTENT } from '../content'
import { Button } from '../components'
import {  
  useForm,
  useWindowSize,
  useMeasure,
} from '../hooks'
import { TABLET_SIZE } from '../constants'

export const Main = () => {
  const { values, handleChange } = useForm({ email: '' })
  const { width, setWidth } = useWindowSize()
  const { rect, myRef }: any = useMeasure()
  const { early_access, h1, p } = CONTENT

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div 
      className="px-5 md:px-16 lg:px-24 flex lg:justify-between mt-8 lg:mt-20"
      ref={myRef}
    >
      <div className="lg:w-[40rem] flex flex-col items-center lg:items-start pr-10">
        <p className="bg-violet text-white font-semibold py-1 px-5 rounded-full text-center">{early_access}</p>
        <h1 className="text-5xl mt-4 font-extrabold text-center lg:text-left">{h1}</h1>
        <p className="mt-2 text-center lg:text-left">{p}</p>
        <form className="mobile:flex my-4 w-full mobile:items-center mobile:justify-center">
          <input 
            type="email"
            name="email"
            placeholder='Enter your email address'
            className="w-full mobile:w-64 h-12 mb-2 mobile:mb-0 border indent-3 mr-3 focus:outline-none"
            value={values.email}
            onChange={handleChange}
          />
          <Button>Join Waitlist</Button>
        </form>
      </div>
      {width > TABLET_SIZE && (
        <img 
          src={Images.Illustration}
          alt="illustration"
          className="h-[25rem]"
        />
      )}
    </div>
  )
}