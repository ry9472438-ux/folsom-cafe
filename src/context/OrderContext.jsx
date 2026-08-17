import { createContext, useContext, useEffect, useState } from 'react';

const OrderContext = createContext(null);
export const useOrder = () => useContext(OrderContext);

export default function OrderProvider({ children }) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('folsom-order') || '[]'));
  const [open, setOpen] = useState(false);
  useEffect(() => localStorage.setItem('folsom-order', JSON.stringify(items)), [items]);
  const add = item => setItems(current => {
    const found = current.find(x => x.name === item.name);
    return found ? current.map(x => x.name === item.name ? {...x, qty:x.qty+1} : x) : [...current,{...item,qty:1}];
  });
  const change = (name, delta) => setItems(current => current.map(x => x.name === name ? {...x,qty:x.qty+delta} : x).filter(x => x.qty > 0));
  const total = items.reduce((sum,item) => sum + item.price * item.qty, 0);
  return <OrderContext.Provider value={{items,add,change,total,open,setOpen,clear:()=>setItems([])}}>{children}</OrderContext.Provider>;
}