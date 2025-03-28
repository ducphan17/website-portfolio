import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const workExperience = [
    {
      title: "Customer Service Associate",
      company: "Walgreens",
      period: "June, 2024 - Sep. 2024",
      description:
        "Delivered excellent service to 50+ customers per shift, maintaining a 90%+ satisfaction rate through efficient communication",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Texas at Dallas",
      period: "2023 - 2027",
      description:
        "Coursework included Data Structure and Algorithms, Programming in Unix, and Software Engineering",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{job.title}</h4>
                        <span className="text-sm text-muted-foreground">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary mb-2">{job.company}</p>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{edu.degree}</h4>
                        <span className="text-sm text-muted-foreground">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
