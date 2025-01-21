import React from "react";
import JobCard from "../components/JobCard";

const AboutPage = () => {
    return(
        <div className="container mx-auto py-8">
            <section id="about" className="mb-8">
                <div>
                    <p className="text-2xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                    
                        
                    </p>
                </div>
            </section>
            <section id="skills" className="mb-8">
                    <JobCard />
            </section>
            <section id="certifications" className="mb-8">

            </section>
        </div>
    )
}

export default AboutPage;