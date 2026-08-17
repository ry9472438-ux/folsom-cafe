import { Link } from 'react-router-dom';
import { ArrowRight, Clock3, MapPin } from 'lucide-react';

export default function Hero() {
  return <section className="relative overflow-hidden border-b border-white/10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(212,175,55,.16),transparent_32%)]"/>
    <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-8"><p className="mb-5 text-sm uppercase tracking-[.32em] text-[#D4AF37]">Welcome to the hearth</p><h1 className="max-w-4xl font-heading text-5xl font-bold leading-[1.02] text-[#E5E5E1] sm:text-7xl lg:text-8xl">Crafted with fire.<br/><em className="text-[#D4AF37]">Served with soul.</em></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#E5E5E1]/65">From aromatic coffee to ember-kissed tandoori, discover food made for long conversations and memorable tables.</p><Link to="/menu" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 font-semibold text-[#0D0D0D] transition hover:-translate-y-1">Explore full menu <ArrowRight size={18}/></Link></div>
      <aside className="space-y-6 border-l border-[#D4AF37]/30 pl-7 text-sm text-[#E5E5E1]/70 lg:col-span-4"><div className="flex gap-3"><Clock3 className="text-[#D4AF37]"/><span><b className="block text-[#E5E5E1]">Open daily</b>8:00 AM onwards</span></div><div className="flex gap-3"><MapPin className="text-[#D4AF37]"/><span><b className="block text-[#E5E5E1]">Dine in</b>Enter your table number to order</span></div></aside>
    </div>
  </section>;
}