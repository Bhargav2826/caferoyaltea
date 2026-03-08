import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, OrbitControls, Stars, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

const TeaCup = () => {
    const meshRef = useRef();

    // Refined points for a traditional Kerala tea glass (narrow bottom, wider top)
    const points = useMemo(() => {
        const pts = [];
        pts.push(new THREE.Vector2(0, -2)); // bottom center
        pts.push(new THREE.Vector2(1.2, -2));
        pts.push(new THREE.Vector2(1.5, 0));
        pts.push(new THREE.Vector2(1.8, 2));
        pts.push(new THREE.Vector2(1.85, 2.1));
        return pts;
    }, []);

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group scale={[0.8, 0.8, 0.8]} position={[0, -1, 0]}>
                <mesh ref={meshRef} castShadow receiveShadow>
                    <latheGeometry args={[points, 64]} />
                    <meshStandardMaterial
                        color="#704214"
                        roughness={0.8}
                        metalness={0.1}
                    />
                </mesh>
                {/* Tea Liquid */}
                <mesh position={[0, 1.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <circleGeometry args={[1.7, 32]} />
                    <meshStandardMaterial color="#5C3A21" roughness={0.5} />
                </mesh>
            </group>
        </Float>
    );
};

const Steam = () => {
    const particles = useRef();
    const count = 12;

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (!particles.current) return;
        particles.current.children.forEach((p, i) => {
            p.position.y += 0.015;
            p.position.x = Math.sin(time * 0.5 + i) * 0.15;
            p.position.z = Math.cos(time * 0.5 + i) * 0.15;

            const life = (p.position.y - 1) / 4;
            p.scale.setScalar(0.2 + life * 0.5);
            p.material.opacity = Math.max(0, 0.2 * (1 - life));

            if (p.position.y > 5) {
                p.position.y = 1;
                p.scale.setScalar(0.2);
            }
        });
    });

    return (
        <group ref={particles}>
            {Array.from({ length: count }).map((_, i) => (
                <mesh key={i} position={[0, 1 + (i * 0.4), 0]}>
                    <sphereGeometry args={[1, 12, 12]} />
                    <meshStandardMaterial color="#ffffff" transparent opacity={0.1} depthWrite={false} />
                </mesh>
            ))}
        </group>
    );
};

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-auto">
            <Canvas shadows gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 1, 10]} fov={45} />
                <Environment preset="sunset" />
                <ambientLight intensity={0.6} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={3}
                    castShadow
                    color="#ffffff"
                />
                <pointLight position={[-10, 5, -5]} intensity={2} color="#4C0519" />
                <pointLight position={[0, 5, 10]} intensity={1} color="#D97706" />

                <TeaCup />
                <Steam />

                <Sparkles count={40} scale={15} size={1.5} speed={0.3} color="#D97706" />
                <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.8}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
};

export default HeroScene;
