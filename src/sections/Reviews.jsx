import { motion } from 'framer-motion';
import { Star, Quote, Coffee } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const reviews = [
    {
        name: "Rahul Sharma",
        rating: 5,
        comment: "The best ginger tea in Whitefield. Reminds me of the tea I had during my trip to Munnar. Must try!",
        date: "2 days ago"
    },
    {
        name: "Lekshmi Nair",
        rating: 5,
        comment: "Authentic Malayali snacks. The Avil Milk is exactly how we get it in Malappuram. Great for evening hangouts.",
        date: "1 week ago"
    },
    {
        name: "David Miller",
        rating: 4,
        comment: "Quick service and great value for money. Their sandwiches are surprisingly good and fresh!",
        date: "3 days ago"
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="py-20 md:py-32 bg-mesh relative overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Voices of Delight"
                    subtitle="The Royal Verdict"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-20">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -8 }}
                            className="glass p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] relative border-white/60 shadow-xl group hover:border-amber-gold/30 transition-all duration-500"
                        >
                            <Quote className="absolute top-8 right-8 text-royal-maroon-900/5 w-16 h-16 group-hover:text-amber-gold/10 transition-colors" />

                            <div className="flex gap-1.5 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className={i < review.rating ? "text-royal-maroon-900 fill-royal-maroon-900 dark:text-amber-gold dark:fill-amber-gold" : "text-royal-maroon-900/10"}
                                    />
                                ))}
                            </div>

                            <p className="text-ink-black/80 mb-10 text-lg italic leading-relaxed font-medium">
                                "{review.comment}"
                            </p>

                            <div className="flex items-center justify-between border-t border-royal-maroon-900/5 pt-6">
                                <div className="flex flex-col">
                                    <span className="font-display font-black text-ink-black uppercase tracking-tighter text-sm">{review.name}</span>
                                    <span className="text-[9px] text-ink-black/40 uppercase font-black tracking-widest mt-1">{review.date}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-royal-maroon-900/5 dark:bg-royal-maroon-900/20 flex items-center justify-center group-hover:bg-amber-gold dark:group-hover:bg-royal-maroon-900 group-hover:shadow-lg group-hover:shadow-amber-gold/20 transition-all duration-300">
                                    <Coffee size={16} className="text-royal-maroon-900 dark:text-royal-maroon-700 group-hover:text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button variant="outline" className="group !bg-royal-maroon-900 !text-white dark:!bg-transparent dark:!text-white border-2 border-royal-maroon-900 dark:border-white">
                        <span className="flex items-center gap-3">
                            Review us on Google Maps
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-gold group-hover:animate-ping" />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
