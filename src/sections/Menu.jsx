import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import MenuCard from '../components/MenuCard';
import SectionTitle from '../components/SectionTitle';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('Tea');

    const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-20 md:py-32 bg-mesh">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Explore Our Royal Menu"
                    subtitle="A Taste for Every Craving"
                />

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20">
                    {MENU_CATEGORIES.slice(0, 8).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase transition-all duration-500 transform hover:-translate-y-1 ${activeCategory === cat
                                ? 'bg-gradient-to-r from-royal-maroon-900 to-royal-maroon-700 text-silver-100 shadow-xl shadow-royal-maroon-900/40 scale-110'
                                : 'bg-white/40 border border-royal-maroon-900/10 text-ink-black/60 hover:border-royal-maroon-700 hover:text-royal-maroon-900 shadow-sm'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                            >
                                <MenuCard item={item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 md:mt-24 text-center">
                    <p className="text-ink-black/40 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                        Authentic Kerala specialties • Prepared Daily
                    </p>
                    <button className="group relative text-royal-maroon-900 font-black uppercase tracking-[0.4em] text-[10px] pb-2 transition-all">
                        Download Full PDF Menu
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-royal-maroon-900/30 group-hover:bg-amber-gold transition-colors" />
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-gold transition-all duration-700 group-hover:w-full" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
