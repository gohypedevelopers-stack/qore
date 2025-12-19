'use client';

import { useState } from 'react';
import { courses } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Filter, Search, BookOpen, Clock, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
    const [filterLevel, setFilterLevel] = useState('All');
    const [filterDiscipline, setFilterDiscipline] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const levels = ['All', ...new Set(courses.map(c => c.level))];
    const disciplines = ['All', ...new Set(courses.map(c => c.discipline))];

    const filteredCourses = courses.filter(course => {
        const levelMatch = filterLevel === 'All' || course.level === filterLevel;
        const disciplineMatch = filterDiscipline === 'All' || course.discipline === filterDiscipline;
        const searchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        return levelMatch && disciplineMatch && searchMatch;
    });

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-purple-500/30">

            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* --- HERO HEADER --- */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">Industry Recognized Certification</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Master the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Tools of Tomorrow.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Browse our curated catalog of BIM, VDC, and Digital Twin courses designed for modern AECO professionals.
                    </p>
                </div>

                {/* --- CONTROLS BAR --- */}
                <div className="sticky top-24 z-20 mb-12">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center">

                        {/* Search */}
                        <div className="relative flex-grow w-full md:w-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl min-w-fit">
                                <Filter className="w-4 h-4 text-blue-400" />
                                <span className="text-sm font-semibold text-gray-300">Filters:</span>
                            </div>

                            <select
                                value={filterLevel}
                                onChange={(e) => setFilterLevel(e.target.value)}
                                className="bg-black border border-white/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none hover:bg-white/5 cursor-pointer transition-colors"
                            >
                                {levels.map(l => <option key={l} value={l}>{l} Level</option>)}
                            </select>

                            <select
                                value={filterDiscipline}
                                onChange={(e) => setFilterDiscipline(e.target.value)}
                                className="bg-black border border-white/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none hover:bg-white/5 cursor-pointer transition-colors"
                            >
                                {disciplines.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* --- COURSE GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <Link href={`/courses/${course.slug}`} key={course.slug} className="group relative">
                                {/* Glow Effect on Hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-50 blur transition duration-500" />

                                <div className="relative h-full bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col p-1 hover:bg-zinc-800/50 transition-colors duration-300">

                                    {/* Card Header (Level Stripe) */}
                                    <div className={cn("h-1.5 w-full rounded-t-xl mb-6",
                                        course.level === 'Beginner' ? 'bg-gradient-to-r from-green-400 to-emerald-600' :
                                            course.level === 'Intermediate' ? 'bg-gradient-to-r from-blue-400 to-indigo-600' :
                                                'bg-gradient-to-r from-purple-400 to-pink-600'
                                    )} />

                                    <div className="px-6 pb-6 flex-grow flex flex-col">
                                        {/* Tags */}
                                        <div className="flex justify-between items-start mb-4">
                                            <span className={cn("text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border",
                                                course.level === 'Beginner' ? 'text-green-400 border-green-400/20 bg-green-400/10' :
                                                    course.level === 'Intermediate' ? 'text-blue-400 border-blue-400/20 bg-blue-400/10' :
                                                        'text-purple-400 border-purple-400/20 bg-purple-400/10'
                                            )}>
                                                {course.level}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                                                <Clock size={12} /> {course.duration}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                                            {course.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                                            {course.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="mt-auto border-t border-white/5 pt-6 space-y-4">
                                            <div className="flex flex-wrap gap-2">
                                                {course.tools.slice(0, 3).map(tool => (
                                                    <span key={tool} className="text-xs font-mono bg-black border border-white/10 px-2 py-1 rounded text-gray-300">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-xl font-bold text-white">{course.price}</span>
                                                <span className="p-2 bg-white text-black rounded-full group-hover:scale-110 transition-transform">
                                                    <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-gray-500">
                            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-xl">No courses found matching your criteria.</p>
                            <button
                                onClick={() => { setFilterLevel('All'); setFilterDiscipline('All'); setSearchQuery(''); }}
                                className="mt-4 text-blue-400 hover:text-blue-300 underline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
