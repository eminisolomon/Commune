import React from 'react'
import {  
  Navbar,
  Main,
  Footer,
} from '../components'
import { useScrollToTop } from '../hooks'
 
export const Home = () => {
  useScrollToTop()

  return(
    <div className="w-full max-w-screen-2xl 2xl:mx-auto bg-main rounded-lg">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}