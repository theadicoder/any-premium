import { useState } from "react";
import { ChevronDown, ChevronUp, ShoppingCart, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface MiniCard {
  title: string;
  price: number;
  period: string;
  description: string;
}

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  logo: string;
  miniCards: MiniCard[];
}

const categories: ProductCategory[] = [
  {
    id: "netflix",
    title: "Netflix Premium",
    description: "Stream your favorite shows and movies in 4K Ultra HD",
    accentColor: "bg-red-600",
    logo: "/placeholder.svg",
    miniCards: [
      {
        title: "1 Month Premium",
        price: 19.99,
        period: "month",
        description: "Full HD streaming with 4 screens",
      },
      {
        title: "6 Months Premium",
        price: 99.99,
        period: "6 months",
        description: "Save 17% on 6-month subscription",
      },
      {
        title: "12 Months Premium",
        price: 179.99,
        period: "year",
        description: "Best value! Save 25% annually",
      },
    ],
  },
  {
    id: "prime",
    title: "Amazon Prime",
    description: "Unlimited streaming, free shipping, and exclusive deals",
    accentColor: "bg-blue-600",
    logo: "/placeholder.svg",
    miniCards: [
      {
        title: "Monthly Prime",
        price: 14.99,
        period: "month",
        description: "Full Prime benefits monthly",
      },
      {
        title: "Annual Prime",
        price: 139.99,
        period: "year",
        description: "Save 20% with annual plan",
      },
    ],
  },
];

export const OmegaCardsGallery = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Subscriptions</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Main Category Card */}
              <Card className={`relative overflow-hidden border-2 hover:border-${category.accentColor}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <img
                      src={category.logo}
                      alt={category.title}
                      className="w-16 h-16 object-contain"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleCategory(category.id)}
                      className="transition-transform duration-300"
                    >
                      {expandedCategories.includes(category.id) ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </Button>
                  </div>
                  <CardTitle className="text-2xl mt-4">{category.title}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardFooter>
                  <Button className={`w-full ${category.accentColor}`}>
                    View Options
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>

                {/* Mini Cards Section */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategories.includes(category.id)
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {category.miniCards.map((miniCard, index) => (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Card className="hover:shadow-lg transition-all duration-300">
                              <CardHeader className="p-4">
                                <CardTitle className="text-lg">
                                  {miniCard.title}
                                </CardTitle>
                                <div className="mt-2">
                                  <span className="text-2xl font-bold">
                                    ${miniCard.price}
                                  </span>
                                  <span className="text-muted-foreground">
                                    /{miniCard.period}
                                  </span>
                                </div>
                              </CardHeader>
                              <CardFooter className="p-4 pt-0">
                                <Button
                                  variant="outline"
                                  className="w-full hover:bg-accent"
                                >
                                  <ShoppingCart className="mr-2 h-4 w-4" />
                                  Add to Cart
                                </Button>
                              </CardFooter>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{miniCard.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};