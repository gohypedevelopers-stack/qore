'use client';

import { Mail, MapPin, Phone, Send, Globe, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-blue-600/30">

            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* --- LEFT COLUMN: INFO --- */}
                <div className="flex flex-col justify-center">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                            <MessageSquare className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-gray-300">24/7 Global Support</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                                Something Great.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                            Whether you're looking for enterprise training for your team or have questions about our certifications, our BIM specialists are ready to help.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { icon: Mail, label: "Email Us", value: "hello@qore-learning.com", desc: "For general inquiries and partnerships" },
                            { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", desc: "Mon-Fri from 9am to 6pm EST" },
                            { icon: MapPin, label: "Visit HQ", value: "1200 Tech Plaza, San Francisco", desc: "Our innovation lab and training center" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-lg">
                                    <item.icon className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                                    <p className="text-blue-400 font-mono text-sm mb-1">{item.value}</p>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT COLUMN: FORM --- */}
                <div className="relative">
                    {/* Decorative floating elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20" />

                    <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative">
                        <h2 className="text-2xl font-bold mb-8">Send us a message</h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">First Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Last Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="jane@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-300">
                                    <option>Course Inquiry</option>
                                    <option>Enterprise Training</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Tell us how we can help..." />
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            {/* --- MAP SECTION (Visual Placeholder) --- */}
            <div className="mt-32 border-t border-white/10 pt-20">
                <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
                    <p className="text-gray-400">Serving the AECO community in over 40 countries.</p>
                </div>

                <div className="w-full h-[400px] bg-[#050505] relative overflow-hidden flex items-center justify-center border-y border-white/5">
                    {/* Decorative Map Grid */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div className="relative text-center">
                        <Globe className="w-32 h-32 text-blue-900/30 mx-auto mb-4 animate-pulse" />
                        <p className="text-gray-500 font-mono text-sm tracking-widest">INTERACTIVE MAP LOADING...</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
