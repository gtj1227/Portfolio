import {ArrowRight} from "lucide-react";
const projects = [
    {
        id: 1,
        title: "BTheCause Project",
        description: "A platform for users to grow into the best versions of themselves.",
        imageUrl: "/projects/BTC.png",
        projectUrl: "https://bthecause.org",
        GitUrl: "e.org",
        tags: ["React",  "TailwindCSS", "Laravel", "PHP", "MariaDB"]
    },
    {
        id: 2,
        title: "Data Analysis Portfolio",
        description: "Showcase interactive dashboards to draw insights from complex datasets and support informed decision-making.",
        imageUrl: "/projects/DA.png",
        projectUrl: "https://public.tableau.com/app/profile/george.jereos.iii/vizzes",
        GitUrl: "e.org",
        tags: ["SQL", "Tableau", "Python"]
    },
    {
        id: 3,
        title: "Project Management Experience: Producer's Assistant (NTJ Entertainment)",
        description: "Assisted in coordinating and managing various aspects of event production, ensuring smooth operations and successful execution.",
        imageUrl: "/projects/TJ.png",
        projectUrl: "https://www.instagram.com/thentjproduction/",
        tags: ["Project Management", "Stakeholder Coordination", "Time Management", "Communication", ]
    }
]

export const ProjectsSection = () => { 
    return ( 
    <section id='projects' className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5cl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                My <span className="text-primary">Projects</span>
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Some projects that I've worked on recently. Curated with attention to detail,
                performance, and user experience
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <a
                        key={key}
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block transition-transform duration-200 hover:scale-105"
                        style={{ textDecoration: "none" }}
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transofrm duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground" >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold m-1">{project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/gtj1227"
                >
                    Check out my GitHub <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
    );
};