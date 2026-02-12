import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ShieldCheck, 
  Zap, 
  Heart, 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowRight, 
  Calculator as CalcIcon, 
  CheckCircle2,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { IMAGES } from '@/assets/images';
import { 
  GIFT_CARDS, 
  CUSTOMER_REVIEWS, 
  STATS, 
  calculatePayout, 
  GiftCard 
} from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const springPresets = {
  gentle: { type: "spring" as const, stiffness: 300, damping: 35 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
};

const Home: React.FC = () => {
  // Calculator State
  const [selectedCardId, setSelectedCardId] = useState<string>(GIFT_CARDS[0].id);
  const [amount, setAmount] = useState<string>('100');

  const selectedCard = useMemo(() => 
    GIFT_CARDS.find(card => card.id === selectedCardId) || GIFT_CARDS[0], 
    [selectedCardId]
  );

  const payout = useMemo(() => {
    const numAmount = parseFloat(amount) || 0;
    return calculatePayout(numAmount, selectedCard.rate);
  }, [amount, selectedCard]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating WhatsApp Button - Mobile Priority */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform animate-pulse"
        >
          <SiWhatsapp className="w-8 h-8" />
        </a>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BG_1} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={springPresets.gentle}
              className="space-y-8"
            >
              <Badge variant="secondary" className="px-4 py-1 text-primary border-primary/20 bg-primary/10">
                🚀 Africa's Most Trusted Gift Card Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Sell Gift Card <br />
                <span className="text-primary">Easy & Fast</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                We provide the most competitive rates and instant payout, ensuring your profits grow seamlessly with Africa's most trusted trading platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#25D366]/90 rounded-full shadow-lg hover:shadow-[#25D366]/20 transition-all" 
                  asChild
                >
                  <a href="https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card" target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="mr-2 h-5 w-5" /> START TRADING
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2" asChild>
                  <a href="#calculator">Check Rates <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  <span className="text-primary">100,000+</span> satisfied customers
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={springPresets.gentle}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img src={IMAGES.MOBILE_APP_6} alt="Mobile App Interface" className="w-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 bg-card p-6 rounded-2xl shadow-xl border border-border z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Zap className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Latest Trade</p>
                    <p className="font-bold">+ ₦132,700</p>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Paid 3 minutes ago</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <p className="text-4xl font-bold text-primary font-mono">{stat.value}</p>
                <p className="font-semibold">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner - Mobile Optimized */}
      <section className="py-8 bg-[#25D366]/5 border-y border-[#25D366]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#25D366] mb-1">JOIN PRSTMIT TODAY</h3>
              <p className="text-sm md:text-base text-muted-foreground">Chat with Joyce • Get instant quotes • Start trading now</p>
            </div>
            <Button 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-[#25D366]/20 transition-all"
              asChild
            >
              <a href="https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-2 h-5 w-5" /> Chat with Joyce
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">PROFIT ESTIMATION</h2>
              <p className="text-muted-foreground">Select your gift card type and see how much Naira (₦) you'll receive instantly</p>
            </div>

            <Card className="border-none shadow-2xl bg-card overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-3 p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8">
                  <div className="space-y-4">
                    <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <CalcIcon className="h-4 w-4" /> Select Gift Card Type
                    </label>
                    <Select value={selectedCardId} onValueChange={setSelectedCardId}>
                      <SelectTrigger className="h-14 text-lg border-2">
                        <SelectValue placeholder="Choose your gift card" />
                      </SelectTrigger>
                      <SelectContent>
                        {GIFT_CARDS.map((card) => (
                          <SelectItem key={card.id} value={card.id}>
                            <div className="flex items-center gap-3">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: card.color }} 
                              />
                              {card.name} ({card.category})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> Face Value (USD)
                    </label>
                    <div className="relative">
                      <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="h-14 text-2xl font-mono pl-12 border-2"
                        placeholder="0.00"
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-mono text-muted-foreground">$</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Current Rate</p>
                      <p className="text-lg font-bold font-mono">1 USD = ₦{selectedCard.rate}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Service Fee</p>
                      <p className="text-lg font-bold text-green-600">FREE</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-primary p-6 md:p-8 lg:p-12 text-primary-foreground flex flex-col justify-center items-center text-center space-y-4 md:space-y-6">
                  <div>
                    <p className="text-primary-foreground/80 uppercase tracking-widest text-sm font-bold mb-2">You Will Receive</p>
                    <p className="text-3xl md:text-4xl lg:text-6xl font-black font-mono tracking-tighter">
                      ₦{payout.toLocaleString()}
                    </p>
                  </div>
                  <Separator className="bg-primary-foreground/20" />
                  <div className="space-y-4 w-full">
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-80">Processing Time</span>
                      <span className="font-bold">~3-5 minutes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-80">Payment Status</span>
                      <span className="flex items-center gap-1 font-bold">
                        <CheckCircle2 className="h-4 w-4" /> Instant Payout
                      </span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-xl shadow-xl active:scale-95 transition-transform"
                    asChild
                  >
                    <a href={`https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20${selectedCard.name}%20worth%20$${amount}`} target="_blank" rel="noopener noreferrer">
                      <SiWhatsapp className="mr-2 h-4 w-4 md:h-5 md:w-5" /> TRADE THIS CARD
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Customer Reviews</h2>
              <p className="text-muted-foreground">Ready for higher profits? See what our customers say about trading with Joyce</p>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <span className="font-bold text-2xl">4.9/5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="text-muted-foreground text-sm">Based on 2,500+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CUSTOMER_REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-lg italic text-foreground/90 leading-relaxed">
                      "{review.content}"
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Testimonial Section */}
      <section className="py-16 bg-[#25D366]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 rounded-full">
                <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
                <span className="text-sm font-semibold text-[#25D366]">WhatsApp Trading</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose WhatsApp Trading?</h2>
              <p className="text-muted-foreground text-lg">Experience the fastest, most convenient way to trade gift cards in Africa</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-[#25D366]/10">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Instant Response</h3>
                <p className="text-sm text-muted-foreground">Joyce responds within 30 seconds, 24/7</p>
              </div>
              
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-[#25D366]/10">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <ShieldCheck className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Secure Trading</h3>
                <p className="text-sm text-muted-foreground">End-to-end encrypted conversations</p>
              </div>
              
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-[#25D366]/10">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Personal Touch</h3>
                <p className="text-sm text-muted-foreground">Direct communication with Joyce</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-[#25D366]/20 transition-all"
              asChild
            >
              <a href="https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-3 h-6 w-6" /> Start Trading on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Security/Trust Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-foreground text-background rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <img src={IMAGES.SECURITY_1} alt="Security" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">Professional Gift Card Exchange</h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Bank-Level Security</h3>
                      <p className="text-background/60">All transactions are encrypted end-to-end, ensuring your information and funds are completely secure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Best Gift Card Rates</h3>
                      <p className="text-background/60">We guarantee the most competitive rates in the market with no hidden fees. What you see is what you get.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Joyce - Personal Support</h3>
                      <p className="text-background/60">Personalized service experience. Any questions get genuine responses within minutes via WhatsApp.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <p className="text-3xl font-bold mb-2">99.9%</p>
                    <p className="text-sm opacity-60 uppercase">Success Rate</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-8">
                    <p className="text-3xl font-bold mb-2">300s</p>
                    <p className="text-sm opacity-60 uppercase">Avg Payout Time</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <p className="text-3xl font-bold mb-2">24/7</p>
                    <p className="text-sm opacity-60 uppercase">Online Support</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-8">
                    <p className="text-3xl font-bold mb-2">Top 1</p>
                    <p className="text-sm opacity-60 uppercase">Market Rate Ranking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img src={IMAGES.CUSTOMER_SERVICE_2} alt="Joyce Customer Service" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Badge className="mb-2 bg-green-500 hover:bg-green-600">● JOYCE IS ONLINE</Badge>
                  <h3 className="text-2xl font-bold text-white">Joyce - Your Trading Expert</h3>
                  <p className="text-white/80">"I'm here to ensure every trade is smooth, fast, and profitable for you."</p>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Ready for higher profits?</h2>
                <p className="text-lg md:text-xl text-muted-foreground">Click the button below to chat with Joyce on WhatsApp and start your first lightning-fast trade.</p>
              </div>

              <div className="space-y-6">
                <a 
                  href="https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <SiWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-[#25D366]">Contact Joyce via WhatsApp</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Fastest response • Available 24/7</p>
                  </div>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#25D366] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-muted/50 border border-border flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold">Phone Support</p>
                      <p className="font-semibold">+234 800 123 4567</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/50 border border-border flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold">Business Email</p>
                      <p className="font-semibold">support@prstmit.site</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" /> Average response time: 32 seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final WhatsApp CTA */}
      <section className="py-16 bg-gradient-to-r from-[#25D366]/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Get the Best Rates?</h2>
            <p className="text-muted-foreground">Join thousands of satisfied customers who trust Joyce for their gift card trading</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-4 rounded-full text-lg shadow-lg"
                asChild
              >
                <a href="https://wa.me/2348123456789?text=Hi%20Joyce,%20I%20want%20to%20trade%20my%20gift%20card" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2 h-5 w-5" /> Chat with Joyce
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg" asChild>
                <a href="#calculator">Check Live Rates</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer Text */}
      <footer className="py-12 border-t text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>© 2026 PRSTMIT EXCHANGE. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;