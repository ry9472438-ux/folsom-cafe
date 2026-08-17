import { Outlet } from 'react-router-dom';
import OrderProvider from '@/context/OrderContext';
import CartDrawer from '@/components/CartDrawer';
import FloatingOrderBar from '@/components/FloatingOrderBar';
export default function AppShell(){return <OrderProvider><Outlet/><CartDrawer/><FloatingOrderBar/></OrderProvider>}