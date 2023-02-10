import React, {
  useState,
  useEffect,
} from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<any>({
    width: 0,
    setWidth(rect: number){
      setWindowSize({...windowSize, width: rect})
    }
  })

  useEffect(() => {
    const getWindowSize = () => setWindowSize({...windowSize, width: window.innerWidth})
    window.addEventListener('resize', getWindowSize)

    return () => window.removeEventListener('resize', getWindowSize)
  }, [])

  return windowSize
}