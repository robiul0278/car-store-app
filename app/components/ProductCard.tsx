'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/features/cart/cartSlice';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: string) => {
    const q = Math.max(1, Math.min(99, parseInt(value) || 1));
    setQuantity(q);
  };

  const handleIncrement = () => {
    setQuantity(prev => (prev < 99 ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success(`Added ${quantity} ${product.name} to cart`, {
      duration: 1000,
    });
    setQuantity(1);
  };

  return (
    <Card className="flex flex-col border border-y-red-700 border-x-cyan-700">
      <CardHeader className="p-0">
        <div className="relative h-32 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardTitle className="p-2 md:px-3 lg:px-3 py-2 md:text-lg lg:text-lg">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-2 md:px-3 lg:px-3">
        <p className="text-muted-foreground text-sm">{product.description}</p>
        <p className="md:text-lg lg:text-lg font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-2 p-2 md:px-3 lg:px-3">
        <div className="flex items-center rounded-md border ">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 px-2 rounded-none"
            onClick={handleDecrement}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <Input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            className="w-8 rounded-none border-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <Button
            variant="ghost"
            size="icon"
            className="w-8 px-2 rounded-none"
            onClick={handleIncrement}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <Button
          className="flex-1 gap-1 p-0 text-sm md:px-4 md:py-1 md:text-base"
          onClick={handleAddToCart}
        >
          <Plus className="w-4 md:h-5 md:w-5 hidden md:flex lg:flex" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}