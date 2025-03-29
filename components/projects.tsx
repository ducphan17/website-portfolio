// import Image from "next/image";
// import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// export function Projects() {
//   const projects = [
//     {
//       title: "Comet Claim",
//       description:
//         "A social-media inspired lost an found app where users can post, search, and communicate about lost and found items.",
//       image: "/CometClaimPi.png?height=400&width=600",
//       tags: ["TypeScript", "React Native", "AWS Lambda", "DynamoDB"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       title: "Portfolio Website",
//       description:
//         "A personal portfolio website showcasing projects and skills with a modern, responsive design.",
//       image: "/portfolioPic.png?height=400&width=600",
//       tags: ["TypeScript", "Next.js", "HTML", "CSS"],
//       liveUrl: "#",
//       githubUrl: "https://github.com/ducphan17/portfolio-website",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">My Projects</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Here are some of my recent projects. Each one was built to solve a
//             specific problem or explore new technologies.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="overflow-hidden">
//               <div className="relative h-48 w-full overflow-hidden">
//                 <Image
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform hover:scale-105"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-muted-foreground mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-3">
//                   <Button asChild variant="outline" size="sm" className="gap-2">
//                     <Link
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <ExternalLink className="h-4 w-4" />
//                       Live Demo
//                     </Link>
//                   </Button>
//                   <Button asChild variant="outline" size="sm" className="gap-2">
//                     <Link
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Github className="h-4 w-4" />
//                       Code
//                     </Link>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Button asChild>
//             <Link
//               href="https://github.com/ducphan17"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View More on GitHub
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Comet Claim",
      description:
        "A social-media inspired lost and found app where users can post, search, and communicate about lost and found items.",
      image: "/CometClaimPic.png",
      tags: ["TypeScript", "React Native", "AWS Lambda", "DynamoDB"],
      status: "in-progress",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills with a modern, responsive design.",
      image: "/portfolioPic.png",
      tags: ["TypeScript", "Next.js", "HTML", "CSS"],
      liveUrl: "https://website-portfolio-tau-three.vercel.app/", // Make sure it's always a string
      githubUrl: "https://github.com/ducphan17/portfolio-website",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.status === "in-progress" ? (
                  <div className="px-4 py-2 bg-gray-200 text-gray-600 text-sm rounded-md text-center">
                    In Progress
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Link
                        href={project.liveUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Link
                        href={project.githubUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link
              href="https://github.com/ducphan17"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
