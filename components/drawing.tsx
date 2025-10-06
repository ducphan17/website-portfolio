// import { Card, CardContent } from "@/components/ui/card";
// import { Briefcase, GraduationCap } from "lucide-react";
// import Link from "next/link";

export function Drawing() {
  const drawingInfo = [
    {
      title: "Imprisoned",
      description:
        "A guy being trapped and imprisoned by fears, social anxiety, and his own mind.",
      medium: "Markers, Color Pencils",
      image: "/drawPics/imprison.JPG",
    },
    {
      title: "Exposed",
      description:
        "A guy trying to hide his emotion from the world, but he just can't",
      medium: "Markers, Color Pencils",
      image: "/drawPics/exposed.jpg",
    },
    {
      title: "Earth",
      description: "A guy representing the earth",
      medium: "Digital Art",
      image: "/drawPics/earth.png",
    },
    {
      title: "SoloLeveling Fan Art",
      description: "Sung Jinwoo and his general shadow army",
      medium: "Digital Art",
      image: "/drawPics//soloLeveling.png",
    },
  ];

  return (
    <section id="drawing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Artworks</h2>
        </div>
        {/* for mobile, it's gon be 1 column, medium is 2 columns, large is 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {drawingInfo.map((drawing, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={drawing.image}
                alt={drawing.title}
                className="w-full h-100 object-cover transition-transform duration-300 group-hover-105"
              />

              <div></div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-5 ">
          <Link
            href="/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-8 py-3 font-semibold text-whiteborder overflow-hidden rounded-lg my-special-btn border border-2"
          >
            <span className="relative z-10">View More</span>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
