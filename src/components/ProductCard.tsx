import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export const ProductCard = ({ title, description, price, period, features, popular }: ProductCardProps) => {
  return (
    <Card className={`relative ${popular ? 'border-brand-purple' : ''}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-purple">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};