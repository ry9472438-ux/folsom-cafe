import { X } from 'lucide-react';
import { useOrder } from '@/context/OrderContext';
import OrderSummary from '@/components/OrderSummary';
import GuestForm from '@/components/GuestForm';
export default function CartDrawer(){const {open,setOpen}=useOrder();if(!open)return null;return <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"><div className="absolute inset-0 overflow-y-auto bg-[#0D0D0D] lg:left-auto lg:w-[880px]"><button onClick={()=>setOpen(false)} aria-label="Close order" className="absolute right-5 top-5 z-10 rounded-full border border-white/10 p-3"><X/></button><div className="grid min-h-full gap-12 p-6 pt-24 lg:grid-cols-2 lg:p-14"><OrderSummary/><GuestForm/></div></div></div>}