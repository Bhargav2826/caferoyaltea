import { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Reviews from './sections/Reviews';
import Location from './sections/Location';
import Footer from './layout/Footer';
import PageSkeleton from './components/PageSkeleton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading optimization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <div className="bg-silver-200 dark:bg-slate-900 min-h-screen text-ink-black selection:bg-amber-gold selection:text-white transition-colors duration-500">
        <Helmet>
          <title>Cafe Royal Tea | Premium Kerala Tea & Snacks in Whitefield, Bengaluru</title>
          <meta name="description" content="Authentic Kerala style tea, fresh juices, and delicious snacks at Cafe Royal Tea. Located in Whitefield, Bengaluru. Experience the royal taste of God's Own Country." />
          <meta name="keywords" content="Kerala Tea, Whitefield Cafe, Bengaluru Tea, Ginger Tea, Kerala Snacks, Cafe Royal Tea, Best Tea in Whitefield" />
          <meta property="og:title" content="Cafe Royal Tea - Royal Kerala Experience" />
          <meta property="og:description" content="Premium 24/7 tea cafe in Whitefield. Authentic flavors, budget friendly." />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#0F0F0F" />
        </Helmet>

        <Navbar />

        {isLoading ? (
          <PageSkeleton />
        ) : (
          <main>
            <Hero />
            <About />
            <Menu />
            <Reviews />
            <Location />
          </main>
        )}

        {!isLoading && <Footer />}
      </div>
    </HelmetProvider>
  );
}

export default App;
