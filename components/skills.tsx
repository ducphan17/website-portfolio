import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Layout,
  Layers,
  PenTool,
  Terminal,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Knowledge",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Firebase"],
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Git", "GitHub", "VS Code", "Figma", "Jira"],
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="h-6 w-6" />,
      skills: [
        "Responsive Design",
        "Wireframing",
        "Prototyping",
        "User Testing",
      ],
    },
    {
      title: "Other Skills",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        "SEO",
        "Performance Optimization",
        "Accessibility",
        "Cross-browser Compatibility",
      ],
    },
    {
      title: "Currently Learning",
      icon: <Code className="h-6 w-6" />,
      skills: ["React Native", "Three.js", "WebGL", "AWS"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I have worked with a variety of technologies and tools throughout my
            career. Here is a snapshot of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
