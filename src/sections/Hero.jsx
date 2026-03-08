import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import Button from '../components/Button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-mesh">
            {/* 3D Background */}
            <HeroScene />

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-6 pointer-events-none"
                >
                    <span className="text-amber-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm bg-white/40 px-4 py-1 rounded-full backdrop-blur-sm border border-amber-gold/20 shadow-sm">
                        Authentic Kerala Flavors
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-display font-bold text-ink-black mb-8 leading-tight tracking-tight"
                >
                    EXPERIENCE <span className="text-gradient-maroon">ROYAL</span> <br className="hidden md:block" />
                    <span className="text-gradient-gold animate-glow">KERALA TEA</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-2xl text-ink-black/70 max-w-2xl mx-auto mb-12 font-sans leading-relaxed font-medium"
                >
                    The most authentic ginger tea, snacks, and refreshing juices in the heart of Whitefield, Bengaluru.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <Button onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
                        EXPLORE MENU
                    </Button>
                    <Button variant="outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        GET DIRECTIONS
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-royal-maroon-700 flex flex-col items-center gap-3 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase font-black">SCROLL</span>
                <div className="w-6 h-10 border-2 border-royal-maroon-700/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-royal-maroon-900 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
