"use client"

import { useFrame } from "@react-three/fiber"
import { Grid } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

function AnimatedBox({ initialPosition }: { initialPosition: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(...initialPosition))
  const currentPosition = useRef(new THREE.Vector3(...initialPosition))
  
  // Create gradient shader material once using useMemo
  const gradientMaterial = useRef<THREE.ShaderMaterial>(
    new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0xf97316) }, // orange-500
        color2: { value: new THREE.Color(0x9333ea) }, // purple-600
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vPosition;
        void main() {
          // Create gradient based on position (mixing from top to bottom)
          float mixFactor = (vPosition.y + 0.5) / 1.0;
          mixFactor = clamp(mixFactor, 0.0, 1.0);
          vec3 color = mix(color1, color2, mixFactor);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      linewidth: 2,
    })
  ).current

  const getAdjacentIntersection = (current: THREE.Vector3) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]
    return new THREE.Vector3(
      current.x + randomDirection[0] * 3,
      0.5,
      current.z + randomDirection[1] * 3
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = getAdjacentIntersection(currentPosition.current)
      newPosition.x = Math.max(-15, Math.min(15, newPosition.x))
      newPosition.z = Math.max(-15, Math.min(15, newPosition.z))
      setTargetPosition(newPosition)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      currentPosition.current.lerp(targetPosition, 0.1)
      meshRef.current.position.copy(currentPosition.current)
    }
  })

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <primitive object={gradientMaterial} attach="material" />
      </lineSegments>
    </mesh>
  )
}

function Scene() {
  const initialPositions: [number, number, number][] = [
    [-9, 0.5, -9],
    [-3, 0.5, -3],
    [0, 0.5, 0],
    [3, 0.5, 3],
    [9, 0.5, 9],
    [-6, 0.5, 6],
    [6, 0.5, -6],
    [-12, 0.5, 0],
    [12, 0.5, 0],
    [0, 0.5, 12],
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group position={[0, -20, 0]} scale={1.5}>
        <Grid
          renderOrder={-1}
          position={[0, 0, 0]}
          infiniteGrid
          cellSize={1}
          cellThickness={0.5}
          sectionSize={3}
          sectionThickness={1}
          sectionColor="#4a4a4a"
          cellColor="#333333"
          fadeDistance={50}
        />
        {initialPositions.map((position, index) => (
          <AnimatedBox key={index} initialPosition={position} />
        ))}
      </group>
    </>
  )
}

export default Scene

