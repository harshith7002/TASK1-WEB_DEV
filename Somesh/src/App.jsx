import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 z-50"
      aria-label="Toggle theme"
    ></button>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <ThemeToggle />
        <Loader isLoading={isLoading} />
        {!isLoading && (
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
            <Hero />
            <Services />
            <Contact />
          </main>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
