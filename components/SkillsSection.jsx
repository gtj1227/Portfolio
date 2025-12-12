import {useState} from "react";
import {cn} from "/lib/utils";
const skills = [
    {name: "HTML/CSS", level: 95, category: "Frontend"},
    {name: "JavaScript", level: 90, category: "Frontend"},
    {name: "React", level: 85, category: "Frontend"},

    {name: "Node.js", level: 80, category: "Backend"},
    {name: "Express", level: 75, category: "Backend"},

    {name: "MariaDB", level: 45, category: "Database"},
    {name: "SQL", level: 80, category: "Database"},

    {name: "Tableau", level: 70, category: "Tools"},
    {name: "Git/Github", level: 90, category: "Tools"},
    {name: "Docker", level: 50, category: "Tools"},
    {name: "Figma", level: 80, category: "Tools"},
    {name: "JIRA", level: 85, category: "Tools"},
    {name: "VSCode", level: 90, category: "Tools"}

];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );
    return (
        <section 
        id="skills"
        className="py-24 px-4 relative bg-secondary/30"
         >    
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                    key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
                >
                        {category}
                        </button>
                ))}
            </div>
                

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
                <div 
                key={key} 
                className="bg-card p-6 shadow-xs card-hover justify-center items-center flex flex-col"
                >
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                    

              
                </div>
            ))}
        </div>
        </div>
         </section>
    ) 
};