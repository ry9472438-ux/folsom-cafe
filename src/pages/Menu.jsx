import Header from '@/components/Header';
import CategoryRibbon from '@/components/CategoryRibbon';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { menuSections } from '@/data/menu';
export default function Menu(){return <><Header/><main><div className="mx-auto max-w-7xl px-5 pb-12 pt-20 lg:px-12"><p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">The complete collection</p><h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold sm:text-7xl">Choose what calls to you.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-[#E5E5E1]/55">Browse every Folsom favourite, add your selections, then send your table order through WhatsApp.</p></div><CategoryRibbon sections={menuSections}/><div className="mx-auto max-w-7xl px-5 lg:px-12">{menuSections.map((section,index)=><CategorySection key={section.id} section={section} index={index}/>)}</div></main><Footer/></>}