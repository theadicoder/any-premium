import { ShoppingCart, Search } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold text-primary">
            PremiumHub
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-foreground/80 hover:text-foreground">
              Streaming
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground">
              Music
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground">
              Utilities
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};