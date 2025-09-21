"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function MiniDumbbell({
  position,
  color,
  speed,
}: {
  position: [number, number, number]
  color: string
  speed: number
}) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 2) * 0.2
    }
  })

  return (
    <group ref={meshRef} position={position} scale={0.3}>
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.6, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15, 8]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.6, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15, 8]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

function FloatingMiniEquipment() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <MiniDumbbell position={[-2, 1, -1]} color="#3b82f6" speed={0.3} />
      <MiniDumbbell position={[2, -0.5, -2]} color="#8b5cf6" speed={0.4} />
      <MiniDumbbell position={[0, 1.5, -1.5]} color="#06b6d4" speed={0.5} />
    </group>
  )
}

export function FeaturesAnimation() {
  return (
    <div className="w-full h-32">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />

        <Environment preset="studio" />

        <FloatingMiniEquipment />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}
