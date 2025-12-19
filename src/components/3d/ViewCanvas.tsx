'use client';

import dynamic from 'next/dynamic';

const Experience = dynamic(() => import('@/components/3d/Experience'), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-white text-xl animate-pulse">Loading 3D...</div>
        </div>
    )
});

export default function ViewCanvas() {
    return (
        <div className="w-full h-full">
            <Experience />
        </div>
    );
}
