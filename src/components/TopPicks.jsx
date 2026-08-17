import { Plus } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { topPicks } from '@/data/menu';
import { useOrder } from '@/context/OrderContext';

export default function TopPicks() {
  const {add} = useOrder();
  return <section id="top-picks" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-12">
    <div className="mb-10 flex items-end justify-between"><div><p className="mb-3 text-xs uppercase tracking-[.3em] text-[#D4AF37]">Our signatures</p><h2 className="font-heading text-4xl font-bold sm:text-5xl">Top Picks</h2></div><span className="hidden text-sm text-[#E5E5E1]/50 sm:block">Swipe to explore →</span></div>
    <div className="flex snap-x gap-5 overflow-x-auto pb-6 [scrollbar-width:none]">{topPicks.map(item=><article key={item.name} className="group min-w-[82vw] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-[#181818] sm:min-w-[420px]"><div className="relative h-80 overflow-hidden"><Image src={item.image} alt={item.name} className="h-full w-full transition duration-700 group-hover:scale-105"/><button onClick={()=>add(item)} aria-label={`Add ${item.name}`} className="absolute bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-[#D4AF37] text-black shadow-2xl transition hover:scale-110"><Plus/></button></div><div className="flex items-center justify-between p-6"><h3 className="font-heading text-2xl font-bold">{item.name}</h3><span className="whitespace-nowrap font-semibold text-[#D4AF37]">Rs. {item.price.toLocaleString()}</span></div></article>)}</div>
  </div></section>;
}