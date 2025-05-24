'use client';

import { useSelector } from 'react-redux';
import { 
  selectCartItems, 
  selectSubtotal, 
  selectShipping, 
  selectTotal 
} from '@/store/features/cart/cartSlice';

export function useCart() {
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectSubtotal);
  const shipping = useSelector(selectShipping);
  const total = useSelector(selectTotal);
  
  return {
    items,
    subtotal,
    shipping,
    total,
    isEmpty: items.length === 0,
    itemCount: items.reduce((count, item) => count + item.quantity, 0),
  };
}