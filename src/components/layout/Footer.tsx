import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10 z-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold tracking-tighter text-white">QORE<span className="text-blue-500">.</span></span>
                        <p className="mt-4 text-gray-400 max-w-sm">
                            Empowering AECO professionals with world-class BIM education.
                            Bridging the gap between theory and industry practice.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/courses" className="text-gray-400 hover:text-white transition-colors">All Courses</Link></li>
                            <li><Link href="/faculty" className="text-gray-400 hover:text-white transition-colors">Faculty</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>{siteConfig.contactEmail}</li>
                            <li>India | Global</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} QORE Learning. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
