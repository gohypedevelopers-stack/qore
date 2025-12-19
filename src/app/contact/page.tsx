import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export const metadata = {
    title: "Contact Us | QORE Learning",
    description: "Contact QORE Learning for support, course inquiries, and collaboration.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-20">
            <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-xl text-gray-400 mb-12">
                            Have questions about our BIM courses, certifications, or custom corporate training? We're here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-gray-400">{siteConfig.contactEmail}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-lg">Office</h3>
                                    <p className="text-gray-400">Escher Labs HQ<br />India | Global</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-lg">Support</h3>
                                    <p className="text-gray-400">Mon-Fri, 9am - 6pm IST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full bg-black border border-white/20 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full bg-black border border-white/20 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full bg-black border border-white/20 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
