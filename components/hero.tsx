import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hello, I am <span className="text-primary">Tien Phan</span>
            <br />
          </h1>
          <p className="text-2xl md:text-3xl mb-6">
            Junior in Computer Science at UT Dallas
          </p>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Here is my portfolio website
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
