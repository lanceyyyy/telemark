import { Phone, Mail, MapPin } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+47 35 95 25 00</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>post@telemark-trade.no</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Telemark, Norge</span>
          </div>
        </div>
        <div className="text-xs opacity-90">
          Norwegian Sales & Import
        </div>
      </div>
    </div>
  );
};

export default TopHeader;