import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DroneModel = () => {
  const droneRef = useRef<THREE.Group>(null);
  const sprayParticlesRef = useRef<THREE.Group>(null);
  
  // Create spray particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 4,
          -1.5 - Math.random() * 2,
          (Math.random() - 0.5) * 4
        ],
        scale: Math.random() * 0.05 + 0.02,
        speed: Math.random() * 0.01 + 0.005
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate drone movement
    if (droneRef.current) {
      droneRef.current.position.y = Math.sin(time * 0.8) * 0.2 + 1.5;
      droneRef.current.rotation.y = time * 0.3;
      droneRef.current.rotation.z = Math.sin(time * 1.5) * 0.05;
    }

    // Animate spray particles
    if (sprayParticlesRef.current) {
      sprayParticlesRef.current.children.forEach((particle, i) => {
        if (particle.position) {
          particle.position.y -= particles[i].speed;
          if (particle.position.y < -3) {
            particle.position.y = -1;
            particle.position.x = (Math.random() - 0.5) * 3;
            particle.position.z = (Math.random() - 0.5) * 3;
          }
        }
      });
    }
  });

  return (
    <>
      {/* Drone */}
      <group ref={droneRef} position={[0, 1.5, 0]}>
        {/* Main body */}
        <mesh>
          <boxGeometry args={[0.8, 0.2, 0.8]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        
        {/* Propellers */}
        <mesh position={[-0.5, 0.15, -0.5]}>
          <cylinderGeometry args={[0.25, 0.25, 0.03]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>
        <mesh position={[0.5, 0.15, -0.5]}>
          <cylinderGeometry args={[0.25, 0.25, 0.03]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>
        <mesh position={[-0.5, 0.15, 0.5]}>
          <cylinderGeometry args={[0.25, 0.25, 0.03]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>
        <mesh position={[0.5, 0.15, 0.5]}>
          <cylinderGeometry args={[0.25, 0.25, 0.03]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.35, 0, -0.35]} rotation={[0, Math.PI/4, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.6]} />
          <meshStandardMaterial color="#1e3a8a" />
        </mesh>
        <mesh position={[0.35, 0, -0.35]} rotation={[0, -Math.PI/4, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.6]} />
          <meshStandardMaterial color="#1e3a8a" />
        </mesh>
        <mesh position={[-0.35, 0, 0.35]} rotation={[0, -Math.PI/4, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.6]} />
          <meshStandardMaterial color="#1e3a8a" />
        </mesh>
        <mesh position={[0.35, 0, 0.35]} rotation={[0, Math.PI/4, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.6]} />
          <meshStandardMaterial color="#1e3a8a" />
        </mesh>

        {/* Spray nozzle */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.15]} />
          <meshStandardMaterial color="#059669" />
        </mesh>
      </group>

      {/* Spray particles */}
      <group ref={sprayParticlesRef}>
        {particles.map((particle, i) => (
          <mesh
            key={i}
            position={particle.position as [number, number, number]}
          >
            <sphereGeometry args={[particle.scale]} />
            <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
          </mesh>
        ))}
      </group>

      {/* Field ground */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[12, 0.1, 12]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>

      {/* Field rows */}
      {Array.from({ length: 8 }, (_, i) => (
        <mesh key={i} position={[0, -1.9, -5 + i * 1.4]}>
          <boxGeometry args={[12, 0.1, 0.2]} />
          <meshStandardMaterial color="#16a34a" />
        </mesh>
      ))}

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} />
      <directionalLight position={[-3, 6, -3]} intensity={0.4} />
    </>
  );
};

const Drone3D = () => {
  return (
    <div className="w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-sky-200 to-green-200">
      <Canvas camera={{ position: [6, 4, 6], fov: 60 }}>
        <DroneModel />
      </Canvas>
    </div>
  );
};

export default Drone3D;