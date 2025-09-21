"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function Trophy({
  position,
  scale,
  color,
}: {
  position: [number, number, number]
  scale: number
  color: string
}) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3
    }
  })

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {/* Trophy cup */}
      <mesh>
        <cylinderGeometry args={[0.6, 0.4, 0.8, 16]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Trophy base */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 16]} />
        <meshStandardMaterial color="#2d2d2d" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Trophy handles */}
      <mesh position={[-0.7, 0.2, 0]}>
        <torusGeometry args={[0.2, 0.05, 8, 16]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.7, 0.2, 0]}>
        <torusGeometry args={[0.2, 0.05, 8, 16]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

function Medal({
  position,
  rotation,
  scale,
  color,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  color: string
}) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.3
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.4) * 0.2
    }
  })

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* Medal */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Ribbon */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.2, 1, 0.05]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
    </group>
  )
}

function FloatingAwards() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      <Trophy position={[-4, 1, -3]} scale={0.6} color="#ffd700" />
      <Trophy position={[4, -1, -4]} scale={0.8} color="#c0c0c0" />
      <Medal position={[-2, 3, -2]} rotation={[0.2, 0, 0]} scale={0.7} color="#cd7f32" />
      <Medal position={[3, 2, -5]} rotation={[-0.3, 0.5, 0]} scale={0.5} color="#ffd700" />
      <Medal position={[0, -2, -3]} rotation={[0, -0.4, 0.2]} scale={0.6} color="#c0c0c0" />
    </group>
  )
}

export function PricingAnimation() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[8, 8, 8]} intensity={1} color="#ffd700" />
        <pointLight position={[-8, -8, -8]} intensity={0.6} color="#3b82f6" />

        <Environment preset="studio" />

        <FloatingAwards />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  )
}
