const experiences = [
  {
    period: "Apr 2023 - May 2026",
    role: "Junior Applications Developer",
    company: "iRely Philippines",
   description:
  "• Developed and maintained enterprise applications using C#, .NET, JavaScript, and SQL Server.\n" +
  "• Implemented application features and enhancements aligned with business requirements.\n" +
  "• Improved application performance by optimizing SQL queries and system processes.\n" +
  "• Conducted debugging, testing, and production issue resolution.\n" +
  "• Collaborated with cross-functional teams to deliver client-driven enhancements.",
    technologies: ["C#", ".NET", "Ext JS", "JavaScript", "SQL Server", "MS SQL" ],
    current: true,
  },
  {
    period: "Feb 2023 - March 2023",
    role: "Freelance Game Developer",
    company: "Panoptik",
    description:
       "• Developed and maintained game features, mechanics, and systems based on project requirements and player experience goals.\n" +
       "• Debugged gameplay issues, optimized performance, and implemented improvements to deliver stable and engaging game experiences.",
    technologies: ["CatJS" , "JavaScript", "HTML"],
    current: false,
  },
  {
    period: "Jan 2018 - Mar 2018",
    role: "Technical Support Intern",
    company: "DOST - MIMAROPA Regional Office",
    description:
      "• Provided technical assistance to users by troubleshooting hardware, software, and basic system issues.\n" +
      "• Assisted with system setup, maintenance, issue documentation, and day-to-day IT support to help maintain reliable operations.",
    technologies: [" "],
    current: false,
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-25 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Built through {" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              experience.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my growth as a developer, from learning the fundamentals to developing enterprise applications and solving real-world problems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-left"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 whitespace-pre-line leading-6">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-start" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
