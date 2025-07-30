import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, Box } from '@react-three/drei';
import * as THREE from 'three';

const DroneModel = () => {
  const droneRef = useRef<THREE.Group>(null);
  const sprayParticlesRef = useRef<THREE.Group>(null);
  
  // Create spray particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 8,
          -2 - Math.random() * 3,
          (Math.random() - 0.5) * 8
        ],
        scale: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 0.02 + 0.01
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate drone movement
    if (droneRef.current) {
      droneRef.current.position.y = Math.sin(time * 0.5) * 0.3 + 2;
      droneRef.current.rotation.y = time * 0.2;
      droneRef.current.rotation.z = Math.sin(time * 2) * 0.1;
    }

    // Animate spray particles
    if (sprayParticlesRef.current) {
      sprayParticlesRef.current.children.forEach((particle, i) => {
        particle.position.y -= particles[i].speed;
        if (particle.position.y < -5) {
          particle.position.y = -1;
          particle.position.x = (Math.random() - 0.5) * 4;
          particle.position.z = (Math.random() - 0.5) * 4;
        }
      });
    }
  });

  return (
    <>
      {/* Drone */}
      <group ref={droneRef} position={[0, 2, 0]}>
        {/* Main body */}
        <Box args={[1, 0.3, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2563eb" />
        </Box>
        
        {/* Propellers */}
        <Cylinder args={[0.3, 0.3, 0.05]} position={[-0.6, 0.2, -0.6]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#1e40af" />
        </Cylinder>
        <Cylinder args={[0.3, 0.3, 0.05]} position={[0.6, 0.2, -0.6]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#1e40af" />
        </Cylinder>
        <Cylinder args={[0.3, 0.3, 0.05]} position={[-0.6, 0.2, 0.6]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#1e40af" />
        </Cylinder>
        <Cylinder args={[0.3, 0.3, 0.05]} position={[0.6, 0.2, 0.6]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#1e40af" />
        </Cylinder>

        {/* Arms */}
        <Cylinder args={[0.05, 0.05, 0.8]} position={[-0.4, 0, -0.4]} rotation={[0, Math.PI/4, 0]}>
          <meshStandardMaterial color="#1e3a8a" />
        </Cylinder>
        <Cylinder args={[0.05, 0.05, 0.8]} position={[0.4, 0, -0.4]} rotation={[0, -Math.PI/4, 0]}>
          <meshStandardMaterial color="#1e3a8a" />
        </Cylinder>
        <Cylinder args={[0.05, 0.05, 0.8]} position={[-0.4, 0, 0.4]} rotation={[0, -Math.PI/4, 0]}>
          <meshStandardMaterial color="#1e3a8a" />
        </Cylinder>
        <Cylinder args={[0.05, 0.05, 0.8]} position={[0.4, 0, 0.4]} rotation={[0, Math.PI/4, 0]}>
          <meshStandardMaterial color="#1e3a8a" />
        </Cylinder>

        {/* Spray nozzles */}
        <Cylinder args={[0.03, 0.03, 0.2]} position={[0, -0.25, 0]}>
          <meshStandardMaterial color="#059669" />
        </Cylinder>
      </group>

      {/* Spray particles */}
      <group ref={sprayParticlesRef}>
        {particles.map((particle, i) => (
          <Sphere
            key={i}
            args={[particle.scale]}
            position={particle.position as [number, number, number]}
          >
            <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
          </Sphere>
        ))}
      </group>

      {/* Field ground */}
      <Box args={[20, 0.1, 20]} position={[0, -4, 0]}>
        <meshStandardMaterial color="#22c55e" />
      </Box>

      {/* Field rows */}
      {Array.from({ length: 10 }, (_, i) => (
        <Box key={i} args={[20, 0.2, 0.3]} position={[0, -3.8, -8 + i * 1.8]}>
          <meshStandardMaterial color="#16a34a" />
        </Box>
      ))}

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <directionalLight position={[-5, 10, -5]} intensity={0.5} />
    </>
  );
};

const Drone3D = () => {
  return (
    <div className="w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100 to-green-100">
      <Canvas camera={{ position: [8, 6, 8], fov: 60 }}>
        <DroneModel />
      </Canvas>
    </div>
  );
};

export default Drone3D;