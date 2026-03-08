import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-4 cursor-pointer group"
                >
                    <div className="relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <img src="/logo-navbar.png" alt="Cafe Royal Tea Logo" className="w-20 h-20 object-contain drop-shadow-2xl" />
                    </div>
                    <span className="font-display text-2xl font-black tracking-tighter text-ink-black flex items-center">
                        CAFE <span className="text-gradient-maroon mx-1.5">ROYAL</span> TEA
                    </span>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-ink-black/80 hover:text-royal-maroon-700 transition-all font-bold tracking-tight text-sm relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-gold transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-royal-maroon-900 to-royal-maroon-700 text-silver-100 px-8 py-2.5 rounded-full font-black text-xs tracking-[0.1em] shadow-lg shadow-royal-maroon-900/20"
                    >
                        ORDER NOW
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-ink-black p-2 bg-white/50 rounded-lg backdrop-blur-md">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full glass border-t border-royal-maroon-900/10 shadow-2xl"
                    >
                        <div className="flex flex-col items-center py-12 space-y-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-ink-black text-2xl font-black tracking-tighter hover:text-royal-maroon-700 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-royal-maroon-900 text-silver-100 px-12 py-4 rounded-full font-black text-sm tracking-widest shadow-xl">
                                ORDER NOW
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
