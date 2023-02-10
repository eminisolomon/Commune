import React, {  
  useState,
  useEffect,
} from 'react'
import { Images } from '../assets'
import { Button } from '../components'
import { 
  useWindowSize,
  useMeasure,
} from '../hooks'
import { TABLET_SIZE } from '../constants'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { width, setWidth } = useWindowSize()
  const { rect, myRef }: any = useMeasure()
  const links = [
    { name: 'Features' },
    { name: 'Affiliates' },
    { name: 'Pricing' },
    { name: 'Communities' },
  ]

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])
  
  return(
    <div 
      className="px-5 md:px-16 lg:px-24 bg-main py-4 sticky -top-1 w-full z-50"
      ref={myRef}
    >
      <div className="flex justify-between relative">
        <img
          src={Images.Logo}
          alt="logo"
        />
        {width > TABLET_SIZE ? (
          <div className="flex items-center">
            <ul className="flex mr-5">
              {links.map((link, index) => (
                <li 
                  key={index}
                  className="mx-2 border-b border-transparent hover:border-black duration-500 cursor-pointer"
                >{link.name}</li>
              ))}
            </ul>
            <Button>Join Waitlist</Button>
          </div>
        ) : (
          <>
            {isOpen ? (
              <div className=" border bg-white absolute -right-2 -top-1 p-4">
                <img 
                  src={Images.Close}
                  alt="close button"
                  className="absolute right-4 top-4 scale-150 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
                <div className="flex flex-col items-center justify-center w-full">
                  <ul className="flex flex-col pb-2 border-b mb-4 w-52">
                    {links.map((link, index) => (
                      <li 
                        key={index}
                        className="my-2 w-full mx-auto cursor-pointer text-2xl flex justify-center items-center hover:underline hover:decoration-dashed"
                      >{link.name}</li>
                    ))}
                  </ul>
                  <Button>Join Waitlist</Button>
                </div>
              </div>
            ) : (
              <img 
                src={Images.HamburgerMenu}
                alt="menu hamburger"
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}