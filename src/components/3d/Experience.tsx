'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';
import MasterModel from './MasterModel';

export default function Experience() {
    return (
        <Canvas
            shadows
            camera={{ position: [30, 20, 30], fov: 35 }}
            gl={{ antialias: true }}
            dpr={[1, 1.5]}
            className="w-full h-full"
        >
            <Suspense fallback={null}>
                {/* Cinematic Lighting */}
                <ambientLight intensity={0.2} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={2}
                    color="#ffffff"
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <spotLight
                    position={[-10, 20, -10]}
                    angle={0.5}
                    penumbra={1}
                    intensity={5}
                    color="#0088ff"
                    castShadow
                />

                <Environment preset="city" background={false} blur={0.8} />

                <MasterModel />
            </Suspense>
        </Canvas>
    );
}
