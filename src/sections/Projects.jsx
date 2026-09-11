import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "EnSys",
    description:
      "An enrollment system designed to help schools manage student registration, enrollment records, and academic information efficiently.",
    image: "/projects/ensys.png",
    tags: ["PHP", "Bootstrap", "JavaScript", "jQuery"],
    link: "#",
    github: "#",
  },
  {
    title: "Scanalyze",
    description:
      "An exam-checking app that scans and analyzes test papers, helping teachers quickly check answers and manage results.",
    image: "/projects/Scanalyze.png",
    tags: ["Android Studio", "Firebase", "Java"],
    link: "#",
    github: "#",
  },
  {
    title: "Combi Shop",
    description:
      "A cooking game where players prepare customer orders, combine ingredients, and serve them on time..",
    image: "/projects/CombiShop.png",
    tags: ["CatJS", "JavaScript", "HTML", "CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Combi Stack Blocks",
    description:
      "A simple block-stacking game inspired by Tetris, using three-block pieces.",
    image: "/projects/CombiStacks.png",
    tags: ["CatJS", "JavaScript", "HTML", "CSS"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
    return <section id= "projects" className="py-25 relative overflow-hidden">
                {/* Bg glows */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relatize z-10">
                    {/* Section header */}
                    <div className="text-center mx-auto max-w-3xl mb-16">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            Featured Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                            Turning Ideas Into  
                            <span className="font-serif italic font-normal text-white">
                            {" "}
                                Solutions.
                            </span>
                        </h2>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                           A collection of projects from my development journey
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div 
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video">
                                     <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      />
                                     <div
                                        className="absolute inset-0 
                                        bg-gradient-to-t from-card via-card/50
                                        to-transparent opacity-60"
                                    />
                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.link}
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight
                                            className="w-5 h-5 
                                            text-muted-foreground group-hover:text-primary
                                            group-hover:translate-x-1 
                                            group-hover:-translate-y-1 transition-all"
                                        />
                                    </div>
                                    <p className="text-nuted-foreground text-sm"> 
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIdx) => (
                                        <span
                                        key={tagIdx} 
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                        <a href= "#experience"
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group" >
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                        </a>
                    </div>

                    {/* View All CTA 
                        <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                        </div>     */}  
                </div>
            </section>;
};