import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Calendar as CalendarIcon,
  Mail,
  Handshake,
  ShieldCheck,
  Sparkles,
  Building2,
  LineChart,
  Layers,
  Megaphone,
  Users,
  Clock,
  Globe2,
  FileText,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Travel BackOffice Partners — OTA, PMS & Channel Manager Experts" },
      {
        name: "description",
        content:
          "We manage, create and optimize your OTA listings, Property Management Software and Channel Manager. Human-first back-office team for hotels, tour operators and rentals. Per-service pricing, invoice-based, book a short discovery call.",
      },
    ],
  }),
});

const CONTACT_EMAIL = "partnerships@travelbackoffice.com";

/* ---------------- Services ---------------- */

type Service = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  summary: string;
  bullets: string[];
  price: string;
  priceNote: string;
};

const SERVICES: Service[] = [
  {
    id: "ota",
    icon: Globe2,
    title: "OTA Platform Management",
    tag: "Viator · GetYourGuide · Booking · Airbnb · Expedia · TripAdvisor",
    summary:
      "We create, manage and optimize your listings across every OTA — content, pricing, availability, reviews and customer replies handled by a real human team.",
    bullets: [
      "New listing creation & full account setup",
      "Content, photos, pricing & availability optimization",
      "Customer messages, review replies & dispute handling",
      "Partner & account manager relationship handling",
      "Weekly performance report",
    ],
    price: "from $349 / month",
    priceNote: "per platform · one-time setup $199",
  },
  {
    id: "pms",
    icon: Building2,
    title: "Property Management Software Management",
    tag: "Bókun · Cloudbeds · Hostaway · Guesty · Lodgify · Little Hotelier",
    summary:
      "Full operation of your PMS — from initial setup to daily reservations, rate plans, guest flows and integrations that keep your calendar in sync everywhere.",
    bullets: [
      "PMS setup, migration & configuration",
      "Reservations, rate plans & inventory management",
      "Guest communication & pre-arrival flows",
      "Third-party integrations (payments, locks, CRM)",
      "Client & partner account management",
    ],
    price: "from $449 / month",
    priceNote: "per property · setup from $299",
  },
  {
    id: "audit",
    icon: Layers,
    title: "Channel Manager Audit",
    tag: "SiteMinder · RateGain · STAAH · MyAllocator · Rentals United",
    summary:
      "A deep, human audit of your channel manager mappings, rate parity, restrictions and connections — we find the leaks that quietly cost you bookings.",
    bullets: [
      "Full channel mapping & rate parity audit",
      "Overbooking & sync error diagnostics",
      "Restrictions, derived rates & LOS review",
      "Prioritized fix list with owner & ETA",
      "Optional 30-day implementation support",
    ],
    price: "$599 one-time",
    priceNote: "delivered in 5 business days",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Specialist Travel Marketing",
    tag: "For tour operators, boutique hotels & vacation rentals",
    summary:
      "Marketing built specifically for travel businesses — SEO, meta ads, email flows and OTA ranking work that speaks the language of guests and operators.",
    bullets: [
      "Travel-focused SEO & content",
      "Google & Meta ads for tours and stays",
      "Email & guest re-engagement flows",
      "OTA ranking & conversion optimization",
      "Monthly strategy call + reporting",
    ],
    price: "from $699 / month",
    priceNote: "scoped per channel",
  },
];

/* ---------------- Why us ---------------- */

const WHY_US = [
  {
    icon: Users,
    title: "Real humans, not bots",
    body: "Every reply, every mapping, every review response is written by a trained travel operations specialist — not an AI script.",
  },
  {
    icon: Clock,
    title: "Under-2-hour response SLA",
    body: "During coverage hours we respond to guests, partners and OTAs in under 2 hours — the #1 driver of ranking on Viator, GYG and Booking.",
  },
  {
    icon: ShieldCheck,
    title: "Margin-safe operations",
    body: "We protect your commissions, rate parity and refund exposure. Every action is logged and auditable.",
  },
  {
    icon: LineChart,
    title: "Measured, not promised",
    body: "You get a weekly scorecard: response time, conversion, review score, overbooking risk and revenue impact.",
  },
  {
    icon: Handshake,
    title: "Partnership model available",
    body: "For growing brands we offer revenue-share and long-term partnership tiers instead of pure retainers.",
  },
  {
    icon: FileText,
    title: "Simple invoice billing",
    body: "No card on file, no gateways. After a short discovery call we send a clean invoice — pay by bank transfer.",
  },
];

/* ---------------- Component ---------------- */

function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Partnership />
      <Booking />
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--teal-glow)] pulse-dot" />
          Travel BackOffice Partners
        </a>
        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#why" className="hover:text-foreground">Why us</a>
          <a href="#partnership" className="hover:text-foreground">Partnership</a>
          <a href="#book" className="hover:text-foreground">Book a call</a>
        </nav>
        <a href="#book" className="hidden md:inline-flex btn-teal rounded-md px-4 py-2 text-sm font-semibold">
          Book a call
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--teal-glow)]" />
            Outsourced travel operations · run by humans
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
            Your external{" "}
            <span className="bg-gradient-to-r from-[var(--teal-glow)] to-[var(--emerald)] bg-clip-text text-transparent">
              OTA, PMS &amp; Channel
            </span>{" "}
            operations team.
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            We manage, create and optimize the platforms that run your travel business — so you can focus on guests, not tickets. Clear per-service pricing. Invoice billing. Real humans on the other side.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#book" className="btn-teal rounded-md px-5 py-3 text-sm font-semibold">
              Book a short discovery call
            </a>
            <a href="#services" className="btn-outline-teal rounded-md px-5 py-3 text-sm font-semibold">
              See services & pricing
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            No card required · Invoice after the call · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Services"
        title="What we do for you"
        subtitle="Pick a single service or bundle several. Every engagement starts with a short discovery call so we can scope the work honestly."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} s={s} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <Card className="glass border-white/10 transition hover:border-[var(--teal-glow)]/40">
      <CardHeader className="gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--teal)]/15 text-[var(--teal-glow)]">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="font-display text-xl">{s.title}</CardTitle>
            <CardDescription className="mt-0.5 text-xs">{s.tag}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{s.summary}</p>
        <ul className="space-y-2 text-sm">
          {s.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--emerald)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-end justify-between border-t border-white/10 pt-4">
          <div>
            <div className="font-display text-2xl font-bold text-[var(--teal-glow)]">{s.price}</div>
            <div className="text-xs text-muted-foreground">{s.priceNote}</div>
          </div>
          <a
            href={`#book`}
            className="btn-outline-teal inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs font-semibold"
          >
            Request scope <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------------- Why us ---------------- */

