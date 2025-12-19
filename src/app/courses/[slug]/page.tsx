import { courses } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Users, BookOpen, ChevronLeft, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) return { title: 'Course Not Found' };

    return {
        title: `${course.title} | QORE Learning`,
        description: course.description,
    };
}

export default function CourseDetail({ params }: { params: { slug: string } }) {
    const course = courses.find((c) => c.slug === params.slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20">

            {/* Breadcrumb / Back */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <Link href="/courses" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                    <ChevronLeft size={16} /> Back to Courses
                </Link>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

                <div className="lg:col-span-2">
                    <span className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-4 block">
                        {course.level} • {course.discipline}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        {course.description}
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-400 border-y border-white/10 py-6 mb-8">
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-blue-500" />
                            <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={18} className="text-purple-500" />
                            <span>Online / Hybrid</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen size={18} className="text-green-500" />
                            <span>Certificate Included</span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">Tools You Will Learn</h2>
                    <div className="flex flex-wrap gap-3 mb-12">
                        {course.tools.map(tool => (
                            <span key={tool} className="bg-zinc-800 px-4 py-2 rounded-full border border-white/10">
                                {tool}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold mb-6">What You'll Master</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-300">
                                    Detailed module outcome {i} placeholder text for {course.title}.
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-1">
                    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 sticky top-32">
                        <p className="text-gray-400 mb-2">Total Course Fee</p>
                        <div className="text-4xl font-bold mb-6">{course.price}</div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mb-4 transition-all">
                            Enroll Now
                        </button>
                        <button className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-4 rounded-xl border border-white/10 transition-all">
                            Download Syllabus
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-6">
                            30-day money-back guarantee. Lifetime access to course materials.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
