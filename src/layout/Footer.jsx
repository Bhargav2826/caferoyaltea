import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import GoWindLogo from '../assets/JPG.jpg';

const Footer = () => {
    return (
        <footer className="bg-mesh border-t border-royal-maroon-900/10 pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden dark:bg-slate-900 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-royal-maroon-900/10 to-transparent" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
                <div className="md:col-span-2">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-8 text-center md:text-left">
                        <img src="/logo-navbar.png" alt="Logo" className="w-20 h-20 md:w-16 md:h-16 object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300" />
                        <span className="font-display text-3xl md:text-2xl font-black text-black dark:text-white tracking-tighter flex items-center h-full">
                            CAFE <span className="text-gradient-maroon mx-1.5">ROYAL</span> TEA
                        </span>
                    </div>
                    <p className="text-black dark:text-white max-w-sm mb-10 leading-relaxed font-medium italic text-center md:text-left mx-auto md:mx-0">
                        Experience the royal taste of authentic Kerala tea and snacks in the heart of Whitefield. Bringing the flavors of God's Own Country to your neighborhood.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-5">
                        {[Instagram, Facebook].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 rounded-2xl glass border border-white/60 flex items-center justify-center text-black dark:text-white hover:bg-royal-maroon-900 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-royal-maroon-900 font-black mb-8 uppercase tracking-[0.2em] text-xs">Quick Links</h4>
                    <ul className="space-y-5 text-black dark:text-white font-bold text-sm">
                        {['Home', 'About', 'Menu', 'Contact'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-black dark:text-white hover:text-amber-gold transition-colors flex items-center gap-2 group">
                                    <span className="w-0 h-[2px] bg-amber-gold transition-all duration-300 group-hover:w-3" />
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-royal-maroon-900 font-black mb-8 uppercase tracking-[0.2em] text-xs">Contact Info</h4>
                    <ul className="space-y-6 text-black dark:text-white text-sm font-medium">
                        <li className="flex items-start space-x-4 group">
                            <MapPin size={20} className="text-royal-maroon-900 shrink-0 group-hover:animate-bounce" />
                            <span className="leading-relaxed text-black dark:text-white">XPQH+9QF, KIADB Export Promotion Industrial Area, Whitefield, Bengaluru, Karnataka 560066</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Phone size={20} className="text-amber-gold shrink-0" />
                            <span className="font-bold text-black dark:text-white">+91 89519 91519</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Mail size={20} className="text-royal-maroon-700 shrink-0" />
                            <span className="text-black dark:text-white">hello@caferoyaltea.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 md:mt-24 pt-8 md:pt-10 border-t border-royal-maroon-900/10 dark:border-white/10">
                <div className="flex flex-col items-center gap-8 text-center w-full">
                    <p className="text-black dark:text-white text-[11px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.5em] whitespace-nowrap">
                        @ 2026 CAFE ROYAL TEA
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-royal-maroon-900/10 dark:border-white/10 p-1.5 bg-white dark:bg-slate-800 shadow-md shrink-0">
                            <img src={GoWindLogo} alt="Go Wind Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-left">
                            <span className="text-black dark:text-white text-[9px] min-[375px]:text-[10px] md:text-[11px] font-black uppercase tracking-wider min-[375px]:tracking-widest block leading-tight whitespace-nowrap">
                                Go Wind - Powering Your Digital Growth
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
