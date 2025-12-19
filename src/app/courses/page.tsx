'use client';

import { useState } from 'react';
import { courses } from '@/lib/data'; // Ensure this exists
import { cn } from '@/lib/utils';
import { Filter } from 'lucide-react';

export default function CoursesPage() {
    const [filterLevel, setFilterLevel] = useState('All');
    const [filterDiscipline, setFilterDiscipline] = useState('All');

    // Derive unique options
    const levels = ['All', ...new Set(courses.map(c => c.level))];
    const disciplines = ['All', ...new Set(courses.map(c => c.discipline))];

    const filteredCourses = courses.filter(course => {
        const levelMatch = filterLevel === 'All' || course.level === filterLevel;
        const disciplineMatch = filterDiscipline === 'All' || course.discipline === filterDiscipline;
        return levelMatch && disciplineMatch;
    });

    return (
        <div className="min-h-screen bg-black text-white pt-20 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto py-12">
                <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
                <p className="text-gray-400 mb-12 max-w-2xl">
                    From beginners to advanced professionals, find the perfect BIM training program to accelerate your career.
                </p>

                {/* Mobile-friendly Filter Bar */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 bg-zinc-900/50 p-6 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Filter className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold">Filters:</span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <select
                            value={filterLevel}
                            onChange={(e) => setFilterLevel(e.target.value)}
                            className="bg-black border border-white/20 rounded px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            {levels.map(l => <option key={l} value={l}>{l} Level</option>)}
                        </select>

                        <select
                            value={filterDiscipline}
                            onChange={(e) => setFilterDiscipline(e.target.value)}
                            className="bg-black border border-white/20 rounded px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            {disciplines.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>

                    <div className="ml-auto text-sm text-gray-400 self-center">
                        Showing {filteredCourses.length} courses
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <div key={course.slug} className="group bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                            {/* Color bar based on level */}
                            <div className={cn("h-2 w-full",
                                course.level === 'Beginner' ? 'bg-green-500' :
                                    course.level === 'Intermediate' ? 'bg-blue-500' :
                                        'bg-purple-500'
                            )} />

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-1 rounded">
                                        {course.level}
                                    </span>
                                    <span className="text-xs text-gray-400">{course.duration}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                    {course.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    {course.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {course.tools.slice(0, 3).map(tool => (
                                            <span key={tool} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                        <span className="font-bold text-lg">{course.price}</span>
                                        <button className="text-sm font-semibold text-blue-400 hover:text-white transition-colors">
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
