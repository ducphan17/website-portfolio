import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/ducphan17",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/tien-phan-65893a213/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {currentYear} Tien Phan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
