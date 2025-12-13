import {ArrowDown} from "lucide-react";

export const HeroSection = () => {
    return ( 
    <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 space-y-6 md:space-y-0">
        <div className="flex-1 space-y-6">
            <img
          src="/gj.png" // <-- update this path to your image
          alt="Fill in with pic"
          className="w-40 h-40 rounded-full object-cover shadow-lg opacity-0 animate-fade-in"
        />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> George</span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Jereos III </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Self-driven, life-long student and aspiring software developer.
            Specializing in front-end development, and open to career paths such as 
            data analyst. 
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </div>

        <div className="absolute bottom-8  transform translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
        </div>

</section>
    );
}