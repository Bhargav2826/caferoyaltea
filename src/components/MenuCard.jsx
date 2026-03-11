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

            <p className="text-ink-black/60 text-sm leading-relaxed mb-4 font-medium">
                {item.description}
            </p>
        </motion.div>
    );
};

export default MenuCard;
