import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import {cn} from "/lib/utils";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { Send } from "lucide-react";

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        
        setIsSubmitted(true);

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you soon.",
            });
            alert("Message sent successfully!");
            setIsSubmitted(false);

        }, 1500);
    }
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just connecting with like-minded individuals.
                Feel free to reach out to me through any of the platforms below.
            </p>

            <div>
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    
                    <div className="space-y-6 flex flex-col items-center justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:gtjereos@gmail.com" 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    gtjereos@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <p 
                                className="text-muted-foreground"
                                >
                                    Montclair, NJ
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-semibold mb-4"> Connect with me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://linkedin.com/in/gtj3" target="_blank">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
{/*
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
                    <form className="space-y-6" onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {" "}
                                Your Name
                            </label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                            placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                {" "}
                                Your Email
                            </label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                            placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {" "}
                                Your Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Enter your message"
                            />
                        </div>

                        <button 
                        type="submit" 
                        disabled={isSubmitted} 
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2"   
                        )}
                        >
                            {isSubmitted ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                    
                </div>
                */}
            </div>
        </div>
    </section>
    );
};