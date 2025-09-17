import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import TDPower from "./pages/products/TDPower";
import HyundaiSeasAll from "./pages/products/HyundaiSeasAll";
import Aquamot from "./pages/products/Aquamot";
import EverunWheelLoaders from "./pages/EverunWheelLoaders";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produkter" element={<Products />} />
            <Route path="/produkter/td-power" element={<TDPower />} />
            <Route path="/produkter/hyundai-seasall" element={<HyundaiSeasAll />} />
            <Route path="/produkter/aquamot" element={<Aquamot />} />
            <Route path="/everun-hjullastere" element={<EverunWheelLoaders />} />
            <Route path="/priser" element={<Prices />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
