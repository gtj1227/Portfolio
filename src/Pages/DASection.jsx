import { ThemeToggle } from "/components/ThemeToggle";
import { StarBackground } from "/components/StarBackground";

export const DASection = () => {

const projects = [
    {
        title: "SQL Work",
        description: "Developed and optimized complex SQL queries to extract, manipulate, and analyze large datasets from relational databases",
        imageUrl: "/projects/test.png",
        projectUrl: "https://github.com/gtj1227/Warehouse-Analytics/tree/main",
        tags: ["SQL"] // Add tags property to fix error
    }
]
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <section id='data-analytics' className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5cl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                My <span className="text-primary">Data Analytics</span> Skills
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A showcase of my data analytics skills, highlighting my ability to analyze,
                interpret, and visualize data effectively.
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
            </div>
    </section>
    </div>
    );
}