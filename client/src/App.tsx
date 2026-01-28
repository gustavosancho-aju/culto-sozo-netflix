import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SeriesDetails from './pages/SeriesDetails';
import EpisodePlayer from './pages/EpisodePlayer';
import Admin from './pages/Admin';
import { Youtube } from 'lucide-react';
import { CHANNEL_URL } from './constants';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import NotFound from "@/pages/NotFound";

const Layout: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location] = useLocation();

  // Reset search when location changes
  React.useEffect(() => {
     if(location !== '/') {
         setSearchQuery('');
     }
  }, [location]);

  return (
    <div className="bg-[#141414] min-h-screen font-sans text-gray-100 relative">
      {/* Hide Navbar on Player Page */}
      {!location.startsWith('/episodio/') && <Navbar onSearch={setSearchQuery} />}
      
      <Switch>
        <Route path="/">
          <Home searchQuery={searchQuery} />
        </Route>
        <Route path="/serie/:id" component={SeriesDetails} />
        <Route path="/episodio/:id" component={EpisodePlayer} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>

      {/* Global Fixed YouTube Button - Hide on Player Page */}
      {!location.startsWith('/episodio/') && (
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 bg-[#E50914] hover:bg-[#B20710] text-white px-4 py-3 rounded-full shadow-lg shadow-black/50 transition-all hover:scale-105 font-bold group"
          title="Inscreva-se no Canal"
        >
          <Youtube className="w-6 h-6 fill-white" />
          <span className="hidden md:inline">Inscreva-se</span>
        </a>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Layout />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
