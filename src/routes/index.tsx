import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, Menu as MenuIcon, X, Star, MapPin, Clock, Flame, Truck, Sparkles, ChefHat,
  Facebook, Instagram, ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

import logoAsset from "@/assets/logo.png.asset.json";
import heroAsset from "@/assets/hero.jpg.asset.json";
import wrapAsset from "@/assets/wrap.jpg.asset.json";
import pitaAsset from "@/assets/pita.jpg.asset.json";
import plateAsset from "@/assets/plate.jpg.asset.json";
import friesAsset from "@/assets/fries.jpg.asset.json";
import burgerAsset from "@/assets/burger.jpg.asset.json";
import cokeAsset from "@/assets/coke.png.asset.json";
import spriteAsset from "@/assets/sprite.png.asset.json";
import fantaAsset from "@/assets/fanta.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flame Kebab — Švieži kebabai kiekvieną dieną" },
      { name: "description", content: "Flame Kebab restoranas — kokybiški ingredientai, didelės porcijos, greitas aptarnavimas. Užsisakykite per Bolt Food, Wolt arba paskambinkite." },
      { property: "og:title", content: "Flame Kebab — Švieži kebabai kiekvieną dieną" },
      { property: "og:description", content: "Kokybiški ingredientai, didelės porcijos ir greitas aptarnavimas." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PHONE = "+37061234567";
const PHONE_DISPLAY = "+370 612 34567";
const ADDRESS = "Gedimino pr. 15, Vilnius";
const ADDRESS_DISPLAY = "Gedimino pr. 15, Vilnius";

type Product = {
  id: string;
  name: string;
  short: string;
  desc: string;
  ingredients: string[];
  price: string;
  img: string;
};

const products: Product[] = [
  {
    id: "wrap",
    name: "Vištienos kebabas lavaše",
    short: "Sultinga vištiena, daržovės ir mūsų firminis padažas.",
    desc: "Plonas lavašas, kepta vištiena, šviežios daržovės ir naminis česnakinis padažas — klasikinis pasirinkimas kiekvienai dienai.",
    ingredients: ["Lavašas", "Marinuota vištiena", "Pomidorai", "Agurkai", "Salotos", "Svogūnai", "Česnakinis padažas"],
    price: "6,90 €",
    img: wrapAsset.url,
  },
  {
    id: "pita",
    name: "Vištienos kebabas pitoje",
    short: "Minkšta pita su gausiu vištienos įdaru.",
    desc: "Šviežiai kepta pita, sultinga vištiena, traškios daržovės ir tirštas jogurtinis padažas.",
    ingredients: ["Pita", "Vištiena", "Pomidorai", "Raudoni svogūnai", "Salotos", "Jogurtinis padažas"],
    price: "7,40 €",
    img: pitaAsset.url,
  },
  {
    id: "plate",
    name: "Kebabas lėkštėje",
    short: "Didelė porcija su bulvytėmis ir padažais.",
    desc: "Mėsos gausa, traškios gruzdintos bulvytės, šviežios daržovės ir du naminiai padažai. Sotus pasirinkimas tikriems mėgėjams.",
    ingredients: ["Kebabo mėsa", "Gruzdintos bulvytės", "Salotos", "Pomidorai", "Česnakinis padažas", "Aštrus padažas"],
    price: "8,90 €",
    img: plateAsset.url,
  },
  {
    id: "burger",
    name: "Klasikinis burgeris",
    short: "Sultingas jautienos kotletas brioche bandelėje.",
    desc: "100% jautienos kotletas, lydytas sūris, traškios salotos, pomidorai ir firminis burgerio padažas.",
    ingredients: ["Brioche bandelė", "Jautienos kotletas", "Cheddar sūris", "Salotos", "Pomidorai", "Burgerio padažas"],
    price: "7,90 €",
    img: burgerAsset.url,
  },
  {
    id: "fries",
    name: "Gruzdintos bulvytės",
    short: "Auksinės, traškios, su petražolėmis ir druska.",
    desc: "Šviežiai gruzdintos bulvytės su jūros druska ir žalumynais. Idealus priedas prie bet kurio patiekalo.",
    ingredients: ["Bulvės", "Saulėgrąžų aliejus", "Jūros druska", "Petražolės"],
    price: "3,50 €",
    img: friesAsset.url,
  },
];

const drinks = [
  { name: "Coca-Cola", price: "2,20 €", img: cokeAsset.url },
  { name: "Sprite", price: "2,20 €", img: spriteAsset.url },
  { name: "Fanta", price: "2,20 €", img: fantaAsset.url },
];

const nav = [
  { href: "#pradzia", label: "Pradžia" },
  { href: "#populiariausi", label: "Populiariausi" },
  { href: "#meniu", label: "Meniu" },
  { href: "#kodel-mes", label: "Kodėl mes" },
  { href: "#atsiliepimai", label: "Atsiliepimai" },
  { href: "#kontaktai", label: "Kontaktai" },
];

function Home() {
  const [open, setOpen] = useState<Product | null>(null);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80 text-ink-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <a href="#pradzia" className="flex items-center gap-2.5 min-w-0">
            <span className="grid h-20 w-20 lg:h-24 lg:w-24 shrink-0 place-items-center rounded-xl bg-white/10">
              <img src={logoAsset.url} alt="Flame Kebab logo" className="h-16 w-16 lg:h-20 lg:w-20 invert" />
            </span>
            <span className="truncate text-lg font-extrabold tracking-tight">Flame Kebab</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-white/80 hover:text-white transition-colors">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE}`} className="hidden sm:inline-flex items-center gap-2 rounded-full btn-primary px-5 py-2.5 text-sm font-semibold">
              <Phone className="h-4 w-4" /> Skambinti
            </a>
            <button onClick={() => setMobileNav(v => !v)} className="lg:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/10" aria-label="Meniu">
              {mobileNav ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileNav && (
          <div className="lg:hidden border-t border-white/10 bg-ink px-4 py-4">
            <nav className="flex flex-col gap-1">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={() => setMobileNav(false)} className="rounded-lg px-3 py-3 text-base text-white/90 hover:bg-white/10">{n.label}</a>
              ))}
              <a href={`tel:${PHONE}`} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full btn-primary px-5 py-3 text-sm font-semibold">
                <Phone className="h-4 w-4" /> Skambinti
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="pradzia" className="relative isolate min-h-[92vh] flex items-center pt-24 lg:pt-28">
        <img src={heroAsset.url} alt="Šviežias kebabas su padažais" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-2xl fade-up pl-6 sm:pl-7 lg:pl-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              🔥 Šviežiai ruošiama kiekvieną dieną
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              Švieži kebabai <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">kiekvieną dieną.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/85">
              Kokybiški ingredientai, didelės porcijos ir greitas aptarnavimas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#meniu" className="inline-flex items-center gap-2 rounded-full btn-primary px-6 py-3.5 text-sm font-semibold">
                Peržiūrėti meniu <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.02] hover:bg-white/90">
                <Phone className="h-4 w-4" /> Skambinti
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <span className="font-semibold">4.8</span>
                <span className="text-white/70">įvertinimas</span>
              </div>
              <span className="hidden sm:inline h-4 w-px bg-white/30" />
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Bolt Food</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Wolt</span>
            </div>
          </div>
        </div>
      </section>

      {/* POPULIARIAUSI */}
      <Section id="populiariausi" eyebrow="Mėgstamiausi" title="Populiariausi patiekalai" subtitle="Mūsų klientų dažniausiai renkamasi.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <button key={p.id} onClick={() => setOpen(p)} className="card-lift group text-left overflow-hidden rounded-3xl bg-card border border-border shadow-[var(--shadow-card)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-ink shadow">{p.price}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Peržiūrėti <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* MENIU */}
      <Section id="meniu" eyebrow="Meniu" title="Visas meniu" subtitle="Pasirinkite mėgstamą kategoriją." muted>
        <div className="space-y-12">
          <MenuCategory title="Kebabai" icon="🥙" items={products.slice(0,3)} />
          <div>
            <CategoryHeader title="Burgeriai" icon="🍔" />
            <div className="grid gap-4">
              {[products[3]].map(p => (
                <div key={p.id} className="card-lift flex gap-4 rounded-2xl bg-card border border-border p-4 shadow-[var(--shadow-card)]">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-32 w-32 shrink-0 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-bold">{p.name}</h4>
                      <span className="font-bold text-primary whitespace-nowrap">{p.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <MenuCategory title="Užkandžiai" icon="🍟" items={[products[4]]} />
          <div>
            <CategoryHeader title="Gėrimai" icon="🥤" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {drinks.map(d => (
                <div key={d.name} className="card-lift flex items-center gap-3 rounded-2xl bg-card border border-border p-3 shadow-[var(--shadow-card)]">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-muted overflow-hidden">
                    <img src={d.img} alt={d.name} loading="lazy" className="h-10 w-10 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold truncate">{d.name}</h4>
                    <p className="text-xs text-muted-foreground">330 ml</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{d.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* UŽSAKYKITE INTERNETU */}
      <Section id="uzsakyti" eyebrow="Pristatymas" title="Užsakykite internetu" subtitle="Pristatome į namus arba paimkite patys.">
        <div className="grid gap-5 sm:grid-cols-3">
          <OrderCard label="Bolt Food" sub="Greitas pristatymas" color="from-[#34D186] to-[#1FAE6A]" icon={<Truck className="h-6 w-6" />} href="https://food.bolt.eu" />
          <OrderCard label="Wolt" sub="Pristatymas į namus" color="from-[#00C2E8] to-[#0098D4]" icon={<Truck className="h-6 w-6" />} href="https://wolt.com" />
          <OrderCard label="Skambinti" sub={PHONE_DISPLAY} color="from-primary to-accent" icon={<Phone className="h-6 w-6" />} href={`tel:${PHONE}`} />
        </div>
      </Section>

      {/* KODĖL MES */}
      <Section id="kodel-mes" eyebrow="Mūsų pranašumai" title="Kodėl rinktis mus" muted>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <ChefHat className="h-6 w-6" />, t: "Šviežiai ruošiama", d: "Kiekvieną dieną ruošiame šviežiai iš kokybiškų ingredientų." },
            { icon: <Flame className="h-6 w-6" />, t: "Didelės porcijos", d: "Tikrai sotūs patiekalai už teisingą kainą." },
            { icon: <Sparkles className="h-6 w-6" />, t: "Greitas aptarnavimas", d: "Vidutiniškai patiekalas paruošiamas per 7 minutes." },
            { icon: <MapPin className="h-6 w-6" />, t: "Patogi vieta", d: "Lengvai pasiekiama vieta jūsų mieste." },
          ].map((f, i) => (
            <div key={i} className="card-lift rounded-3xl bg-card border border-border p-6 shadow-[var(--shadow-card)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white">{f.icon}</div>
              <h3 className="mt-5 text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ATSILIEPIMAI */}
      <Section id="atsiliepimai" eyebrow="Atsiliepimai" title="Ką sako mūsų klientai">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="flex">
            {[0,1,2,3,4].map(i => <Star key={i} className="h-6 w-6 fill-primary text-primary" />)}
          </div>
          <p className="mt-3 text-4xl font-black">4.8 / 5</p>
          <p className="text-sm text-muted-foreground">250+ laimingų klientų</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { n: "Tomas K.", t: "Geriausias kebabas Vilniuje! Mėsa sultinga, padažai naminiai, porcijos didelės. Tikrai grįšiu." },
            { n: "Monika P.", t: "Labai greitas aptarnavimas ir nuostabus skonis. Vištienos kebabas pitoje — mano favoritas." },
            { n: "Karolis R.", t: "Kokybė už savo pinigus pati geriausia. Visada šviežia ir gardu. Rekomenduoju!" },
          ].map((r, i) => (
            <div key={i} className="card-lift rounded-3xl bg-card border border-border p-6 shadow-[var(--shadow-card)]">
              <div className="flex">
                {[0,1,2,3,4].map(j => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{r.t}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">{r.n[0]}</div>
                <div>
                  <p className="text-sm font-semibold">{r.n}</p>
                  <p className="text-xs text-muted-foreground">Google atsiliepimas</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* DARBO LAIKAS */}
      <Section id="darbo-laikas" title="Darbo laikas" muted className="py-9 sm:py-11">
        <div className="max-w-3xl mx-auto">
          <div className="card-lift rounded-3xl bg-card border border-border p-6 sm:p-7 text-center shadow-[var(--shadow-card)]">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <p className="mt-4 text-lg text-muted-foreground">Pirmadienis – Sekmadienis</p>
            <p className="text-3xl sm:text-4xl font-extrabold mt-1">10:00 – 22:00</p>
            <a href={`tel:${PHONE}`} className="mt-5 inline-flex items-center gap-2 rounded-full btn-primary px-7 py-4 text-sm font-bold transition hover:scale-[1.03]">
              <Phone className="h-4 w-4" /> Skambinti
            </a>
          </div>
        </div>
      </Section>

      {/* KONTAKTAI */}
      <Section id="kontaktai" eyebrow="Kontaktai" title="Susisiekite su mumis" muted>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <InfoRow icon={<MapPin className="h-5 w-5" />} label="Adresas" value={ADDRESS_DISPLAY} />
            <InfoRow icon={<Phone className="h-5 w-5" />} label="Telefonas" value={PHONE_DISPLAY} />
            <InfoRow icon={<Clock className="h-5 w-5" />} label="Darbo laikas" value="I–VII · 10:00 – 22:00" />
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full btn-primary px-6 py-3 text-sm font-semibold">
                <Phone className="h-4 w-4" /> Skambinti
              </a>
              <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}`} className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]">
                <MapPin className="h-4 w-4" /> Google Maps
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] min-h-[320px]">
            <iframe
              title="Flame Kebab žemėlapis"
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              className="h-full w-full min-h-[320px]"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-20 w-20 lg:h-24 lg:w-24 shrink-0 place-items-center rounded-xl bg-white/10">
                <img src={logoAsset.url} alt="" className="h-16 w-16 lg:h-20 lg:w-20 invert" />
              </span>
              <span className="text-lg font-extrabold">Flame Kebab</span>
            </div>
            <p className="mt-3 text-sm text-white/70">Švieži kebabai kiekvieną dieną.</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/60">Adresas</h4>
            <p className="mt-3 text-sm text-white/85">{ADDRESS_DISPLAY}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/60">Kontaktai</h4>
            <a href={`tel:${PHONE}`} className="mt-3 block text-sm text-white/85 hover:text-white">{PHONE_DISPLAY}</a>
            <p className="mt-2 text-sm text-white/85">I–VII · 10:00 – 22:00</p>
            <div className="mt-4 flex flex-col gap-1">
              <a href="#" className="text-xs text-white/60 hover:text-white">Privatumo politika</a>
              <a href="#" className="text-xs text-white/60 hover:text-white">Slapukų politika</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/60">Sek mus</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-white/60">© 2025 Flame Kebab. Visos teisės saugomos.</p>
        </div>
      </footer>

      {/* FLOATING CALL */}
      <a href={`tel:${PHONE}`} aria-label="Skambinti" className="sm:hidden fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full btn-primary">
        <Phone className="h-6 w-6" />
      </a>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200" onClick={() => setOpen(null)}>
          <div onClick={e => e.stopPropagation()} className="relative w-full sm:max-w-2xl bg-card rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto">
            <button onClick={() => setOpen(null)} className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-ink shadow hover:scale-105 transition"><X className="h-5 w-5" /></button>
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img src={open.img} alt={open.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl font-black">{open.name}</h3>
                <span className="shrink-0 rounded-full bg-primary/10 px-4 py-1.5 text-lg font-bold text-primary">{open.price}</span>
              </div>
              <p className="mt-3 text-muted-foreground">{open.desc}</p>
              <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Sudėtis</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {open.ingredients.map(i => (
                  <span key={i} className="rounded-full bg-muted px-3 py-1.5 text-sm">{i}</span>
                ))}
              </div>
              <a href={`tel:${PHONE}`} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl btn-primary px-6 py-4 text-base font-bold">
                <Phone className="h-5 w-5" /> Skambinti
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children, muted, className }: { id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode; muted?: boolean; className?: string }) {
  return (
    <section id={id} className={cn(muted ? "bg-muted/40 py-20 sm:py-24" : "py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          {eyebrow && <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>}
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function CategoryHeader({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="text-2xl" aria-hidden>{icon}</span>
      <h3 className="text-2xl font-extrabold">{title}</h3>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}

function MenuCategory({ title, icon, items }: { title: string; icon: string; items: Product[] }) {
  return (
    <div>
      <CategoryHeader title={title} icon={icon} />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(p => (
          <div key={p.id} className="card-lift flex gap-4 rounded-2xl bg-card border border-border p-4 shadow-[var(--shadow-card)]">
            <img src={p.img} alt={p.name} loading="lazy" className="h-24 w-24 shrink-0 rounded-xl object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-bold">{p.name}</h4>
                <span className="font-bold text-primary whitespace-nowrap">{p.price}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderCard({ label, sub, icon, href, color }: { label: string; sub: string; icon: React.ReactNode; href: string; color: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`card-lift group relative overflow-hidden rounded-3xl bg-gradient-to-br ${color} p-8 text-white shadow-[var(--shadow-card)]`}>
      <div className="flex items-center justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur">{icon}</div>
        <ArrowRight className="h-6 w-6 opacity-70 transition-transform group-hover:translate-x-1" />
      </div>
      <h3 className="mt-8 text-2xl font-black">{label}</h3>
      <p className="mt-1 text-sm text-white/85">{sub}</p>
    </a>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 font-semibold">{value}</p>
      </div>
    </div>
  );
}
