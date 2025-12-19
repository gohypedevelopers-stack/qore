import { siteConfig } from '@/lib/data';
import { Building2, Users, Lightbulb, Globe, ArrowRight, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "About Us | QORE Learning",
    description: "Redefining BIM Education for the Digital Built Environment.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black z-0 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold tracking-wider text-sm uppercase">
                            The QORE Story
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            Digital Future.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        We are bridging the gap between theoretical knowledge and the complex, data-driven reality of modern construction.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="#story" className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                            Read Our Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>


            {/* --- STATS SECTION --- */}
            <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Global Learners", value: "5000+" },
                        { label: "Partner Firms", value: "40+" },
                        { label: "Courses", value: "25+" },
                        { label: "Industry Experts", value: "15+" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>


            {/* --- STORY & ESCHER LABS --- */}
            <section id="story" className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Born from <span className="text-blue-500">Industry</span>,<br />
                            Built for <span className="text-purple-500">Impact</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                            <p>
                                QORE Learning wasn't just founded—it was forged in the fire of real-world projects. We saw a disconnect: universities were teaching design, but the industry needed <strong>data, collaboration, and lifecycle management</strong>.
                            </p>
                            <p>
                                Our roots lie in a strategic partnership with <span className="text-white font-semibold">Escher Labs</span>, a premier technology studio solving complex AECO challenges.
                            </p>
                            <p>
                                By leveraging Escher Labs’ deep expertise in Digital Twins, Reality Capture, and VDC, we bring you a curriculum that isn't just "up to date"—it's ahead of the curve.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Fancy Card Design */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                        <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />

                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Zap className="text-yellow-400 fill-yellow-400" />
                                The Escher Advantage
                            </h3>

                            <ul className="space-y-6">
                                {[
                                    { title: "Real Project Data", desc: "Learn with datasets from actual constructed buildings, not generic examples." },
                                    { title: "Workflow First", desc: "We teach you how tools connect (Revit ↔ Navisworks ↔ Cloud), not just buttons." },
                                    { title: "Future Ready", desc: "Exposure to AI, coding, and automation in construction." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- VISION & VALUES CARDS --- */}
            <section className="py-24 px-6 relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide every course we build.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Target, title: "Precision", color: "text-red-400", desc: "Accuracy is everything in BIM. We teach zero-tolerance workflows." },
                            { icon: Users, title: "Collaboration", color: "text-blue-400", desc: "Siloed work is dead. Learn to work in a Common Data Environment." },
                            { icon: Lightbulb, title: "Innovation", color: "text-yellow-400", desc: "We don't follow standards; we help you set new ones." },
                            { icon: Globe, title: "Sustainability", color: "text-green-400", desc: "Building better for the planet through optimized design." },
                        ].map((card, i) => (
                            <div key={i} className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-zinc-800/50 transition-all hover:-translate-y-2 group">
                                <card.icon className={`w-12 h-12 ${card.color} mb-6 group-hover:scale-110 transition-transform`} />
                                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-800 to-black border border-white/10 p-12 md:p-20 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to upskill?</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join thousands of professionals mastering the future of construction today.
                    </p>
                    <Link href="/courses" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                        Explore Courses <ArrowRight />
                    </Link>
                </div>
            </section>

        </div>
    );
}
