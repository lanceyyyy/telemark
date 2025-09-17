import { ReactNode } from "react";
import TopHeader from "./TopHeader";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <MainNavigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;