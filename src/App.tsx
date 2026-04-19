import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Philosophy from "./components/sections/Philosophy";
import Programs from "./components/sections/Programs";
import Clubs from "./components/sections/Clubs";
import Campus from "./components/sections/Campus";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Programs />
        <Clubs />
        <Campus />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
