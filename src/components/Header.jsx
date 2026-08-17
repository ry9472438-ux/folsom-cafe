import { Link, NavLink } from 'react-router-dom';
import { Menu as MenuIcon, ShoppingBag } from 'lucide-react';
import { useOrder } from '@/context/OrderContext';

export default function Header() {
  const {items,setOpen} = useOrder();
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0D0D0D]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-12">
      <Link to="/" className="font-heading text-xl font-bold tracking-[.18em] text-[#E5E5E1]">FOLSOM<span className="block text-[9px] tracking-[.32em] text-[#D4AF37]">CAFE & RESTAURANT</span></Link>
      <nav className="flex items-center gap-2 sm:gap-6">
        <NavLink to="/" className="hidden text-sm text-[#E5E5E1]/70 hover:text-[#D4AF37] sm:block">Home</NavLink>
        <NavLink to="/menu" className="flex items-center gap-2 text-sm text-[#E5E5E1]/70 hover:text-[#D4AF37]"><MenuIcon size={17}/> Menu</NavLink>
        <button onClick={()=>setOpen(true)} aria-label="Open order" className="relative rounded-full border border-[#D4AF37]/50 p-3 text-[#D4AF37]"><ShoppingBag size={18}/>{items.length>0&&<span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-black">{items.reduce((s,x)=>s+x.qty,0)}</span>}</button>
      </nav>
    </div>
  </header>;
}