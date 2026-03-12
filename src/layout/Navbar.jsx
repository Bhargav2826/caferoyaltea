import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent md:bg-transparent py-4 md:py-8'} ${!scrolled && 'max-md:bg-silver-100/10 max-md:backdrop-blur-sm'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-4 cursor-pointer group"
                >
                    <div className="relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <img src="/logo-navbar.png" alt="Cafe Royal Tea Logo" className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-2xl" />
                    </div>
                    <span className="font-display text-lg md:text-2xl font-black tracking-tighter text-ink-black flex items-center">
                        CAFE <span className="text-gradient-maroon mx-1.5">ROYAL</span> TEA
                    </span>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 items-center">
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
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleDarkMode}
                        className="p-2.5 rounded-full bg-royal-maroon-900/5 dark:bg-white/10 text-ink-black transition-colors"
                    >
                        {isDarkMode ? <Sun size={18} className="text-amber-gold" /> : <Moon size={18} className="text-royal-maroon-900" />}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-royal-maroon-900 to-royal-maroon-700 text-silver-100 px-8 py-2.5 rounded-full font-black text-xs tracking-[0.1em] shadow-lg shadow-royal-maroon-900/20"
                    >
                        ORDER NOW
                    </motion.button>
                </div>

                {/* Mobile Toggle & Menu Trigger */}
                <div className="md:hidden flex items-center space-x-3">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2.5 bg-silver-100/80 dark:bg-slate-800/80 border border-royal-maroon-900/10 dark:border-white/10 rounded-xl backdrop-blur-lg text-ink-black shadow-sm"
                    >
                        {isDarkMode ? <Sun size={20} className="text-amber-gold" /> : <Moon size={20} className="text-royal-maroon-900" />}
                    </button>
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-2.5 bg-royal-maroon-900 text-white rounded-xl shadow-lg shadow-royal-maroon-900/20 active:scale-95 transition-transform"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
                        />
                        
                        <motion.div
                            key="mobile-menu"
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 250 }}
                            className="fixed top-0 left-0 w-full h-[50dvh] z-[100] bg-silver-100/98 dark:bg-slate-900/98 backdrop-blur-3xl flex flex-col items-center shadow-2xl rounded-none border-b-2 border-royal-maroon-900/20"
                        >
                            {/* Header inside menu */}
                            <div className="w-full flex justify-between items-center px-8 py-6">
                                <div className="flex items-center gap-2">
                                    <img src="/logo-navbar.png" alt="Logo" className="w-8 h-8 object-contain" />
                                    <span className="font-display font-black text-xs tracking-tighter">CAFE ROYAL TEA</span>
                                </div>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-3 bg-royal-maroon-900/5 dark:bg-white/5 rounded-full text-royal-maroon-900 dark:text-white"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col items-center space-y-4 mt-2">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * i + 0.2 }}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm font-black tracking-[0.2em] text-ink-black/80 hover:text-royal-maroon-900 transition-colors uppercase"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                            
                            {/* CTA & Branding */}
                            <div className="mt-auto mb-8 flex flex-col items-center gap-4 w-full px-12 pb-2">
                                <motion.button 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-gradient-to-r from-royal-maroon-900 to-royal-maroon-700 text-silver-100 px-10 py-4 rounded-full font-black text-xs tracking-[0.2em] shadow-xl w-full max-w-xs"
                                >
                                    ORDER NOW
                                </motion.button>

                                <div className="flex flex-col items-center opacity-40">
                                    <p className="text-[7px] uppercase tracking-[0.4em] font-black text-ink-black">God's Own Flavor</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
