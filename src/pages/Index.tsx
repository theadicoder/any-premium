import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ChatBox } from "@/components/ChatAssistant/ChatBox";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>
      <ChatBox />
    </div>
  );
};

export default Index;