import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About = () => {
    const features = [
        { title: 'Fresh Tea', desc: 'Brewed fresh 24/7 with authentic Kerala spices.' },
        { title: 'Budget Friendly', desc: 'Premium taste starting at just ₹15.' },
        { title: 'Fast Service', desc: 'Quick snacks for your busy Whitefield schedule.' },
        { title: 'Casual Hangout', desc: 'The perfect spot for friends and family.' }
    ];

    return (
        <section id="about" className="py-32 bg-mesh relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-maroon-900/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-gold/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionTitle
                            title="A Story of Tradition in Every Sip"
                            subtitle="The Royal Heritage"
                        />
                        <p className="text-xl text-ink-black/70 leading-relaxed mb-10 font-medium italic">
                            At Cafe Royal Tea, we don't just serve tea; we serve a tradition that dates back generations in the lush hills of Kerala. Our signature ginger tea is balanced with a secret blend of spices that will transport you straight to God's Own Country.
                        </p>

                        <div className="relative mb-12 py-8 px-10 glass rounded-3xl border-l-8 border-royal-maroon-900 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-royal-maroon-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <p className="text-royal-maroon-900 font-bold text-lg leading-relaxed relative z-10">
                                "We brought the warmth of a Malayali home to the buzzing tech parks of Whitefield, creating a bridge between heritage and modern life."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group cursor-default"
                                >
                                    <h4 className="text-royal-maroon-900 font-black mb-3 uppercase tracking-tighter text-lg group-hover:text-amber-gold transition-colors">{feature.title}</h4>
                                    <p className="text-ink-black/60 text-sm font-medium leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] glass rounded-[3rem] p-6 overflow-hidden group border-white/60 shadow-inner">
                            <div className="absolute inset-0 bg-gradient-to-tr from-royal-maroon-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img
                                src="/about-us.png"
                                alt="Cafe Royal Tea Story"
                                className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-1000 group-hover:scale-110"
                            />
                        </div>
                        {/* Floating Interaction Element */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-12 -right-12 glass p-10 rounded-full border-2 border-amber-gold/30 shadow-2xl flex flex-col items-center justify-center backdrop-blur-2xl"
                        >
                            <span className="text-5xl font-display font-black text-gradient-maroon block mb-1">10+</span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-royal-maroon-900 font-black text-center max-w-[80px]">Years of Pure Tradition</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