function WhyUs() {
  return (
    <section id="why" className="border-y border-white/5 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Why us"
          title="The logic behind hiring a back-office partner"
          subtitle="Every hour your team spends fighting OTA extranets is an hour not spent on guests. Here is why operators pick us."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {WHY_US.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="glass rounded-xl p-5">
                <Icon className="h-5 w-5 text-[var(--teal-glow)]" />
                <h3 className="mt-3 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partnership ---------------- */

function Partnership() {
  return (
    <section id="partnership" className="mx-auto max-w-6xl px-5 py-20">
      <div className="glass grid gap-8 rounded-2xl p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <Handshake className="h-3.5 w-3.5 text-[var(--teal-glow)]" />
            Partnership program
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Grow with us — not just buy from us.
          </h2>
          <p className="mt-3 text-muted-foreground">
            For agencies, tech vendors and travel brands we offer a long-term partnership track: revenue share, white-label back-office, referral fees and joint case studies. Bring us one client or a portfolio — we scale to fit.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--emerald)]" /> White-label OTA &amp; PMS operations for agencies</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--emerald)]" /> Referral fee up to 15% recurring</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--emerald)]" /> Joint go-to-market for PMS and tech vendors</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <a href="#book" className="btn-teal rounded-md px-5 py-3 text-center text-sm font-semibold">
            Talk about partnership
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Partnership%20enquiry`}
            className="btn-outline-teal rounded-md px-5 py-3 text-center text-sm font-semibold"
          >
            Email partnerships team
          </a>
          <div className="mt-2 text-xs text-muted-foreground text-center">
            {CONTACT_EMAIL}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Booking ---------------- */

function Booking() {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("10:00");
  const [service, setService] = useState<string>(SERVICES[0].title);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  const disabled = !date || !name || !email;

  const mailtoHref = useMemo(() => {
    const subject = `Discovery call request — ${service}`;
    const body = [
      `Hi Travel BackOffice Partners team,`,
      ``,
      `I'd like to book a short discovery call.`,
      ``,
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      `Service of interest: ${service}`,
      `Preferred date: ${date ? date.toDateString() : "-"}`,
      `Preferred time: ${time} (my local time)`,
      ``,
      `Notes:`,
      notes || "-",
    ].join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, company, email, service, date, time, notes]);

  return (
    <section id="book" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Book a call"
        title="Pick a time — we'll take it from there"
        subtitle="A 20-minute discovery call. If we're a fit, we send a scoped proposal and a clean invoice. No credit card, no gateway. Bank transfer only."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-lg">
              <CalendarIcon className="h-5 w-5 text-[var(--teal-glow)]" />
              Choose a date &amp; time
            </CardTitle>
            <CardDescription>Times are shown in your local timezone.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-black/20 p-2">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return d < today || d.getDay() === 0;
                }}
                className="mx-auto"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Time slot</label>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={`rounded-md border px-2 py-2 text-xs font-medium transition ${
                      time === t
                        ? "border-[var(--teal-glow)] bg-[var(--teal)]/20 text-foreground"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-lg">
              <Mail className="h-5 w-5 text-[var(--teal-glow)]" />
              Your details
            </CardTitle>
            <CardDescription>We reply within one business day.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground">Service of interest</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title} className="bg-[#0b1329]">
                    {s.title}
                  </option>
                ))}
                <option value="Partnership" className="bg-[#0b1329]">Partnership enquiry</option>
                <option value="Other" className="bg-[#0b1329]">Other / not sure yet</option>
              </select>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs text-muted-foreground">Full name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Company</label>
                <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company" />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Work email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Notes (optional)</label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What platforms do you use? What's the main pain right now?"
                rows={4}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild disabled={disabled} className="btn-teal">
                <a href={disabled ? "#book" : mailtoHref}>
                  Send booking request <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Submitting opens your email client with a pre-filled request. Prefer plain email? Just write to us directly.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-bold">Travel BackOffice Partners</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Outsourced OTA, PMS and channel operations for tour operators, boutique hotels and vacation rentals.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="font-semibold text-foreground">Contact</div>
          <div className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4" /> {CONTACT_EMAIL}</div>
          <div className="mt-1 flex items-center gap-2"><Phone className="h-4 w-4" /> Reply within 1 business day</div>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="font-semibold text-foreground">Billing</div>
          <p className="mt-2">Invoice-based. Bank transfer. No card gateway. Proposals sent after a short discovery call.</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Travel BackOffice Partners. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------------- Utils ---------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-widest text-[var(--teal-glow)]">
        {eyebrow}
      </div>
      <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p>}
    </div>
  );
}
