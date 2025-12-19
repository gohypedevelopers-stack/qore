import { useRef, useLayoutEffect, useMemo } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to generate the Sail shape (Extruded Geometry)
 */
const SailGeometry = () => {
    return useMemo(() => {
        const shape = new THREE.Shape();
        const width = 18;
        const height = 45;

        // Starting at bottom-left (center of curve)
        shape.moveTo(0, 0);
        // Straight line up the "mast" side
        shape.lineTo(0, height);
        // Top point
        shape.lineTo(1, height);

        // The Big Curve (The Sail)
        // Control point moves out to create the belly of the sail
        shape.quadraticCurveTo(width + 5, height / 2, width, 0);

        shape.lineTo(0, 0);

        const settings = {
            steps: 4,
            depth: 8, // Thickness of the building
            bevelEnabled: true,
            bevelThickness: 0.5,
            bevelSize: 0.5,
            bevelSegments: 4
        };
        return new THREE.ExtrudeGeometry(shape, settings);
    }, []);
};

export default function MasterModel() {
    const { camera, scene } = useThree();
    const group = useRef<THREE.Group>(null);

    // Animation Refs
    const sailRef = useRef<THREE.Mesh>(null);
    const exoskeletonRef = useRef<THREE.Group>(null);
    const helipadRef = useRef<THREE.Group>(null);
    const islandRef = useRef<THREE.Mesh>(null);

    // Create the geometry once
    const sailGeo = SailGeometry();

    // Force camera to look at building center (height ~25)
    useFrame((state) => {
        state.camera.lookAt(0, 25, 0);
    });

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            // Initial Camera Position set in Experience.tsx -> Moving to first scene immediately

            // Scene 1: Wide Reveal from Water (Further back)
            tl.to(camera.position, { x: 80, y: 10, z: 80, duration: 2 }, 0);

            // Scene 2: Full Profile View (Side)
            tl.to(camera.position, { x: 80, y: 30, z: -10, duration: 2 }, 2);

            // Scene 3: Top Spine View
            tl.to(camera.position, { x: -20, y: 70, z: 0, duration: 2 }, 4);

            // Scene 4: Front Face View (High)
            tl.to(camera.position, { x: 50, y: 40, z: 50, duration: 3 }, 6);

            // Scene 5: Distant Hero Shot
            tl.to(camera.position, { x: 100, y: 30, z: 60, duration: 2 }, 9);

        }, scene);
        return () => ctx.revert();
    }, [camera, scene]);

    return (
        <group ref={group}>

            {/* Atmosphere */}
            <Sparkles count={300} scale={[60, 60, 60]} size={4} speed={0.4} opacity={0.5} color="#44aaff" />

            {/* --- The Island Base --- */}
            <mesh ref={islandRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <cylinderGeometry args={[25, 30, 4, 64]} />
                <meshStandardMaterial color="#333" roughness={0.8} />
            </mesh>

            {/* --- Ocean Water --- */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[1000, 1000, 32, 32]} />
                <MeshDistortMaterial
                    color="#006699"
                    speed={2}
                    distort={0.4}
                    roughness={0}
                    metalness={0.8}
                />
            </mesh>

            {/* Main Building Assembly Centered */}
            <group position={[0, 0, 0]}>

                {/* --- The Sail (Glass Body) --- */}
                {/* Center the extrusion depth by offsetting z */}
                <mesh ref={sailRef} geometry={sailGeo} position={[0, 0, -4]}>
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.2}  // Glassy but visible white
                        opacity={1}
                        metalness={0.6}
                        roughness={0.1}
                        ior={1.5}
                        thickness={2}
                        clearcoat={1}
                        emissive="#0044aa"
                        emissiveIntensity={0.1}
                    />
                </mesh>

                {/* --- The Mast (Spine) --- */}
                <mesh position={[-2, 25, 0]}>
                    <boxGeometry args={[4, 55, 4]} />
                    <meshStandardMaterial color="#eee" roughness={0.2} metalness={0.5} />
                </mesh>
                <mesh position={[-2, 54, 0]}>
                    <cylinderGeometry args={[0.5, 1, 10]} />
                    <meshStandardMaterial color="#eee" />
                </mesh>

                {/* --- The Exoskeleton (White Truss) --- */}
                <group ref={exoskeletonRef} position={[9, 0, 0]}>
                    {/* Curved Truss Legs - simplified as angled beams */}
                    <mesh position={[2, 20, 5]} rotation={[0, 0, -0.3]}>
                        <capsuleGeometry args={[1, 45, 4]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <mesh position={[2, 20, -5]} rotation={[0, 0, -0.3]}>
                        <capsuleGeometry args={[1, 45, 4]} />
                        <meshStandardMaterial color="white" />
                    </mesh>

                    {/* Cross Bracing */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <group key={i} position={[3, 10 + (i * 6), 0]}>
                            <mesh rotation={[Math.PI / 4, 0, 0]} position={[0, 0, 0]}>
                                <boxGeometry args={[1, 1, 12]} />
                                <meshStandardMaterial color="white" />
                            </mesh>
                            <mesh rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, 0]}>
                                <boxGeometry args={[1, 1, 12]} />
                                <meshStandardMaterial color="white" />
                            </mesh>
                        </group>
                    ))}
                </group>

                {/* --- The Helipad --- */}
                <group ref={helipadRef} position={[6, 38, 5.5]}>
                    <mesh rotation={[0, 0, 0.2]}>
                        {/* Support Arm */}
                        <boxGeometry args={[8, 1, 2]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <mesh position={[4, 1, 0]}>
                        <cylinderGeometry args={[3.5, 2, 0.5, 32]} />
                        <meshStandardMaterial color="#eee" />
                    </mesh>
                    {/* Landing Pad Surface */}
                    <mesh position={[4, 1.3, 0]}>
                        <cylinderGeometry args={[3.2, 3.2, 0.1, 32]} />
                        <meshStandardMaterial color="#222" />
                    </mesh>
                    {/* Ring Light */}
                    <mesh position={[4, 1.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[3, 0.1, 16, 32]} />
                        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                </group>

                {/* --- Horizontal Fins / Blue Glass Lines --- */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <mesh key={i} position={[5, 5 + (i * 2.5), -4.1]}>
                        <boxGeometry args={[12 - (i * 0.4), 0.5, 8.2]} />
                        <meshStandardMaterial color="#001133" metalness={0.9} roughness={0.1} />
                    </mesh>
                ))}

            </group>

            <ContactShadows position={[0, -0.4, 0]} opacity={0.6} scale={100} blur={2.5} far={20} />
        </group>
    );
}