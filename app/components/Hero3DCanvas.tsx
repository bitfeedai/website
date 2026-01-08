"use client"

import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "./Hero3DScene"

export default function Hero3DCanvas() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || typeof window === "undefined") {
    return null
  }

  return (
    <Suspense fallback={null}>
      <Canvas 
        camera={{ position: [30, 30, 30], fov: 60 }} 
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </Suspense>
  )
}

