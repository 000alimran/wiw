"use client";

import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  ["Whispers", "/whispers"],
  ["Money Tools", "/tools"],
  ["Bangladesh Money", "/bangladesh-money"],
  ["Manifesto", "/about"],
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-olive-950/90 text-white backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-6">
        <BrandLogo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Button key={href} asChild variant="ghost" className="text-white/70 hover:bg-white/5 hover:text-white">
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-limebrand text-olive-950 hover:bg-limebrand-soft">
            <a href="https://wealthinwhispers.substack.com/" target="_blank" rel="noreferrer">
              Join the letter
              <ArrowUpRight />
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-white/10 bg-olive-950 text-white">
            <SheetHeader>
              <SheetTitle className="text-left text-white">
                <BrandLogo />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-10 grid gap-2">
              {nav.map(([label, href]) => (
                <Button key={href} asChild variant="ghost" className="h-12 justify-start text-base text-white/80 hover:bg-white/5 hover:text-white">
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </nav>
            <Button asChild className="mt-6 w-full bg-limebrand text-olive-950 hover:bg-limebrand-soft">
              <a href="https://wealthinwhispers.substack.com/" target="_blank" rel="noreferrer">
                Join the letter
                <ArrowUpRight />
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
