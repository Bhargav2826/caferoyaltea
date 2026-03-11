import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Navigation } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const Location = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-mesh relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Find Your Way to Royalty"
                    subtitle="Locate Us in Whitefield"
                />

                <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 bg-white/40 backdrop-blur-3xl p-6 md:p-12 rounded-3xl md:rounded-[3.5rem] border border-white/60 shadow-2xl overflow-hidden">
                    {/* Map Section */}
                    <div className="h-[300px] md:h-[450px] lg:h-full min-h-[300px] md:min-h-[450px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-royal-maroon-900/10 group relative shadow-inner">
                        <div className="w-full h-full bg-slate-200 relative flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                                alt="Map Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                            <div className="relative z-10 text-center p-6 md:p-10 glass rounded-2xl md:rounded-[2rem] border-white/40 shadow-2xl backdrop-blur-3xl">
                                <div className="bg-gradient-to-br from-royal-maroon-900 to-royal-maroon-700 p-4 rounded-full inline-block mb-6 shadow-xl animate-bounce">
                                    <MapPin className="text-silver-100 w-8 h-8" />
                                </div>
                                <h4 className="text-xl md:text-3xl font-display font-black text-ink-black mb-3 tracking-tighter">Visit Our Tea Room</h4>
                                <p className="text-ink-black/60 mb-8 font-medium italic">XPQH+9QF, KIADB Export Promotion Industrial Area,<br />Whitefield, Bengaluru, Karnataka 560066</p>
                                <div className="flex justify-center w-full">
                                    <Button
                                        onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=XPQH%2B9QF%2C+KIADB+Export+Promotion+Industrial+Area%2C+Whitefield%2C+Bengaluru%2C+Karnataka+560066', '_blank')}
                                        className="px-6 py-3 flex flex-row items-center justify-center gap-2.5 shadow-md shadow-royal-maroon-900/10 uppercase tracking-widest text-xs font-bold group"
                                    >
                                        <Navigation size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        <span>OPEN IN MAPS</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col justify-center space-y-8 md:space-y-12">
                        <div className="space-y-6 md:space-y-10">
                            {[
                                { icon: Clock, title: "Open 24/7", desc: "Always here for your midnight cravings.", color: "text-royal-maroon-900", bg: "bg-royal-maroon-900/5" },
                                { icon: Phone, title: "Call Us", desc: "For bulk orders & inquiries: +91 89519 91519", color: "text-amber-gold dark:text-royal-maroon-900", bg: "bg-amber-gold/5" },
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

                        <div className="flex flex-col sm:flex-row gap-4 pt-6 uppercase tracking-widest text-xs font-bold">
                            <Button
                                onClick={() => window.location.href = 'tel:+918951991519'}
                                className="flex-1 py-3 px-6 flex flex-row items-center justify-center gap-2.5 shadow-md shadow-royal-maroon-900/10 group !bg-royal-maroon-900 hover:!bg-royal-maroon-800 text-white dark:text-white"
                            >
                                <Phone size={18} className="group-hover:rotate-12 transition-transform text-white" />
                                <span className="text-white">CALL NOW</span>
                            </Button>
                            <Button
                                onClick={() => window.open('https://wa.me/918951991519', '_blank')}
                                className="flex-1 py-3 px-6 flex flex-row items-center justify-center gap-2.5 !bg-gradient-to-br from-[#25D366] to-[#128C7E] border-none text-white dark:text-white shadow-md shadow-[#25D366]/20 hover:from-[#2ecc71] hover:to-[#27ae60] group"
                            >
                                <WhatsAppIcon size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="text-white">WHATSAPP</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
