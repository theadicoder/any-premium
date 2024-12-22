import { Music, Play, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    title: "Streaming",
    icon: Play,
    description: "Premium video streaming services",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Music",
    icon: Music,
    description: "Music streaming platforms",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Utilities",
    icon: Wrench,
    description: "Premium software and tools",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.title} className="group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};