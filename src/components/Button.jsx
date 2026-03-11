import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-gradient-to-br from-royal-maroon-900 to-royal-maroon-700 text-silver-100 dark:bg-none dark:bg-royal-maroon-900 dark:text-white shadow-xl shadow-royal-maroon-900/20 hover:shadow-amber-gold/20 hover:from-royal-maroon-800 hover:to-royal-maroon-600',
        outline: 'border-2 border-royal-maroon-900 text-royal-maroon-900 dark:bg-transparent dark:text-white dark:border-white hover:bg-royal-maroon-900 hover:text-white dark:hover:bg-royal-maroon-900 dark:hover:border-royal-maroon-900 shadow-sm',
        ghost: 'text-ink-black dark:text-silver-200 hover:bg-royal-maroon-900/5 dark:hover:bg-white/10'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
