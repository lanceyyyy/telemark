import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path);

  const navItems = [
    { name: "Hjem", path: "/" },
    { 
      name: "Produkter", 
      path: "/produkter",
      hasDropdown: true,
      dropdownItems: [
        { name: "TD Power", path: "/produkter/td-power" },
        { name: "Hyundai SeasAll", path: "/produkter/hyundai-seasall" },
        { name: "Aquamot", path: "/produkter/aquamot" },
      ]
    },
    { name: "Everun Hjullastere", path: "/everun-hjullastere" },
    { name: "Priser", path: "/priser" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-[42px] z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl text-primary">
              Telemark Trade AS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        isActive(item.path)
                          ? "text-primary font-medium"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    
                    {showProductsDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      isActive(item.path)
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Button variant="default" size="sm" className="ml-4">
              Be om tilbud
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-primary font-medium bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-4 mt-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="default" size="sm" className="w-full">
                Be om tilbud
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;