import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-brand-dark to-background">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-purple">
          Premium Digital Subscriptions
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Access the world's best streaming services, music platforms, and premium utilities
          all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
            Explore Premium
          </Button>
          <Button size="lg" variant="outline">
            View Categories
          </Button>
        </div>
      </div>
    </div>
  );
};