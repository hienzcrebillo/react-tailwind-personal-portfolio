import { Brain, BrainCircuit, Code2, HandshakeIcon, Lightbulb, Rocket, School2Icon, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technical Skills",
    description:
      "• Development and Maintenance \n" +
      "• Debugging and Troubleshooting \n" +
      "• SQL and Database Management \n" +
      "• Performance Optimization \n" ,
      
  },
  {
    icon: HandshakeIcon,
    title: "Personal Skills",
    description:
      "• Adaptable and eager to learn. \n" +
      "• Highly motivated to improve.\n" +
      "• Team player and collaborative.\n" +
      "• Practical problem-solver. \n" ,
  }
];

const education = [
    {
    icon: School2Icon,
    title: "Education",
    description: "• Bachelor of Technical - Vocational in ICT Major in Computer Programming \n" +
    "Technological University of the Philippines - Taguig City | 2018 - 2022 \n" +
    "• IT in Mobile App and Web Development \n" +
    "STI Global City | 2016 - 2018"
  },
]

export const About = () => {
    return <section id= "about" className="py-25 relative overflow-hidden">
        <div className="container mx-auto px-6 relatize z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center"> {/*Left column*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                <h2 className="text-4xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Just a developer who enjoys the,
                    <span className="font-serif italic font-normal text-white"> process of getting better.
                    </span>
                </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm an Application Developer with 3+ years of experience developing and maintaining enterprise applications 
                            using C#, .NET, SQL Server, and JavaScript. <br/>
                            I enjoy developing solutions that improve efficiency, simplify processes, and create better user experiences.
                        </p>
                        <p>
                            I’m also learning modern frontend development with React, Tailwind CSS, and Vite, 
                            while exploring new technologies like cloud, DevOps, and automation. 
                        </p>

                        <p>
                             I’m always looking for new things to learn and ways to improve as a developer.
                        </p>
                    </div>
                </div>

                {/**Right column 
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                        key={idx} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>

                 <div className="grid sm:grid-cols-1 gap-6">
                    {education.map((item, idx) => (
                        <div 
                        key={idx} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}

                </div>*/}

                {/* Right column */}
                <div>
                    {/* Two-column highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted-foreground whitespace-pre-line leading-6">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Education below */}
                    <div className="mt-6">
                        {education.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 3) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted-foreground whitespace-pre-line leading-6">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    </section>;
};