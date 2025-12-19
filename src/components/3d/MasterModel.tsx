import { useRef, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Box, Cylinder, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MasterModel() {
    const { camera, scene } = useThree();
    const group = useRef<THREE.Group>(null);

    // References for animation
    const cityRef = useRef<THREE.Group>(null);
    const siteRef = useRef<THREE.Group>(null);
    const buildingRef = useRef<THREE.Group>(null);
    const structureRef = useRef<THREE.Group>(null);
    const mepRef = useRef<THREE.Group>(null);

    useLayoutEffect(() => {
        // Initial State
        if (structureRef.current) structureRef.current.visible = false;
        if (mepRef.current) mepRef.current.visible = false;

        // We use a context to ensure cleaner cleanup
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            // Scene 1: Arrival

            // Scene 2: Infrastructure
            tl.to(camera.position, { x: 25, y: 15, z: 25, duration: 1 }, 0);

            // Scene 3: Design Intelligence
            tl.to(camera.position, { x: -25, y: 30, z: 25, duration: 1 }, 1);

            // Scene 4: Architectural Detail
            tl.to(camera.position, { x: -8, y: 15, z: 12, duration: 1 }, 2);

            // Scene 5: Structural Core
            tl.call(() => {
                if (structureRef.current) structureRef.current.visible = true;
                if (buildingRef.current) buildingRef.current.visible = false;
            }, [], 3);
            tl.to(camera.position, { x: 0, y: 10, z: 20, duration: 1 }, 3);

            // Scene 6-8: MEP
            tl.call(() => {
                if (mepRef.current) mepRef.current.visible = true;
                if (structureRef.current) structureRef.current.visible = true;
            }, [], 4);
            tl.to(camera.position, { x: 12, y: 20, z: 12, duration: 3 }, 4);

            // Scene 9: Coordination
            tl.call(() => {
                if (buildingRef.current) buildingRef.current.visible = true;
                // Transparency Effect
                if (buildingRef.current) {
                    buildingRef.current.children.forEach((floorGroup: any) => {
                        floorGroup.children.forEach((mesh: any) => {
                            if (mesh.material) {
                                mesh.material.transparent = true;
                                mesh.material.opacity = 0.2;
                                mesh.material.needsUpdate = true;
                            }
                        })
                    });
                }
            }, [], 7);

            // Scene 10: Night/Living
            tl.to(camera.position, { x: 40, y: 30, z: 40, duration: 1 }, 8);

            // Scene 11: VR
            tl.to(camera.position, { x: 0, y: 10, z: 10, duration: 1 }, 9);

        }, scene);

        return () => ctx.revert();
    }, [camera, scene]);

    // Procedural Building Parameters
    const numFloors = 12;
    const floorHeight = 3.5;
    const baseSize = 12;

    return (
        <group ref={group}>
            {/* Atmosphere / Particles */}
            <Sparkles count={200} scale={[50, 50, 50]} size={6} speed={0.4} opacity={0.5} color="#44aaff" />

            {/* Scene 1: City Context */}
            <group ref={cityRef}>
                <gridHelper args={[100, 50, 0x444444, 0x111111]} position={[0, -0.1, 0]} />
                <Box args={[15, 30, 15]} position={[-30, 15, -30]}>
                    <meshStandardMaterial color="#111" transparent opacity={0.6} />
                    <edgesGeometry />
                    <lineBasicMaterial color="#222" />
                </Box>
                <Box args={[20, 20, 15]} position={[35, 10, -20]}>
                    <meshStandardMaterial color="#111" transparent opacity={0.6} />
                    <edgesGeometry />
                    <lineBasicMaterial color="#222" />
                </Box>
            </group>

            {/* Scene 2: Site/Infrastructure */}
            <group ref={siteRef}>
                <Box args={[120, 1, 120]} position={[0, -1, 0]}>
                    <meshStandardMaterial color="#020202" roughness={0.1} metalness={0.5} />
                </Box>
                {/* Neon Roads (Emissive for Bloom) */}
                <Box args={[120, 0.2, 6]} position={[0, -0.4, 40]}>
                    <meshStandardMaterial color="#050505" />
                </Box>
                <Box args={[120, 0.25, 0.5]} position={[0, -0.4, 40]}>
                    <meshStandardMaterial emissive="#ff0044" emissiveIntensity={4} color="#ff0044" toneMapped={false} />
                </Box>
                <Box args={[120, 0.25, 0.5]} position={[0, -0.4, 38]}>
                    <meshStandardMaterial emissive="#00ccff" emissiveIntensity={4} color="#00ccff" toneMapped={false} />
                </Box>
            </group>

            {/* Main Building: Twist Tower Design */}
            <group ref={buildingRef}>
                {Array.from({ length: numFloors }).map((_, i) => {
                    const rotation = i * 0.15;
                    const scale = 1 - (i * 0.02);
                    // Oscillating color gradient
                    const floorColor = i % 2 === 0 ? "#0066ff" : "#00ffcc";

                    return (
                        <group key={i} position={[0, i * floorHeight, 0]} rotation={[0, rotation, 0]} scale={[scale, 1, scale]}>

                            {/* Glass Core with Transmission-like look */}
                            <Box args={[baseSize, floorHeight - 0.2, baseSize]}>
                                <meshPhysicalMaterial
                                    roughness={0}
                                    transmission={0.4}
                                    thickness={1.5}
                                    color="#88ccff"
                                    envMapIntensity={3}
                                    metalness={0.9}
                                />
                            </Box>

                            {/* Colorful Fins / Facade */}
                            <Box args={[baseSize + 1, floorHeight, 1]} position={[0, 0, baseSize / 2]}>
                                <meshStandardMaterial color={floorColor} metalness={0.9} roughness={0.1} />
                            </Box>
                            <Box args={[baseSize + 1, floorHeight, 1]} position={[0, 0, -baseSize / 2]}>
                                <meshStandardMaterial color={floorColor} metalness={0.9} roughness={0.1} />
                            </Box>
                            <Box args={[1, floorHeight, baseSize + 1]} position={[baseSize / 2, 0, 0]}>
                                <meshStandardMaterial color={floorColor} metalness={0.9} roughness={0.1} />
                            </Box>
                            <Box args={[1, floorHeight, baseSize + 1]} position={[-baseSize / 2, 0, 0]}>
                                <meshStandardMaterial color={floorColor} metalness={0.9} roughness={0.1} />
                            </Box>

                            {/* Edge Lights (Emissive Strip) */}
                            <Box args={[baseSize + 1.1, 0.1, baseSize + 1.1]} position={[0, floorHeight / 2, 0]}>
                                <meshStandardMaterial emissive={floorColor} emissiveIntensity={2} color={floorColor} toneMapped={false} />
                            </Box>
                        </group>
                    )
                })}
            </group>

            {/* Structure */}
            <group ref={structureRef} visible={false}>
                {Array.from({ length: numFloors }).map((_, i) => {
                    const rotation = i * 0.15;
                    const scale = 1 - (i * 0.02);
                    return (
                        <group key={i} position={[0, i * floorHeight, 0]} rotation={[0, rotation, 0]} scale={[scale, 1, scale]}>
                            <Cylinder args={[2, 2, floorHeight]}>
                                <meshStandardMaterial color="#888" roughness={0.5} metalness={0.8} />
                            </Cylinder>
                            {[
                                [baseSize / 2 - 1, baseSize / 2 - 1],
                                [-baseSize / 2 + 1, baseSize / 2 - 1],
                                [baseSize / 2 - 1, -baseSize / 2 + 1],
                                [-baseSize / 2 + 1, -baseSize / 2 + 1]
                            ].map((pos, k) => (
                                <Cylinder key={k} args={[0.4, 0.4, floorHeight]} position={[pos[0], 0, pos[1]]}>
                                    <meshStandardMaterial color="#ff3300" emissive="#ff3300" emissiveIntensity={0.5} />
                                </Cylinder>
                            ))}
                        </group>
                    )
                })}
            </group>

            {/* MEP Systems */}
            <group ref={mepRef} visible={false}>
                {Array.from({ length: numFloors }).map((_, i) => {
                    const rotation = i * 0.15;
                    return (
                        <group key={i} position={[0, i * floorHeight + 1, 0]} rotation={[0, rotation, 0]}>
                            <mesh rotation={[Math.PI / 2, 0, 0]}>
                                <torusGeometry args={[3, 0.2, 8, 20]} />
                                <meshStandardMaterial color="cyan" emissive="cyan" emissiveIntensity={2} toneMapped={false} />
                            </mesh>
                            <Box args={[baseSize - 2, 0.3, 0.3]} position={[0, 0.5, 0]}>
                                <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={1} />
                            </Box>
                        </group>
                    )
                })}
            </group>

        </group>
    );
}