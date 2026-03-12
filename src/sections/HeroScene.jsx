import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, OrbitControls, Stars, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

const TeaCup = ({ isMobile }) => {
    const meshRef = useRef();
    const groupRef = useRef();
    const surfaceRef = useRef();

    // Procedural Ridge Texture for the Glass
    const ridgeTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        // Neutral normal map base
        ctx.fillStyle = '#8080ff';
        ctx.fillRect(0, 0, 512, 512);
        
        const ridgeCount = 12;
        for (let i = 0; i < ridgeCount; i++) {
            const x = (i / ridgeCount) * 512;
            const w = 512 / ridgeCount;
            const grad = ctx.createLinearGradient(x, 0, x + w, 0);
            grad.addColorStop(0, '#6060ff');
            grad.addColorStop(0.5, '#ffffff');
            grad.addColorStop(1, '#6060ff');
            ctx.fillStyle = grad;
            ctx.fillRect(x, 0, w, 512);
        }
        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        return tex;
    }, []);

    // Procedural Froth Texture for the Tea Surface
    const frothTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        
        // Base color (creamy tea)
        ctx.fillStyle = '#D28B47';
        ctx.fillRect(0, 0, 256, 256);
        
        // Add many small bubbles
        for (let i = 0; i < 400; i++) {
            const x = Math.random() * 256;
            const y = Math.random() * 256;
            const r = Math.random() * 3 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 240, 220, ${Math.random() * 0.4 + 0.2})`;
            ctx.fill();
            // Subtle border for bubbles
            ctx.strokeStyle = `rgba(139, 69, 19, ${Math.random() * 0.1})`;
            ctx.stroke();
        }
        
        // Add some larger foam patches
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * 256;
            const y = Math.random() * 256;
            const r = Math.random() * 15 + 10;
            const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }

        const tex = new THREE.CanvasTexture(canvas);
        return tex;
    }, []);

    // Traditional "Cutting Chai" glass profile
    const points = useMemo(() => {
        const pts = [];
        // Profile from bottom to top
        pts.push(new THREE.Vector2(0, -2.5));       // center bottom
        pts.push(new THREE.Vector2(0.8, -2.5));     // bottom edge
        pts.push(new THREE.Vector2(0.85, -2));      // slight curve at base
        pts.push(new THREE.Vector2(1.2, 0.5));      // mid body (widest part of ridges)
        pts.push(new THREE.Vector2(1.6, 2.8));      // top flared rim
        return pts;
    }, []);

    // Liquid body points (slightly inset)
    const liquidPoints = useMemo(() => {
        const pts = [];
        pts.push(new THREE.Vector2(0, -2.4));
        pts.push(new THREE.Vector2(0.75, -2.4));
        pts.push(new THREE.Vector2(1.15, 0.5));
        pts.push(new THREE.Vector2(1.45, 1.8));     // tea level
        return pts;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const moveX = Math.sin(time * 1.2) * 0.4;

        if (groupRef.current) {
            groupRef.current.position.x = moveX;
        }

        if (surfaceRef.current) {
            const speed = Math.cos(time * 1.2) * 1.2;
            surfaceRef.current.position.x = -speed * 0.05;
            surfaceRef.current.rotation.y = Math.sin(time * 2) * 0.05;
            // Subtle rotation to surface froth
            surfaceRef.current.rotation.z = time * 0.1;
        }
    });

    const segments = isMobile ? 32 : 64;

    return (
        <Float speed={1.5} rotationIntensity={0} floatIntensity={0.2}>
            <group ref={groupRef} scale={isMobile ? [0.65, 0.65, 0.65] : [0.6, 0.6, 0.6]} position={[0, -0.5, 0]}>
                
                {/* Cutting Chai Ridged Glass */}
                <mesh ref={meshRef} castShadow={!isMobile} receiveShadow={!isMobile}>
                    <latheGeometry args={[points, segments]} />
                    <meshPhysicalMaterial
                        color="#ffffff"
                        metalness={0.1}
                        roughness={0.05}
                        transparent
                        opacity={0.3}
                        transmission={0.95}
                        thickness={0.8}
                        envMapIntensity={1.5}
                        normalMap={ridgeTexture}
                        normalScale={new THREE.Vector2(0.3, 0.3)}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Tea Liquid Body */}
                <mesh position={[0, 0, 0]}>
                    <latheGeometry args={[liquidPoints, segments]} />
                    <meshStandardMaterial 
                        color="#B97A45" 
                        roughness={0.3} 
                        metalness={0}
                        emissive="#331100"
                        emissiveIntensity={0.1}
                    />
                </mesh>

                {/* Tea Surface (Froth/Bubbles effect) */}
                <mesh
                    ref={surfaceRef}
                    position={[0, 1.81, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <circleGeometry args={[1.45, segments]} />
                    <meshStandardMaterial 
                        map={frothTexture}
                        roughness={0.8} 
                        emissive="#221100" 
                        emissiveIntensity={0.05}
                    />
                </mesh>
            </group>
        </Float>
    );
};

const Burger = ({ position, isMobile }) => {
    const segments = isMobile ? 12 : 32;
    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
            <group position={position} scale={[0.3, 0.3, 0.3]}>
                <mesh position={[0, -0.4, 0]}>
                    <cylinderGeometry args={[1, 1, 0.4, segments]} />
                    <meshStandardMaterial color="#F5D2A8" emissive="#332211" emissiveIntensity={0.2} roughness={0.6} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1.05, 1.05, 0.3, segments]} />
                    <meshStandardMaterial color="#6B4226" roughness={0.8} />
                </mesh>
                <mesh position={[0, 0.15, 0]}>
                    <cylinderGeometry args={[1.1, 1.1, 0.05, segments]} />
                    <meshStandardMaterial color="#99C24D" emissive="#112200" emissiveIntensity={0.3} />
                </mesh>
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[1, segments, segments, 0, Math.PI * 2, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#F5D2A8" emissive="#332211" emissiveIntensity={0.2} roughness={0.6} />
                </mesh>
            </group>
        </Float>
    );
};

const PizzaSlice = ({ position, isMobile }) => {
    return (
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1}>
            <group position={position} scale={[0.4, 0.4, 0.4]} rotation={[0.5, 0, 0.5]}>
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.1, 3, 1]} />
                    <meshStandardMaterial color="#E6B87D" emissive="#331100" emissiveIntensity={0.2} />
                </mesh>
                <mesh position={[0, 0.06, 0]}>
                    <cylinderGeometry args={[0.9, 0.9, 0.05, 3, 1]} />
                    <meshStandardMaterial color="#FFC300" emissive="#222200" emissiveIntensity={0.3} />
                </mesh>
                {!isMobile && (
                    <>
                        <mesh position={[0.2, 0.1, 0.2]}>
                            <sphereGeometry args={[0.1, 8, 8]} />
                            <meshStandardMaterial color="#D1495B" emissive="#330000" emissiveIntensity={0.4} />
                        </mesh>
                        <mesh position={[-0.2, 0.1, -0.1]}>
                            <sphereGeometry args={[0.1, 8, 8]} />
                            <meshStandardMaterial color="#D1495B" emissive="#330000" emissiveIntensity={0.4} />
                        </mesh>
                    </>
                )}
            </group>
        </Float>
    );
};

const Milkshake = ({ position, isMobile }) => {
    const segments = isMobile ? 12 : 32;
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group position={position} scale={[0.25, 0.25, 0.25]}>
                <mesh>
                    <cylinderGeometry args={[0.8, 0.6, 2.5, segments]} />
                    <meshStandardMaterial color="#E0F7FA" transparent opacity={0.3} transmission={isMobile ? 0 : 0.6} metalness={0.2} roughness={0.1} />
                </mesh>
                <mesh position={[0, -0.2, 0]}>
                    <cylinderGeometry args={[0.75, 0.55, 2, segments]} />
                    <meshStandardMaterial color="#FF85A1" emissive="#330011" emissiveIntensity={0.2} />
                </mesh>
                <mesh position={[0, 1.2, 0]}>
                    <sphereGeometry args={[0.8, segments, segments / 2]} />
                    <meshStandardMaterial color="#ffffff" emissive="#222222" emissiveIntensity={0.1} />
                </mesh>
                <mesh position={[0.3, 1.5, 0]} rotation={[0, 0, -0.2]}>
                    <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
                    <meshStandardMaterial color="#F94144" emissive="#330000" emissiveIntensity={0.5} />
                </mesh>
            </group>
        </Float>
    );
};

const Steam = ({ isMobile }) => {
    const particles = useRef();
    const count = isMobile ? 6 : 12;

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (!particles.current) return;
        particles.current.children.forEach((p, i) => {
            p.position.y += isMobile ? 0.012 : 0.015;
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
                <mesh key={i} position={[0, 1 + (i * 0.5), 0]}>
                    <sphereGeometry args={[1, 8, 8]} />
                    <meshStandardMaterial color="#ffffff" transparent opacity={0.1} depthWrite={false} />
                </mesh>
            ))}
        </group>
    );
};

const HeroScene = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-auto">
            <Canvas 
                shadows={!isMobile} 
                dpr={[1, 2]} 
                gl={{ 
                    antialias: !isMobile,
                    powerPreference: "high-performance",
                    alpha: true
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 1, isMobile ? 12 : 10]} fov={isMobile ? 55 : 45} />
                <Environment preset="sunset" />
                <ambientLight intensity={0.6} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={3}
                    castShadow={!isMobile}
                    color="#ffffff"
                />
                
                <TeaCup isMobile={isMobile} />
                <Steam isMobile={isMobile} />

                {/* Left Side food icons */}
                <Burger isMobile={isMobile} position={[isMobile ? -2.2 : -6, isMobile ? 4.5 : 2, -2]} />
                {!isMobile && <PizzaSlice isMobile={isMobile} position={[-7, 0, -5]} />}
                <Milkshake isMobile={isMobile} position={[isMobile ? -2.2 : -5, isMobile ? -4 : -3, 2]} />

                {/* Right Side food icons */}
                <Burger isMobile={isMobile} position={[isMobile ? 2.2 : 5, isMobile ? 4 : 4, -3]} />
                {!isMobile && <PizzaSlice isMobile={isMobile} position={[6, -2, -1]} />}
                <Milkshake isMobile={isMobile} position={[isMobile ? 2.2 : 7, isMobile ? -4.5 : 1, 0]} />

                <Sparkles count={isMobile ? 15 : 40} scale={15} size={isMobile ? 1 : 1.5} speed={0.3} color="#D97706" />
                {!isMobile && <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />}

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={isMobile ? 0.4 : 0.8}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
};

export default HeroScene;
