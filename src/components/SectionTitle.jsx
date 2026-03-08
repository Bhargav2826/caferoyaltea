import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-amber-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-3"
            >
                <span className="w-8 h-[1px] bg-amber-gold/30 block" />
                {subtitle}
                <span className="w-8 h-[1px] bg-amber-gold/30 block" />
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-display font-bold text-gradient-maroon pb-2"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`h-1.5 w-20 bg-gradient-to-r from-royal-maroon-900 to-amber-gold mt-6 rounded-full ${centered ? 'mx-auto' : ''}`}
            />
        </div>
    );
};

export default SectionTitle;
