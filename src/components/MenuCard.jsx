import { motion } from 'framer-motion';

const MenuCard = ({ item }) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass p-8 rounded-[2rem] relative group overflow-hidden border border-white/40 hover:border-amber-gold/30 transition-all duration-500 card-hover"
        >
            <div className="absolute top-0 right-0 p-6">
                <span className="bg-gradient-to-br from-royal-maroon-900 to-royal-maroon-700 text-silver-100 px-4 py-1.5 rounded-full text-sm font-black shadow-lg">
                    ₹{item.price}
                </span>
            </div>

            <div className="mb-6">
                <span className="text-amber-gold text-[10px] font-black uppercase tracking-[0.2em]">
                    {item.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-ink-black mt-2 leading-tight">
                    {item.name}
                </h3>
            </div>

            <p className="text-ink-black/60 text-sm leading-relaxed mb-8 font-medium">
                {item.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="text-royal-maroon-900 text-xs font-black uppercase tracking-widest hover:text-amber-gold transition-colors"
                >
                    Add to Order
                </motion.button>
                <div className="w-10 h-10 rounded-full bg-royal-maroon-900/5 flex items-center justify-center group-hover:bg-amber-gold group-hover:shadow-lg group-hover:shadow-amber-gold/20 transition-all duration-300">
                    <span className="text-royal-maroon-900 group-hover:text-white transition-colors duration-300 font-bold">+</span>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuCard;
