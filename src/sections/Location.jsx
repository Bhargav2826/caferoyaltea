import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Navigation } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Location = () => {
    return (
        <section id="contact" className="py-32 bg-mesh relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Find Your Way to Royalty"
                    subtitle="Locate Us in Whitefield"
                />

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white/40 backdrop-blur-3xl p-6 md:p-12 rounded-[3.5rem] border border-white/60 shadow-2xl overflow-hidden">
                    {/* Map Section */}
                    <div className="h-[450px] lg:h-full min-h-[450px] rounded-[2.5rem] overflow-hidden border border-royal-maroon-900/10 group relative shadow-inner">
                        <div className="w-full h-full bg-slate-200 relative flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                                alt="Map Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                            <div className="relative z-10 text-center p-10 glass rounded-[2rem] border-white/40 shadow-2xl backdrop-blur-3xl">
                                <div className="bg-gradient-to-br from-royal-maroon-900 to-royal-maroon-700 p-8 rounded-full inline-block mb-6 shadow-xl animate-bounce">
                                    <MapPin className="text-silver-100 w-12 h-12" />
                                </div>
                                <h4 className="text-3xl font-display font-black text-ink-black mb-3 tracking-tighter">Visit Our Tea Room</h4>
                                <p className="text-ink-black/60 mb-8 font-medium italic">KIADB Export Promotion Industrial Area,<br />Whitefield, Bengaluru</p>
                                <Button className="px-10 py-4 shadow-xl">
                                    <Navigation size={18} className="mr-2" /> OPEN IN MAPS
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div className="space-y-10">
                            {[
                                { icon: Clock, title: "Open 24/7", desc: "Always here for your midnight cravings.", color: "text-royal-maroon-900", bg: "bg-royal-maroon-900/5" },
                                { icon: Phone, title: "Call Us", desc: "For bulk orders & inquiries: +91 90000 00000", color: "text-amber-gold", bg: "bg-amber-gold/5" },
                                { icon: MessageSquare, title: "WhatsApp", desc: "Quick chat for takeaway & feedback.", color: "text-royal-maroon-700", bg: "bg-royal-maroon-700/5" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-8 group"
                                >
                                    <div className={`w-16 h-16 glass rounded-2xl flex items-center justify-center shrink-0 border-white/60 shadow-lg group-hover:rotate-6 transition-transform ${item.bg}`}>
                                        <item.icon className={item.color} />
                                    </div>
                                    <div>
                                        <h5 className="text-ink-black font-black uppercase tracking-widest text-xs mb-1.5">{item.title}</h5>
                                        <p className="text-ink-black/60 text-sm font-medium italic leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-6">
                            <Button className="flex-1 py-5 shadow-royal-maroon-900/10">
                                <Phone size={20} className="mr-2" /> CALL NOW
                            </Button>
                            <Button variant="outline" className="flex-1 py-5 border-amber-gold/30 text-amber-gold hover:bg-amber-gold hover:text-white">
                                <MessageSquare size={20} className="mr-2" /> WHATSAPP
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
