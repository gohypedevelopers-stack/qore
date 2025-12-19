'use client';

import { Linkedin, ArrowUpRight, Grid, Disc } from 'lucide-react';
import Link from 'next/link';

const faculty = [
    {
        id: "01",
        name: "SARAH JENKINS",
        role: "BIM MANAGER",
        company: "ZAHA HADID ARCHITECTS",
        bio: "Specialist in parametric workflows and complex geometry rationalization.",
        tags: ["GRASSHOPPER", "PYTHON", "RHINO"]
    },
    {
        id: "02",
        name: "DAVID CHEN",
        role: "VDC DIRECTOR",
        company: "ESCHER LABS",
        bio: "Leading digital twin integration for mega-scale infrastructure projects.",
        tags: ["DIGITAL TWINS", "IOT", "AZURE"]
    },
    {
        id: "03",
        name: "ELENA RODRIGUEZ",
        role: "STRUCTURAL LEAD",
        company: "ARUP",
        bio: "Bridging the gap between FEM analysis and BIM documentation.",
        tags: ["REVIT API", "DYNAMO", "C#"]
    },
    {
        id: "04",
        name: "MICHAEL ROSS",
        role: "LEAD DEVELOPER",
        company: "ESCHER LABS",
        bio: "Full-stack developer focused on AECO process automation.",
        tags: ["REACT", "THREE.JS", "FORGE"]
    },
];

export default function FacultyPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 font-sans selection:bg-blue-500/30">

            {/* --- TECHNICAL GRID BACKGROUND --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 border-x border-[#333] min-h-screen">

                {/* --- HEADER --- */}
                <div className="border-b border-[#333] pb-12 mb-12">
                    <div className="flex items-center gap-2 mb-4 text-blue-500 font-mono text-sm tracking-widest">
                        <Disc className="animate-spin-slow w-4 h-4" />
                        <span>// FACULTY_DIRECTORY_V2.0</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white">Architects</span><br />
                        of Intelligence.
                    </h1>
                    <p className="max-w-xl text-gray-500 font-mono text-sm md:text-base border-l border-blue-500 pl-4 mt-8">
                        &gt; WE DO NOT HIRE ACADEMICS.<br />
                        &gt; WE PARTNER WITH PRACTITIONERS.<br />
                        &gt; LEARNING DIRECTLY FROM THE SOURCE.
                    </p>
                </div>

                {/* --- FACULTY LIST (ARCHITECTURAL STYLE) --- */}
                <div className="flex flex-col">
                    {faculty.map((member) => (
                        <div key={member.id} className="group relative border-b border-[#333] py-12 hover:bg-white/5 transition-colors duration-300">

                            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-20">
                                {/* ID */}
                                <div className="font-mono text-gray-600 text-xl md:text-2xl group-hover:text-blue-500 transition-colors">
                                    {member.id}
                                </div>

                                {/* INFO */}
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                                            {member.name}
                                        </h2>
                                        <span className="font-mono text-sm text-gray-400 border border-[#333] px-3 py-1 rounded-full uppercase">
                                            {member.role} @ {member.company}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 text-lg max-w-2xl mb-6 font-light">
                                        {member.bio}
                                    </p>

                                    {/* TAGS */}
                                    <div className="flex flex-wrap gap-2">
                                        {member.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-blue-400 bg-blue-900/10 px-2 py-1 border border-blue-900/30">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* LINK ICON */}
                                <div className="md:self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                        <ArrowUpRight size={32} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- FOOTER CTA --- */}
                <div className="py-24 border-t border-[#333] mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold uppercase mb-4">Join the Network</h3>
                        <p className="text-gray-500 max-w-sm">
                            Are you building the future? We are always looking for exceptional talent to join our roster.
                        </p>
                    </div>
                    <div className="flex items-center justify-end">
                        <Link href="/contact" className="group flex items-center gap-4 text-xl font-bold uppercase hover:text-blue-500 transition-colors">
                            Apply as Instructor
                            <span className="w-12 h-1 bg-white group-hover:bg-blue-500 transition-colors" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
