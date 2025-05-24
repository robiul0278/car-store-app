'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { gsap } from 'gsap';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Loader2, CreditCard, CheckCircle2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  notes: z.string().optional(),
  paymentMethod: z.enum(['card', 'paypal', 'demo'], {
    required_error: 'Please select a payment method',
  }),
});

type CheckoutFormValues = z.infer<typeof formSchema>;

interface CheckoutFormProps {
  onOrderComplete: () => void;
}

export default function CheckoutForm({ onOrderComplete }: CheckoutFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      notes: '',
      paymentMethod: 'demo',
    },
  });

  const handleSubmit = (values: CheckoutFormValues) => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success toast
      toast.success('Order placed successfully!', {
      });

      // Show confetti animation using GSAP
      showConfetti();

      // Delay before showing thank you message
      setTimeout(() => {
        onOrderComplete();
      }, 1500);
    }, 1500);
  };

  const showConfetti = () => {
    const confettiCount = 100;
    const colors = ['#FE5568', '#4BB3FD', '#FFE63B', '#8AC53E', '#9B5DE5'];
    
    for (let i = 0; i < confettiCount; i++) {
      // Create a single confetti element
      const confetti = document.createElement('div');
      confetti.className = 'absolute w-2 h-2 rounded-full z-50';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(confetti);
      
      // Animate the confetti
      gsap.set(confetti, {
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 50,
        y: window.innerHeight / 2 + (Math.random() - 0.5) * 50,
      });
      
      gsap.to(confetti, {
        x: '+=' + (Math.random() - 0.5) * window.innerWidth * 0.8,
        y: window.innerHeight * 1.1,
        rotation: Math.random() * 360,
        duration: 2 + Math.random() * 2,
        ease: 'power1.out',
        onComplete: () => {
          document.body.removeChild(confetti);
        },
      });
    }
  };

  return (
    <Card className="bg-card shadow-md">
      <CardHeader>
        <CardTitle>Your Details & Payment</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add any special requests or notes here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer font-normal">
                          <CreditCard className="h-4 w-4" />
                          Pay with Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="cursor-pointer font-normal">
                          Pay with PayPal
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="demo" id="demo" />
                        <Label htmlFor="demo" className="flex items-center gap-2 cursor-pointer font-normal">
                          <CheckCircle2 className="h-4 w-4" />
                          Demo Checkout
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Place Order'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}