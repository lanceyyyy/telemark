import { Phone, Mail } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-primary text-primary-foreground flex justify-center items-center px-4 text-sm fixed w-full top-0 z-50 shadow-sm h-[42px]">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <span>900 33 402</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4" />
          <span>klas.grave@telemark-trade.no</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;