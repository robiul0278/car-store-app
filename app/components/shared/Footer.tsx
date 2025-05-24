'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-0 py-8 md:py-12">

        {/* Mobile & Tablet View: Accordion */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about">
              <AccordionTrigger>About</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/company">Company</Link></li>
                  <li><Link href="/team">Team</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger>Support</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/help">Help Center</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legal">
              <AccordionTrigger>Legal</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/privacy">Privacy</Link></li>
                  <li><Link href="/terms">Terms</Link></li>
                  <li><Link href="/cookies">Cookie Policy</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="social">
              <AccordionTrigger>Social</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="https://twitter.com" target="_blank">Twitter</Link></li>
                  <li><Link href="https://instagram.com" target="_blank">Instagram</Link></li>
                  <li><Link href="https://facebook.com" target="_blank">Facebook</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

{/* Desktop View: Flex with justify-between */}
<div className="hidden lg:flex lg:justify-between lg:gap-8">
  <div>
    <h3 className="text-lg font-semibold mb-4">About</h3>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li><Link href="/company">Company</Link></li>
      <li><Link href="/team">Team</Link></li>
      <li><Link href="/careers">Careers</Link></li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold mb-4">Support</h3>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li><Link href="/help">Help Center</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/faq">FAQ</Link></li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold mb-4">Legal</h3>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li><Link href="/privacy">Privacy</Link></li>
      <li><Link href="/terms">Terms</Link></li>
      <li><Link href="/cookies">Cookie Policy</Link></li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold mb-4">Social</h3>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li><Link href="https://twitter.com" target="_blank">Twitter</Link></li>
      <li><Link href="https://instagram.com" target="_blank">Instagram</Link></li>
      <li><Link href="https://facebook.com" target="_blank">Facebook</Link></li>
    </ul>
  </div>
</div>


        {/* Bottom copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 DigitalMarket. All rights reserved.
        </div>
      </div>
    </footer>
  );
}