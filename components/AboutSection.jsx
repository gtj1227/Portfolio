import {Code, User, Briefcase} from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
    {" "}  
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3>Passionate Web Developer & Tech Creator</h3>

                <p className="text-muted-foreground">
                    Passionate about advancing my skills in web development 
                    and data analysis, I am a self-driven and 
                    life-long student.
                </p>

                <p className="text-muted-foreground">
                    I specialize in front-end development, crafting engaging and
                    user-friendly web experiences. I am also open to career paths
                    such as data analysis, where I can leverage my analytical skills
                    to derive insights from data.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a 
                    href="#contact" 
                    className="cosmic-button flex items-center justify-center">
                        {" "}
                        Get In Touch 
                    </a>

                    <a 
                    href="GeorgeJResume.pdf" 
                    className="px-6 py-6 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="text-semibold text-lg"> Web Development</h4>
                            <p className="text-muted-foreground text-sm">
                                Building responsive and dynamic websites using modern
                                technologies like React, Tailwind CSS, and more.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="text-semibold text-lg"> Project Management</h4>
                            <p className="text-muted-foreground text-sm">
                                Meeting milestones and deadlines through effective planning,
                                organization, and communication to ensure project success.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="text-semibold text-lg"> Data Analytics</h4>
                            <p className="text-muted-foreground text-sm">
                                Analyzing complex datasets to extract insights and
                                support data-driven decision-making processes.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </section>;
};