import Link from 'next/link';

export default function Overlay() {
    const sections = [
        {
            title: "Context & Environment",
            description: "Start with the bigger picture.",
            text: "Every project starts with its context — BIM ensures your building aligns with its environment and infrastructure.",
            id: "scene-1",
            number: "01"
        },
        {
            title: "Infrastructure",
            description: "Foundations of connectivity.",
            text: "From road alignment to underground utilities, BIM transforms how we plan and coordinate infrastructure.",
            id: "scene-2",
            number: "02"
        },
        {
            title: "Design Intelligence",
            description: "Data-driven decisions.",
            text: "BIM helps compare design options, optimize energy performance, and visualize daylight impact.",
            id: "scene-3",
            number: "03"
        },
        {
            title: "Architectural Detail",
            description: "Precision in every joint.",
            text: "BIM empowers architects to detail every component precisely, reducing errors and material waste.",
            id: "scene-4",
            number: "04"
        },
        {
            title: "Structural Core",
            description: "The backbone of safety.",
            text: "BIM ensures structural integrity, visualizing rebar and load paths long before construction.",
            id: "scene-5",
            number: "05"
        },
        {
            title: "HVAC Systems",
            description: "Efficiency and comfort.",
            text: "BIM makes HVAC design more efficient, reducing energy use and ensuring comfort.",
            id: "scene-6",
            number: "06"
        },
        {
            title: "Electrical Systems",
            description: "Powering the future.",
            text: "With BIM, electrical design is coordinated, efficient, and safe.",
            id: "scene-7",
            number: "07"
        },
        {
            title: "Plumbing & Piping",
            description: "Flow optimization.",
            text: "BIM helps optimize plumbing routes, saving time, material, and reducing clashes.",
            id: "scene-8",
            number: "08"
        },
        {
            title: "Coordination",
            description: "Clash-free construction.",
            text: "The true power of BIM is coordination — detecting clashes digitally, not on-site.",
            id: "scene-9",
            number: "09"
        },
        {
            title: "The Living Building",
            description: "Lifecycle management.",
            text: "A living, breathing model — BIM lets you visualize the building in any condition, day or night.",
            id: "scene-10",
            number: "10"
        },
        {
            title: "VR Future",
            description: "Immersive experiences.",
            text: "The future of BIM is immersive — where designers, builders, and clients step into the building before it's built.",
            id: "scene-11",
            number: "11"
        },
    ];

    return (
        <div className="w-full">
            {sections.map((section, index) => (
                <section
                    key={index}
                    id={section.id}
                    className="min-h-screen w-full flex items-center justify-start p-6 sm:p-12 lg:p-24 pointer-events-none"
                >
                    <div className="
            pointer-events-auto 
            relative 
            max-w-xl 
            p-8 md:p-10
            rounded-3xl 
            bg-black/40 
            backdrop-blur-xl 
            border border-white/10 
            shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]
            group
            hover:bg-black/50
            transition-all duration-500
          ">
                        {/* Gradient Border Accent */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 group-hover:opacity-50 transition-opacity duration-500" />

                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2 block">{section.description}</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-blue-100 transition-colors">
                                    {section.title}
                                </h2>
                            </div>
                            <span className="text-5xl font-bold text-white/5 font-mono group-hover:text-white/10 transition-colors">
                                {section.number}
                            </span>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed font-light border-l-2 border-white/10 pl-6 group-hover:border-blue-500/50 transition-colors duration-300">
                            {section.text}
                        </p>
                    </div>
                </section>
            ))}

            <section className="h-screen w-full flex items-center justify-center pointer-events-none p-6">
                <div className="
            pointer-events-auto 
            text-center 
            bg-black/60 
            p-12 md:p-16 
            rounded-3xl 
            border border-white/20 
            backdrop-blur-2xl
            max-w-3xl
            shadow-2xl
        ">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-gray-400 tracking-tighter">
                        Future Ready.
                        <br />
                        <span className="text-blue-500">BIM Ready.</span>
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 text-gray-300 font-light max-w-2xl mx-auto">
                        From site modeling to VR, QORE equips you with the complete digital construction journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/courses"
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10">Explore Courses</span>
                            <div className="absolute inset-0 bg-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 hover:border-white"
                        >
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
