import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-gradient-to-br from-royal-maroon-900 to-royal-maroon-700 text-silver-100 shadow-xl shadow-royal-maroon-900/20 hover:shadow-amber-gold/20 hover:from-royal-maroon-800 hover:to-royal-maroon-600',
        outline: 'border-2 border-royal-maroon-900 text-royal-maroon-900 hover:bg-royal-maroon-900 hover:text-white shadow-sm',
        ghost: 'text-ink-black hover:bg-royal-maroon-900/5'
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
