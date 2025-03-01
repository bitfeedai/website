"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/Button"
import { ChevronUp } from "lucide-react"


export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && 
        <div 
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 cursor-pointer"
        >
          <Button
            variant={"outline"}
            className="duration-200"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </div>
      }
    </>
  )
}