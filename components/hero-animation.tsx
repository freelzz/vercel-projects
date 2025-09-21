"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef, Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function Dumbbell({
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
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* Dumbbell handle */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 2, 8]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Left weight */}
      <mesh position={[-1.2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 8]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Right weight */}
      <mesh position={[1.2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 8]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

function Kettlebell({
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
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.4) * 0.5
    }
  })

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {/* Kettlebell body */}
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Handle */}
      <mesh position={[0, 0.6, 0]}>
        <torusGeometry args={[0.5, 0.1, 8, 16]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

function BarbelPlate({
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
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02
      meshRef.current.rotation.z += 0.01
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.6) * 0.4
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <cylinderGeometry args={[1, 1, 0.2, 16]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      {/* Inner hole */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 0.25, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </mesh>
  )
}

function FloatingFitnessEquipment() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <Dumbbell position={[-6, 2, -4]} rotation={[0.3, 0.5, 0]} scale={0.8} color="#3b82f6" />
      <Dumbbell position={[5, -1, -6]} rotation={[-0.2, -0.3, 0.4]} scale={1.2} color="#8b5cf6" />
      <Kettlebell position={[-3, -3, -3]} scale={0.6} color="#06b6d4" />
      <Kettlebell position={[4, 3, -2]} scale={0.8} color="#10b981" />
      <BarbelPlate position={[0, 4, -8]} rotation={[0.5, 0, 0]} scale={0.7} color="#f59e0b" />
      <BarbelPlate position={[-5, -2, -5]} rotation={[0, 0.8, 0.3]} scale={0.9} color="#ef4444" />
      <BarbelPlate position={[6, 0, -7]} rotation={[0.2, -0.5, 0]} scale={0.5} color="#8b5cf6" />
    </group>
  )
}

export function HeroAnimation() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />
        <spotLight position={[0, 20, 0]} intensity={0.5} color="#8b5cf6" />

        <Suspense fallback={null}>
          <FloatingFitnessEquipment />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  )
}
