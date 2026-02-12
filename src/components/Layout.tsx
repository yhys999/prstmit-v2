import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck, ChevronRight, ArrowRight } from "lucide-react";
import { SiWhatsapp, SiTelegram, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ROUTE_PATHS } from "@/lib/index";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const navLinks = [
    { name: "Live Rates", href: "#calculator" },
    { name: "Why Choose Us", href: "#stats" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact Joyce", href: "#contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            to={ROUTE_PATHS.HOME}
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-all">
              <ShieldCheck className="text-primary-foreground w-6 h-6" />
            </div>
<span className="text-2xl font-bold tracking-tighter text-foreground">
              PRSTMIT
            </span>
            <div className="hidden sm:block text-xs text-primary font-semibold">
              AFRICA'S #1
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
<Button 
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg shadow-[#25D366]/20 rounded-full px-6 transition-all hover:scale-[1.05] active:scale-[0.97]"
              asChild
            >
              <a href="https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-2 w-4 h-4" /> Chat Joyce
              </a>
            </Button>
          </nav>

          <button
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-background md:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold text-foreground border-b border-border/50 pb-5 flex justify-between items-center hover:text-primary transition-colors"
                >
                  {link.name}
                  <ChevronRight className="text-muted-foreground" />
                </a>
              ))}
              <div className="mt-8 space-y-4">
<Button 
                  className="w-full py-7 text-lg bg-[#25D366] hover:bg-[#25D366]/90 rounded-2xl shadow-xl shadow-[#25D366]/20"
                  asChild
                >
                  <a href="https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card" target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="mr-2 w-5 h-5" /> Chat with Joyce Now
                  </a>
                </Button>
<p className="text-center text-muted-foreground text-sm">
                  24/7 Online • Instant Response
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">{children}</main>

      <footer className="bg-secondary/30 border-t border-border pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary w-7 h-7" />
                <span className="text-2xl font-bold tracking-tight">PRSTMIT</span>
              </div>
<p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Africa's leading gift card trading platform. We provide the most competitive rates and instant payout, ensuring your profits grow seamlessly.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-11 h-11 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border transition-all hover:scale-110">
                  <SiWhatsapp size={22} />
                </a>
                <a href="#" className="w-11 h-11 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border transition-all hover:scale-110">
                  <SiTelegram size={22} />
                </a>
                <a href="#" className="w-11 h-11 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border transition-all hover:scale-110">
                  <SiX size={20} />
                </a>
              </div>
            </div>

            <div>
<h4 className="font-bold text-foreground mb-6">Our Services</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Live Rate Calculator</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Gift Card Trading</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Bulk Trading</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Partner Program</a></li>
              </ul>
            </div>

            <div>
<h4 className="font-bold text-foreground mb-6">Help Center</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Trading Guide</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Safe Trading Tips</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Contact Joyce</a></li>
              </ul>
            </div>

            <div>
<h4 className="font-bold text-foreground mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={14} /> AML Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p>© 2026 Prstmit. All Rights Reserved.</p>
              <div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Joyce is Online
                </span>
              </div>
            </div>
<div className="flex items-center gap-8">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-primary" />
                <span>Bank-Level Security</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span>Powered by Joyce</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
