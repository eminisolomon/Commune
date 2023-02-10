import React, { useEffect } from 'react'

export const useScrollToTop = () => {
  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    scrollToTop()
  }, [])
}