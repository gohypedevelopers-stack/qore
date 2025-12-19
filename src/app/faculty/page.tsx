import { Users } from 'lucide-react';

export const metadata = {
    title: "Faculty | QORE Learning",
    description: "Learn from BIM practitioners with global AECO project experience.",
};

export default function FacultyPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-20">
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Meet Our Faculty</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        QORE Learning trainers bring real-world Revit, VDC, and digital construction expertise from industry-leading projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Placeholder Faculty Cards - In real app, map from data */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-zinc-900 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
                            <div className="h-48 bg-zinc-800 flex items-center justify-center">
                                <Users className="w-16 h-16 text-gray-600" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold">Expert Trainer {i}</h3>
                                <p className="text-blue-400 text-sm mb-4">Senior BIM Manager</p>
                                <p className="text-gray-400 text-sm">
                                    10+ years of experience in large-scale infrastructure projects. Specialist in Revit API and Dynamo automation.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 bg-blue-900/20 rounded-2xl border border-blue-500/30 text-center">
                    <h3 className="text-2xl font-bold mb-4">Backed by Escher Labs</h3>
                    <p className="text-gray-300">
                        Our curriculum is designed in collaboration with <span className="font-semibold text-white">Escher Labs</span>, ensuring you learn not just software, but applied technology used in real-world consulting.
                    </p>
                </div>
            </section>
        </div>
    );
}
