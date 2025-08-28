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
              I began my journey as a designer and gradually transitioned into
              front-end development. Through working on various school projects
              and organizational initiatives, I discovered my interest in other
              areas of programming, which ultimately led me to pursue full-stack
              development.
            </p>
            <p className="text-muted-foreground mb-6"></p>

            {/* <div className="grid grid-cols-2 gap-4 mb-8">
              
              <h3>Education</h3>
              <p>University of Texas at Dallas</p>
              <p>Bachelor's Degree of Computer Science</p>
            </div> */}

            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link
                href="https://drive.google.com/file/d/1RTO-OS792nyrFfFDaTL6GTrtgdOEhcrL/view?usp=sharing"
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
