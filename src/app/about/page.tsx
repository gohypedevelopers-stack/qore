import { siteConfig } from '@/lib/data';
import { Building2, Users, Lightbulb, Globe } from 'lucide-react';

export const metadata = {
    title: "About Us | QORE Learning",
    description: "QORE Learning is a dedicated online academy focused on empowering professionals in the AECO sector through world-class BIM education.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-6 sm:px-12 lg:px-24 border-b border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
                        Elevating BIM Education for the <span className="text-blue-500">Digital Built Environment</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        QORE Learning was born out of a need for professionals who understand not just design, but data, collaboration, and lifecycle thinking.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-6 sm:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                QORE Learning is a specialized online academy created to help architects, engineers, constructors, and facility managers master Building Information Modeling (BIM) workflows.
                            </p>
                            <p>
                                Our roots lie in a partnership with <span className="font-semibold text-white">Escher Labs</span>, a technology studio that builds and deploys software and solutions in the AECO sector.
                            </p>
                            <p>
                                By leveraging Escher Labs’ expertise in digital workflows, reality capture, VDC, and consulting, we bring a uniquely applied, industry-connected learning experience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="p-4">
                                <Building2 className="w-10 h-10 text-blue-500 mb-2" />
                                <h3 className="font-bold text-lg">Industry Aligned</h3>
                                <p className="text-sm text-gray-400">Curriculum inspired by real-world projects and Escher Labs' workflows.</p>
                            </div>
                            <div className="p-4">
                                <Users className="w-10 h-10 text-purple-500 mb-2" />
                                <h3 className="font-bold text-lg">Mentorship</h3>
                                <p className="text-sm text-gray-400">Peer learning and direct access to industry experts.</p>
                            </div>
                            <div className="p-4">
                                <Lightbulb className="w-10 h-10 text-yellow-500 mb-2" />
                                <h3 className="font-bold text-lg">Innovation</h3>
                                <p className="text-sm text-gray-400">Stay ahead with the latest in Digital Twins, VDC, and AI.</p>
                            </div>
                            <div className="p-4">
                                <Globe className="w-10 h-10 text-green-500 mb-2" />
                                <h3 className="font-bold text-lg">Global Reach</h3>
                                <p className="text-sm text-gray-400">International standards adapted for local contexts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
                        <p className="text-xl">To transform how AECO professionals learn and adopt BIM — by offering cutting-edge, accessible, and meaningful training that accelerates both competence and confidence.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h3>
                        <p className="text-xl">A built environment designed, constructed, and operated by a workforce fluent in digital modeling, collaboration, and data-driven decision making.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
