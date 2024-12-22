import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-blue-500 bg-clip-text text-transparent">
            PremiumHub
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 bg-background/50"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* User Actions - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-full pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>

                  {/* Mobile Navigation Links */}
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-foreground/80 hover:text-foreground py-2 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Mobile User Actions */}
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button variant="outline" className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">
                      Register
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};