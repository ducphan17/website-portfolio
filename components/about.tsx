import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/IMG_3264_2.jpg"
                alt="Profile"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              Im a passionate frontend developer with a strong foundation in
              building modern web applications. With experience in full-stack
              development, specialize in creating responsive, accessible, and
              performant user interfaces.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development started when I built my first
              website in college. Since then, I have worked with various
              technologies and frameworks, always striving to stay updated with
              the latest industry trends and best practices.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1"></h3>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </CardContent>
              </Card> */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">5+</h3>
                  <p className="text-sm text-muted-foreground">
                    Projects Completed
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link
                href="https://drive.google.com/file/d/1DVJpquNmeVi6I1WjEQi7YjK2HNDFgEBA/view?usp=sharing"
                target="_blank"
              >
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
