import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Anchor, ArrowRight, BadgeCheck, Bot, Building2, CalendarClock, ChartNoAxesCombined,
  CheckCircle2, ChevronRight, CircleDollarSign, Clock, Compass, Database, Globe2, Headphones,
  LineChart, Lock, Mail, MapPin, Percent, ShieldCheck, Sparkles, Timer, Users2, X, Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:title", content: "Travel BackOffice Partners — Outsourced Travel Operations" },
    ],
  }),
  component: Landing,
});

// ---------- Small UI helpers ----------
function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-6 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
      <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-teal" style={{ backgroundColor: "#14b8a6" }} />
      {children}
    </div>
  );
}

function Stat({ value, label, tone = "teal" }: { value: string; label: string; tone?: "teal" | "emerald" | "rose" }) {
  const c = tone === "emerald" ? "#10b981" : tone === "rose" ? "#f43f5e" : "#14b8a6";
  return (
    <div className="glass rounded-2xl p-5">
      <div className="font-display text-3xl font-bold md:text-4xl" style={{ color: c }}>{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

// ---------- Nav ----------
const NAV = [
  { href: "#why-human", label: "Why Human-First" },
  { href: "#gaps", label: "Lacunes & Gaps" },
  { href: "#record", label: "Performance Record" },
  { href: "#solutions", label: "One-Time Solutions" },
  { href: "#careers", label: "Dhaka Careers" },
  { href: "#insights", label: "Insights Hub" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur-xl" style={{ background: "rgba(11,19,41,0.72)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "linear-gradient(135deg,#0d9488,#10b981)", boxShadow: "0 0 24px rgba(20,184,166,0.5)" }}>
            <Compass className="h-5 w-5 text-[#04121a]" />
          </div>
          <div className="font-display text-sm font-bold tracking-[0.22em]">TRAVEL BACKOFFICE PARTNERS</div>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <a href="#calculator" className="btn-teal rounded-xl px-4 py-2 text-sm font-semibold">Build Setup Plan</a>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(13,148,136,0.4), transparent 70%)" }} />
      <div className="pointer-events-none absolute -right-40 top-60 h-[28rem] w-[28rem] rounded-full" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.25), transparent 70%)" }} />
      <Section className="!py-28 md:!py-36">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <Eyebrow>Outsourced Travel Operations & Yield Architecture</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] md:text-7xl">
              We become your <span style={{ background: "linear-gradient(120deg,#14b8a6,#10b981)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>external travel</span> operations department.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Managing bookings, live OTA distribution channels, detailed customer communications, and central Bókun technology infrastructures. We replace generic automated algorithms with experienced, live operators who protect your margins.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#calculator" className="btn-teal inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
                Build Modular Retainer Plan <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#why-human" className="btn-outline-teal inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
                Why Real Humans Outperform AI
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald" style={{ color: "#10b981" }} /> SLA-Driven Dispatch</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald" style={{ color: "#10b981" }} /> Bókun Certified Architects</span>
              <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-emerald" style={{ color: "#10b981" }} /> Channel Manager Audit</span>
            </div>
          </div>

          <div className="glass relative rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Live Volume Mapped</div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald" style={{ color: "#10b981" }}>
                <span className="pulse-dot inline-block h-2 w-2 rounded-full" style={{ background: "#10b981" }} /> SYNCED
              </span>
            </div>
            <div className="mt-3 font-display text-4xl font-bold md:text-5xl" style={{ background: "linear-gradient(120deg,#14b8a6,#10b981)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              $1,852,584.55
            </div>
            <div className="mt-1 text-sm text-muted-foreground">Gross Volume Mapped across managed accounts</div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat value="31,403" label="Res Synced" tone="teal" />
              <Stat value="83,368" label="Pax Served" tone="teal" />
              <Stat value="91.91%" label="Margin Guarded" tone="emerald" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>OTA Sync Health · Last 24h</span>
                <span className="text-emerald" style={{ color: "#10b981" }}>99.98%</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {["Viator", "GYG", "TripAdvisor", "Bókun"].map((c) => (
                  <div key={c} className="rounded-lg border border-white/5 bg-white/[.02] p-2 text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{c}</div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div className="h-full rounded-full" style={{ width: "96%", background: "linear-gradient(90deg,#0d9488,#10b981)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// ---------- Human vs AI ----------
function HumanVsAI() {
  const pitfalls = [
    { t: "OTA de-ranking from template replies", d: "Viator and GetYourGuide algorithms detect templated language patterns and demote listings." },
    { t: "Unmonitored channel connections", d: "AI cannot detect a stuck Bókun pixel or a silent Viator API failure until refunds are already issued." },
    { t: "Guests feel disconnected", d: "Every review has a soul — an itinerary question, a family concern. Generic 'we appreciate your feedback' burns trust." },
    { t: "Escalations arrive too late", d: "Bots pass a threshold, humans pass a story. Missing context costs bookings within the 15-minute window." },
  ];
  const advantages = [
    { t: "Live sync with front desk over WhatsApp", d: "Operators triangulate the exact guide, van, or dock — replies feel authored, not scripted." },
    { t: "Human eyes on every OTA dashboard, hourly", d: "Silent failures, capacity drift, and duplicated resources caught before revenue leaks." },
    { t: "Reply cadence that feeds the algorithm", d: "Under 15 min average response time is a ranking signal. We staff for it, 24/7." },
    { t: "Escalations owned by a named lead", d: "One human, one thread, one outcome — from refund logic to reputation recovery." },
  ];
  return (
    <Section id="why-human">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Human-First vs AI Auto-Response</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">Why rigid automation kills your travel listings</h2>
        <p className="mt-5 text-muted-foreground">
          Every traveler's review has a soul — a distinct story, a hesitation, a question about a specific pier at a specific hour. Generic AI templates make guests feel disconnected and get penalized by OTA algorithms. Real operators outperform bots where it matters most: ranking, refunds, and repeat bookings.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-8" style={{ borderColor: "rgba(244,63,94,0.25)" }}>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "rgba(244,63,94,0.12)", border: "1px solid rgba(244,63,94,0.3)" }}>
              <Bot className="h-5 w-5" style={{ color: "#f43f5e" }} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "#f43f5e" }}>AI Automation Pitfall</div>
              <div className="font-display text-xl font-semibold">The silent margin leak</div>
            </div>
          </div>
          <ul className="mt-6 space-y-4">
            {pitfalls.map((p) => (
              <li key={p.t} className="flex gap-3">
                <X className="mt-0.5 h-5 w-5 flex-none" style={{ color: "#f43f5e" }} />
                <div>
                  <div className="font-semibold">{p.t}</div>
                  <div className="text-sm text-muted-foreground">{p.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-3xl p-8" style={{ borderColor: "rgba(16,185,129,0.25)" }}>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}>
              <Users2 className="h-5 w-5" style={{ color: "#10b981" }} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "#10b981" }}>BackOffice Human Advantage</div>
              <div className="font-display text-xl font-semibold">Operators who protect your ranking</div>
            </div>
          </div>
          <ul className="mt-6 space-y-4">
            {advantages.map((p) => (
              <li key={p.t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" style={{ color: "#10b981" }} />
                <div>
                  <div className="font-semibold">{p.t}</div>
                  <div className="text-sm text-muted-foreground">{p.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

// ---------- Gaps chart ----------
function GapBar({ label, sub, percent, amount, tone }: { label: string; sub: string; percent: number; amount: string; tone: "rose" | "emerald" }) {
  const c = tone === "rose" ? "#f43f5e" : "#10b981";
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-display text-lg font-semibold">{label}</div>
          <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
        </div>
        <div className="font-display text-2xl font-bold" style={{ color: c }}>{amount}</div>
      </div>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${percent}%`, background: `linear-gradient(90deg, ${c}, ${c}aa)` }} />
      </div>
    </div>
  );
}

function Gaps() {
  return (
    <Section id="gaps">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Lacunes & Critical Gap Analysis</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">The hidden gaps costing tour companies millions</h2>
        <p className="mt-5 text-muted-foreground">Average industry leakage — measured across managed accounts before onboarding. This is what your competitors are quietly bleeding every quarter.</p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <GapBar label="Inquiry Response Delay Drop" sub="Replies over 15 minutes lose the booking window" percent={72} amount="40% ↓" tone="rose" />
        <GapBar label="Unmapped Inventory Overbookings" sub="Duplicated resource pools across channels" percent={62} amount="$5,000" tone="rose" />
        <GapBar label="Cancellation Leakage" sub="Refunds outside policy · unaudited fees" percent={82} amount="$8,000" tone="rose" />
      </div>

      <div className="mt-8 glass rounded-3xl p-8" style={{ borderColor: "rgba(16,185,129,0.3)" }}>
        <div className="flex flex-wrap items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}>
            <ShieldCheck className="h-5 w-5" style={{ color: "#10b981" }} />
          </div>
          <div className="text-xs uppercase tracking-widest" style={{ color: "#10b981" }}>Our Solution</div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { i: <Lock className="h-4 w-4" />, t: "System capacity locks", d: "Bókun resource locks configured per SKU, per channel, per departure." },
            { i: <Timer className="h-4 w-4" />, t: "SLA-driven human check-ins", d: "Under 15-minute first response, 24/7, tracked and reported weekly." },
            { i: <Percent className="h-4 w-4" />, t: "0% overbooking rate", d: "Contracted SLA, backed by audit logs across every distribution partner." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-white/5 bg-white/[.02] p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: "#10b981" }}>{s.i}{s.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---------- Performance record ----------
function Record() {
  const items = [
    { v: "$1.85M", l: "Gross Volume Mapped", tone: "teal" as const, i: <CircleDollarSign className="h-5 w-5" /> },
    { v: "31,403", l: "Reservations Synced", tone: "teal" as const, i: <Database className="h-5 w-5" /> },
    { v: "83,368", l: "Pax Served", tone: "teal" as const, i: <Users2 className="h-5 w-5" /> },
    { v: "91.91%", l: "Margin Guarded", tone: "emerald" as const, i: <ChartNoAxesCombined className="h-5 w-5" /> },
    { v: "< 15m", l: "Avg. First Response", tone: "emerald" as const, i: <Timer className="h-5 w-5" /> },
    { v: "0%", l: "Overbooking Rate", tone: "emerald" as const, i: <Lock className="h-5 w-5" /> },
  ];
  return (
    <Section id="record">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Performance Record</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">Numbers our operators defend, daily.</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">Every metric below is measured live inside client Bókun and OTA extranets — not marketing rounding.</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {items.map((it) => {
          const c = it.tone === "emerald" ? "#10b981" : "#14b8a6";
          return (
            <div key={it.l} className="glass rounded-2xl p-5">
              <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: `${c}22`, color: c, border: `1px solid ${c}44` }}>{it.i}</div>
              <div className="mt-4 font-display text-3xl font-bold" style={{ color: c }}>{it.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{it.l}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ---------- One-time solutions ----------
function Solutions() {
  const cards = [
    { i: <Anchor className="h-5 w-5" />, t: "Bókun Architecture Setup", d: "End-to-end configuration: products, resource pools, pricing rules, capacity locks, and channel manager mapping." },
    { i: <Globe2 className="h-5 w-5" />, t: "OTA Listing SEO Overhaul", d: "Viator, GYG and TripAdvisor listings restructured for Page 1 placement — keyword taxonomy, media, itinerary depth." },
    { i: <Zap className="h-5 w-5" />, t: "Yield & Cancellation Audit", d: "One-time diagnostic that recovers cancellation leakage and identifies pricing decay across seasons." },
  ];
  return (
    <Section id="solutions">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>One-Time Solutions</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">Fixed-scope projects for operators not ready for a retainer.</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.t} className="glass group relative overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1">
            <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "rgba(20,184,166,0.14)", border: "1px solid rgba(20,184,166,0.3)", color: "#14b8a6" }}>{c.i}</div>
            <div className="mt-5 font-display text-xl font-semibold">{c.t}</div>
            <div className="mt-2 text-sm text-muted-foreground">{c.d}</div>
            <div className="mt-6 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "#14b8a6" }}>
              Included with retainer <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------- Calculator ----------
type Tier = "Starter" | "Growth" | "Scale";
type Coverage = "Business" | "Weekend" | "Night" | "24/7";

const TIER_BASE: Record<Tier, number> = { Starter: 1800, Growth: 3200, Scale: 5400 };
const COVERAGE_MULT: Record<Coverage, number> = { Business: 1, Weekend: 1.25, Night: 1.4, "24/7": 1.85 };
const ADDONS: { id: string; label: string; price: number }[] = [
  { id: "res", label: "Reservations Support", price: 600 },
  { id: "tickets", label: "Ticket Procurement", price: 450 },
  { id: "seo", label: "OTA SEO Listing Setup", price: 900 },
  { id: "tech", label: "Bókun Tech Maintenance", price: 700 },
];

function Calculator() {
  const [mode, setMode] = useState<"retainer" | "dhaka">("retainer");

  // Retainer state
  const [tier, setTier] = useState<Tier>("Growth");
  const [coverage, setCoverage] = useState<Coverage>("Business");
  const [addons, setAddons] = useState<Record<string, boolean>>({ res: true, seo: true, tickets: false, tech: false });
  const [listing, setListing] = useState("");
  const [notes, setNotes] = useState("");

  const monthly = useMemo(() => {
    const base = TIER_BASE[tier] * COVERAGE_MULT[coverage];
    const add = ADDONS.filter((a) => addons[a.id]).reduce((s, a) => s + a.price, 0);
    return Math.round(base + add);
  }, [tier, coverage, addons]);

  // Dhaka Hub state
  const RATE = 117;
  const [rent, setRent] = useState(50000);
  const [agents, setAgents] = useState(4);
  const [agentSalary, setAgentSalary] = useState(35000);
  const [devBudget, setDevBudget] = useState(80000);
  const [mktBudget, setMktBudget] = useState(40000);
  const [rome, setRome] = useState(60000);
  const [capex, setCapex] = useState(450000);

  const opexBDT = rent + agents * agentSalary + devBudget + mktBudget + rome;
  const opexUSD = opexBDT / RATE;
  const capexUSD = capex / RATE;
  const monthlyProfit = 8500; // projected margin contribution in USD
  const breakEvenMonths = Math.max(1, Math.ceil(capexUSD / Math.max(1, monthlyProfit - opexUSD * 0.15)));

  const proposal = useMemo(() => {
    if (mode === "retainer") {
      const picks = ADDONS.filter((a) => addons[a.id]).map((a) => `- ${a.label}`).join("\n") || "- (none)";
      return `TRAVEL BACKOFFICE PARTNERS — Retainer Proposal Draft
======================================================
Tier:            ${tier}
Coverage:        ${coverage}
Modular Add-ons:
${picks}

Estimated Monthly Retainer: $${monthly.toLocaleString()} USD

Listing URL: ${listing || "(not provided)"}
Roster Notes / Requirements:
${notes || "(none)"}

Please confirm scope and I'll return a signed SOW within 48h.`;
    }
    return `TRAVEL BACKOFFICE PARTNERS — Dhaka Hub Cost Simulator
======================================================
Monthly OPEX:      BDT ${opexBDT.toLocaleString()}  (~$${opexUSD.toFixed(0)} USD)
Rent:              BDT ${rent.toLocaleString()}
Support agents:    ${agents} × BDT ${agentSalary.toLocaleString()}
Dev budget:        BDT ${devBudget.toLocaleString()}
Marketing:         BDT ${mktBudget.toLocaleString()}
Redirected Rome:   BDT ${rome.toLocaleString()}

CAPEX Setup:       BDT ${capex.toLocaleString()}  (~$${capexUSD.toFixed(0)} USD)
Projected Break-Even: ~${breakEvenMonths} months

Notes:
${notes || "(none)"}`;
  }, [mode, tier, coverage, addons, monthly, listing, notes, opexBDT, opexUSD, rent, agents, agentSalary, devBudget, mktBudget, rome, capex, capexUSD, breakEvenMonths]);

  const mailto = `mailto:partnerships@travelbackoffice.com?subject=${encodeURIComponent(mode === "retainer" ? `Retainer Plan — ${tier} / ${coverage}` : "Dhaka Hub Investment Prospectus")}&body=${encodeURIComponent(proposal)}`;

  return (
    <Section id="calculator">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Global JV Partnership Prospectus</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">Configure your setup — retainer or Dhaka hub.</h2>
        <p className="mt-5 text-muted-foreground">Model your monthly cost live. The summary is emailed straight to our partnerships desk.</p>
      </div>

      {/* Toggle */}
      <div className="mx-auto mt-10 flex w-fit rounded-2xl border border-white/10 bg-black/30 p-1">
        {[
          { id: "retainer", label: "Client Retainer Calculator" },
          { id: "dhaka", label: "Dhaka Hub Cost Simulator" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setMode(t.id as "retainer" | "dhaka")}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${mode === t.id ? "btn-teal" : "text-muted-foreground hover:text-foreground"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <div className="glass rounded-3xl p-7">
          {mode === "retainer" ? (
            <div className="space-y-8">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Tier</label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(["Starter", "Growth", "Scale"] as Tier[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`rounded-xl border p-4 text-left transition-all ${tier === t ? "border-teal-glow" : "border-white/10 hover:border-white/25"}`}
                      style={tier === t ? { boxShadow: "0 0 0 1px #14b8a6, 0 10px 40px -20px #14b8a6" } : {}}
                    >
                      <div className="font-display text-lg font-semibold">{t}</div>
                      <div className="text-xs text-muted-foreground">from ${TIER_BASE[t]}/mo</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Coverage</label>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {(["Business", "Weekend", "Night", "24/7"] as Coverage[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCoverage(c)}
                      className={`rounded-xl border px-3 py-3 text-sm transition-all ${coverage === c ? "border-teal-glow bg-teal/10" : "border-white/10 hover:border-white/25"}`}
                      style={coverage === c ? { boxShadow: "0 0 0 1px #14b8a6" } : {}}
                    >
                      {c === "24/7" ? "Full 24/7" : c === "Business" ? "Business Hours" : c === "Weekend" ? "Weekend Only" : "Night Shift"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Modular Add-ons</label>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {ADDONS.map((a) => {
                    const on = !!addons[a.id];
                    return (
                      <button
                        key={a.id}
                        onClick={() => setAddons((s) => ({ ...s, [a.id]: !on }))}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${on ? "border-emerald bg-emerald/5" : "border-white/10 hover:border-white/25"}`}
                        style={on ? { boxShadow: "0 0 0 1px #10b981" } : {}}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`grid h-5 w-5 place-items-center rounded ${on ? "" : "border border-white/20"}`} style={on ? { background: "#10b981", color: "#04121a" } : {}}>
                            {on && <CheckCircle2 className="h-3.5 w-3.5" />}
                          </span>
                          {a.label}
                        </span>
                        <span className="text-xs text-muted-foreground">+${a.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">TripAdvisor / Viator Listing URL</label>
                  <input value={listing} onChange={(e) => setListing(e.target.value)} placeholder="https://..." className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-teal-glow" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Roster Notes / Requirements</label>
                  <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. Italian native speaker, Bókun Pro..." className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-teal-glow" />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <Slider label="Office Rent (Mirpur / Uttara / Dhanmondi)" min={40000} max={60000} step={5000} value={rent} onChange={setRent} suffix="BDT" ticks={[{ v: 40000, l: "Mirpur" }, { v: 50000, l: "Uttara" }, { v: 60000, l: "Dhanmondi" }]} />
              <Slider label="Support Agents Headcount" min={1} max={12} step={1} value={agents} onChange={setAgents} suffix="agents" />
              <Slider label="Avg. Agent Salary" min={20000} max={80000} step={2500} value={agentSalary} onChange={setAgentSalary} suffix="BDT" />
              <Slider label="Dev Budget" min={0} max={200000} step={5000} value={devBudget} onChange={setDevBudget} suffix="BDT" />
              <Slider label="Marketing Budget" min={0} max={200000} step={5000} value={mktBudget} onChange={setMktBudget} suffix="BDT" />
              <Slider label="Redirected Rome Tour Budget" min={0} max={200000} step={5000} value={rome} onChange={setRome} suffix="BDT" />
              <Slider label="CAPEX Setup" min={100000} max={1500000} step={25000} value={capex} onChange={setCapex} suffix="BDT" />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Notes for Investors</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Milestones, hiring plan, timeline..." className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-teal-glow" />
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="glass rounded-3xl p-7">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Live Summary</div>
            <span className="pulse-dot inline-flex h-2 w-2 rounded-full" style={{ background: "#14b8a6" }} />
          </div>

          {mode === "retainer" ? (
            <>
              <div className="mt-3 font-display text-5xl font-bold" style={{ background: "linear-gradient(120deg,#14b8a6,#10b981)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                ${monthly.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">estimated monthly retainer</div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <MiniRow k="Tier" v={tier} />
                <MiniRow k="Coverage" v={coverage} />
                <MiniRow k="Add-ons" v={String(Object.values(addons).filter(Boolean).length)} />
                <MiniRow k="Included SLAs" v="< 15m response" />
              </div>
            </>
          ) : (
            <>
              <div className="mt-3 font-display text-4xl font-bold" style={{ background: "linear-gradient(120deg,#14b8a6,#10b981)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                ${opexUSD.toFixed(0).toLocaleString()} <span className="text-lg font-semibold text-muted-foreground">/ mo</span>
              </div>
              <div className="text-sm text-muted-foreground">BDT {opexBDT.toLocaleString()} · @ 1 USD = 117 BDT</div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <MiniRow k="CAPEX (USD)" v={`$${capexUSD.toFixed(0)}`} />
                <MiniRow k="Break-Even" v={`~${breakEvenMonths} mo`} />
                <MiniRow k="Rent" v={`BDT ${rent.toLocaleString()}`} />
                <MiniRow k="Agents" v={`${agents} × ${agentSalary.toLocaleString()}`} />
              </div>
            </>
          )}

          <div className="mt-6">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Proposal Summary</label>
            <textarea readOnly value={proposal} rows={9} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-[11px] leading-relaxed text-foreground/90 outline-none" />
          </div>

          <a href={mailto} className="btn-teal mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold">
            <Mail className="h-4 w-4" /> Email to partnerships@travelbackoffice.com
          </a>
        </div>
      </div>
    </Section>
  );
}

function MiniRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col rounded-xl border border-white/5 bg-white/[.02] px-3 py-2">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}

function Slider({ label, min, max, step, value, onChange, suffix, ticks }: { label: string; min: number; max: number; step: number; value: number; onChange: (n: number) => void; suffix: string; ticks?: { v: number; l: string }[] }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
        <span className="font-display text-sm font-semibold text-foreground">{value.toLocaleString()} <span className="text-xs text-muted-foreground">{suffix}</span></span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-3 w-full accent-teal" style={{ accentColor: "#14b8a6" }} />
      {ticks && (
        <div className="mt-1 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
          {ticks.map((t) => <span key={t.v}>{t.l}</span>)}
        </div>
      )}
    </div>
  );
}

// ---------- Insights hub ----------
const ARTICLES = [
  {
    tag: "SEO Algorithms",
    title: "How to Optimize Viator Listings for Page 1 Placements",
    excerpt: "The five ranking levers Viator's algorithm rewards — and the three penalties most operators trip on inside their own dashboard.",
    body: [
      "Viator's ranking algorithm weighs listing depth, response velocity, review recency, cancellation rate, and media completeness. Operators optimising only for reviews leave four levers on the table.",
      "Rewrite your itinerary as a minute-by-minute sequence with landmarks named. This is the single largest keyword surface Viator crawls internally.",
      "Keep average first-response time under 15 minutes. Viator quietly demotes listings that drift above 30 minutes over a rolling week.",
      "Refresh 3 photos per month. Media freshness is a stronger signal than photo count — a static gallery signals a dormant operator.",
      "Audit your cancellation policy against your operational reality. Non-refundable listings outrank refundable ones on high-intent queries by 18–34%.",
    ],
  },
  {
    tag: "Bókun Configuration",
    title: "Preventing Inbound Double-Bookings with Advanced Capacity Locks",
    excerpt: "The Bókun resource pool pattern that eliminates overbookings across Viator, GetYourGuide and TripAdvisor — without capping availability.",
    body: [
      "Double-bookings are almost never a channel manager fault — they're a resource modelling fault. If two SKUs share a guide but not a resource, the channel manager cannot see the collision.",
      "Model every finite asset (guide, van, dock slot, entry ticket window) as a Bókun resource. Then attach every SKU to the exact resources it consumes.",
      "Set capacity at the resource, not the product. This is counter-intuitive but it is the only pattern that scales past 3 concurrent OTAs.",
      "Add a 15-minute buffer resource between back-to-back departures on the same guide. This absorbs OTA sync lag without customer-visible cap changes.",
    ],
  },
  {
    tag: "Yield Management",
    title: "Safeguarding Tour Margins Against High-Volume Holiday Cancellations",
    excerpt: "A four-part policy framework that keeps holiday cancellation leakage under 2% without hurting your Viator refund rating.",
    body: [
      "Holiday cancellations spike 3–5× the annual mean. Standard policies treat every refund the same — that's where 8k+/year leaks.",
      "Introduce tiered refund windows anchored to your local operational cost curve, not the OTA's default template.",
      "Automate a 'reschedule-first' response tree. Rescheduled bookings preserve margin and often upgrade to premium slots.",
      "Weekly audit of refund reasons vs policy. 40% of refunds we recover are policy misapplications by junior support, not customer entitlement.",
    ],
  },
];

function Insights() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="insights">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Knowledge Hub & SEO Insights</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">Written by our operators, not our marketers.</h2>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {ARTICLES.map((a, i) => (
          <button key={a.title} onClick={() => setOpen(i)} className="glass group text-left overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1">
            <div className="text-[11px] uppercase tracking-widest" style={{ color: "#14b8a6" }}>{a.tag}</div>
            <div className="mt-4 font-display text-xl font-semibold leading-snug">{a.title}</div>
            <div className="mt-3 text-sm text-muted-foreground">{a.excerpt}</div>
            <div className="mt-6 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "#14b8a6" }}>Read article <ChevronRight className="h-3.5 w-3.5" /></div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <div className="glass relative max-h-[85vh] w-full max-w-2xl overflow-auto rounded-3xl p-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
            <div className="text-[11px] uppercase tracking-widest" style={{ color: "#14b8a6" }}>{ARTICLES[open].tag}</div>
            <h3 className="mt-3 font-display text-3xl font-bold">{ARTICLES[open].title}</h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {ARTICLES[open].body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

// ---------- Careers ----------
function Careers() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/hasanur.ed@tourgeeky.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (res.ok) { setStatus("ok"); form.reset(); } else setStatus("err");
    } catch {
      setStatus("err");
    }
  }

  return (
    <Section id="careers">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <Eyebrow>Dhaka Remote Career Hub</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">Apply as a BackOffice Operations Partner.</h2>
          <p className="mt-5 text-muted-foreground">We build a roster of Dhaka-based operators trained on Bókun, Viator, GYG, and TripAdvisor. Roles are remote-first with a downtown hub option.</p>
          <div className="mt-8 space-y-3">
            {[
              { i: <MapPin className="h-4 w-4" />, t: "Remote across Bangladesh · Hub in Uttara / Dhanmondi" },
              { i: <Clock className="h-4 w-4" />, t: "Shift-based coverage — night & weekend allowance" },
              { i: <Sparkles className="h-4 w-4" />, t: "Direct mentorship from lead Bókun architects" },
              { i: <Headphones className="h-4 w-4" />, t: "Growth path into Team Lead & Client Ops Manager" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: "rgba(20,184,166,0.14)", color: "#14b8a6", border: "1px solid rgba(20,184,166,0.3)" }}>{x.i}</span>
                {x.t}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-7">
          <input type="hidden" name="_subject" value="New Dhaka BackOffice Applicant" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <SelectField label="Role" name="role" options={["Bókun Architect", "OTA Manager", "Support Operator", "Procurement Specialist"]} />
            <SelectField label="Experience" name="experience" options={["1–2 years", "3–5 years", "5+ years"]} />
          </div>
          <Field label="Portfolio / LinkedIn URL" name="portfolio" placeholder="https://linkedin.com/in/..." />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Short Bio</label>
            <textarea name="bio" rows={4} required placeholder="What OTAs and tools have you worked with? Any client wins worth highlighting?" className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-teal-glow" />
          </div>
          <button type="submit" disabled={status === "sending"} className="btn-teal inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold disabled:opacity-70">
            {status === "sending" ? "Submitting…" : status === "ok" ? "Submitted ✓ We'll be in touch" : "Submit Application"}
            {status === "idle" && <ArrowRight className="h-4 w-4" />}
          </button>
          {status === "err" && <div className="text-xs" style={{ color: "#f43f5e" }}>Something went wrong — please email hasanur.ed@tourgeeky.com directly.</div>}
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-teal-glow" />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <select name={name} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-teal-glow">
        {options.map((o) => <option key={o} value={o} style={{ background: "#0b1329" }}>{o}</option>)}
      </select>
    </div>
  );
}

// ---------- Footer ----------
function Footer() {
  const badges = [
    { i: <CalendarClock className="h-4 w-4" />, t: "SLA-Driven Dispatch" },
    { i: <Building2 className="h-4 w-4" />, t: "Corporate Account Parity" },
    { i: <LineChart className="h-4 w-4" />, t: "Channel Manager Audit" },
  ];
  return (
    <footer className="border-t border-white/5" style={{ background: "rgba(4,10,24,0.6)" }}>
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "linear-gradient(135deg,#0d9488,#10b981)" }}>
                <Compass className="h-5 w-5 text-[#04121a]" />
              </div>
              <div className="font-display text-sm font-bold tracking-[0.22em]">TRAVEL BACKOFFICE PARTNERS</div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">Outsourced travel operations & yield architecture — protecting tour operator margins across Viator, GetYourGuide, TripAdvisor and Bókun.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b.t} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span style={{ color: "#10b981" }}>{b.i}</span>{b.t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => <li key={n.href}><a href={n.href} className="text-muted-foreground hover:text-foreground">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Partnerships Desk</div>
            <a href="mailto:partnerships@travelbackoffice.com" className="mt-4 inline-flex items-center gap-2 font-display text-lg font-semibold hover:underline">
              <Mail className="h-4 w-4" style={{ color: "#14b8a6" }} /> partnerships@travelbackoffice.com
            </a>
            <div className="mt-3 text-sm text-muted-foreground">Dhaka Ops Hub · Global JV Enquiries</div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Travel BackOffice Partners. All rights reserved.</div>
          <div>Human-first operations · Built for tour operators.</div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Page ----------
function Landing() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <HumanVsAI />
      <Gaps />
      <Record />
      <Solutions />
      <Calculator />
      <Insights />
      <Careers />
      <Footer />
    </div>
  );
}
