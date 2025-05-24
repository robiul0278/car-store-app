'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/store/features/cart/cartSlice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home } from 'lucide-react';

interface ThankYouMessageProps {
  orderId: string;
}

export default function ThankYouMessage({ orderId }: ThankYouMessageProps) {
  const dispatch = useDispatch();
  const cardRef = useRef<HTMLDivElement>(null);
  const checkmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear the cart
    dispatch(clearCart());

    // Animate the card and checkmark
    if (cardRef.current && checkmarkRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
      );

      gsap.fromTo(
        checkmarkRef.current,
        { scale: 0, rotation: -45 },
        { scale: 1, rotation: 0, duration: 0.5, delay: 0.3, ease: 'back.out(1.7)' }
      );
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/10 p-4">
      <Card className="w-full max-w-md bg-card" ref={cardRef}>
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4" ref={checkmarkRef}>
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Thank You!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-muted-foreground">
            Your order has been placed successfully.
          </p>
          
          <div className="bg-secondary/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Order Reference:</p>
            <p className="text-xl font-mono tracking-wider">{orderId}</p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Weve sent a confirmation to your email address.
            Youll receive updates about your order status soon.
          </p>
          
          <Link href="/" passHref>
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}