"use client";

import { useState } from "react";
import {
  ChevronDown,
  Upload,
  Check,
  X,
  Clock,
  DollarSign,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/* ───────────────────────── TICKER ───────────────────────── */
function Ticker() {
  const items = [
    "Photo in. Ads out. 15 minutes",
    "Ember charges $2,399/mo. We charge $29",
    "Photo in. Ads out. 15 minutes",
    "Ember charges $2,399/mo. We charge $29",
    "Photo in. Ads out. 15 minutes",
    "Ember charges $2,399/mo. We charge $29",
  ];
  return (
    <div className="w-full bg-ink overflow-hidden py-3">
      <div className="ticker-animate flex whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-8 text-sm tracking-widest uppercase text-paper"
            style={{ fontFamily: "var(--font-mono, 'DM Mono', monospace)" }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── NAV ──────────────────────────── */
function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b-2 border-ink">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 gradient-bg rounded-sm" />
        <span
          className="text-xl tracking-tight font-bold"
          style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
        >
          CANDIDCLIPS
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="#pricing"
          className="text-sm font-medium hover:opacity-70 transition-opacity hidden sm:block"
        >
          Pricing
        </a>
        <a
          href="#how-it-works"
          className="text-sm font-medium hover:opacity-70 transition-opacity hidden sm:block"
        >
          How It Works
        </a>
        <a
          href="/dashboard"
          className="text-sm font-medium hover:opacity-70 transition-opacity hidden sm:block"
        >
          Dashboard
        </a>
        <a
          href="/generate"
          className="gradient-bg text-paper px-5 py-2.5 text-sm font-semibold rounded-sm border-2 border-ink hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

/* ───────────────────────── HERO ─────────────────────────── */
function Hero() {
  const heroVideos = [
    { src: "/videos/video-proxy-1.mp4", label: "Skincare Ad" },
    { src: "/videos/miracle-wrinkle-cream-1.mp4", label: "Beauty Ad" },
    { src: "/videos/stanley-1.mp4", label: "Lifestyle Ad" },
    { src: "/videos/skynn-1.mp4", label: "Skincare Ad" },
    { src: "/videos/video-proxy-2.mp4", label: "Fashion Ad" },
  ];

  return (
    <section className="px-6 md:px-12 py-16 md:py-24 border-b-2 border-ink">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="flex-1 space-y-8">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight"
            style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            }}
          >
            Photo in.
            <br />
            <span className="gradient-text">Ads out.</span>
          </h1>
          <p
            className="text-lg md:text-xl text-ink/70 max-w-md"
            style={{
              fontFamily:
                "var(--font-serif, 'DM Serif Display', serif)",
              fontStyle: "italic",
            }}
          >
            AI-generated UGC video ads that convert. Upload a product photo, get
            scroll-stopping content in minutes.
          </p>
          <div className="flex gap-8 md:gap-12">
            {[
              { value: "15min", label: "Delivery" },
              { value: "$29", label: "Per batch" },
              { value: "0", label: "Creators needed" },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <div
                  className="text-3xl md:text-4xl gradient-text font-bold"
                  style={{
                    fontFamily:
                      "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs uppercase tracking-widest text-ink/50"
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="/generate"
              className="gradient-bg text-paper px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-sm border-2 border-ink hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Generate Now <ArrowRight size={16} />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-sm border-2 border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              See How
            </a>
          </div>
        </div>

        {/* Right — video grid */}
        <div className="flex-1 flex gap-3 items-end justify-center">
          {heroVideos.map((v, i) => (
            <div
              key={i}
              className={`drift-${i + 1} relative rounded-sm border-2 border-ink overflow-hidden bg-ink/5`}
              style={{
                width: i === 2 ? 130 : 100,
                height: i === 2 ? 230 : 190,
              }}
            >
              <video
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute bottom-2 left-2 bg-ink/80 text-paper text-[9px] px-1.5 py-0.5 rounded-sm flex items-center gap-1 z-10"
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                }}
              >
                <Sparkles size={8} /> AI generated
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROBLEM ──────────────────────── */
function Problem() {
  const rows = [
    {
      feature: "Cost",
      agency: "$5,000+/mo",
      freelancer: "$500+/video",
      ember: "$2,399/mo",
      us: "$29/batch",
    },
    {
      feature: "Turnaround",
      agency: "2-4 weeks",
      freelancer: "1-2 weeks",
      ember: "48 hours",
      us: "15 minutes",
    },
    {
      feature: "Creators needed",
      agency: "Yes",
      freelancer: "Yes",
      ember: "No",
      us: "No",
    },
    {
      feature: "Consistent quality",
      agency: "Varies",
      freelancer: "Varies",
      ember: "Yes",
      us: "Yes",
    },
    {
      feature: "Scale on demand",
      agency: "No",
      freelancer: "No",
      ember: "Limited",
      us: "Unlimited",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20 border-b-2 border-ink">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-6xl mb-4 tracking-tight"
          style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
          }}
        >
          The old way is{" "}
          <span className="gradient-text">broken</span>
        </h2>
        <p
          className="text-lg text-ink/60 mb-12 max-w-xl"
          style={{
            fontFamily: "var(--font-serif, 'DM Serif Display', serif)",
            fontStyle: "italic",
          }}
        >
          Agencies are slow, freelancers are inconsistent, and competitors charge
          a fortune.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-widest text-ink/50">
                  Feature
                </th>
                <th className="text-center py-4 px-4 font-mono text-xs uppercase tracking-widest text-ink/50">
                  Agency
                </th>
                <th className="text-center py-4 px-4 font-mono text-xs uppercase tracking-widest text-ink/50">
                  Freelancer
                </th>
                <th className="text-center py-4 px-4 font-mono text-xs uppercase tracking-widest text-ink/50">
                  Ember
                </th>
                <th className="text-center py-4 pl-4">
                  <span className="gradient-bg text-paper text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                    CandidClips
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-ink/10">
                  <td
                    className="py-4 pr-4 font-medium"
                    style={{
                      fontFamily:
                        "var(--font-mono, 'DM Mono', monospace)",
                    }}
                  >
                    {r.feature}
                  </td>
                  <td className="text-center py-4 px-4 text-ink/50">
                    {r.agency}
                  </td>
                  <td className="text-center py-4 px-4 text-ink/50">
                    {r.freelancer}
                  </td>
                  <td className="text-center py-4 px-4 text-ink/50">
                    {r.ember}
                  </td>
                  <td className="text-center py-4 pl-4 font-bold gradient-text">
                    {r.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── HOW IT WORKS ─────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      time: "0:00",
      title: "Upload your product photo",
      desc: "Drop in a high-quality image of your product. That's all we need to get started.",
    },
    {
      num: "02",
      time: "0:30",
      title: "AI analyzes your product",
      desc: "Our AI studies your product, identifies key selling points, and crafts the perfect script.",
    },
    {
      num: "03",
      time: "5:00",
      title: "Generate UGC videos",
      desc: "AI creates 3 unique, scroll-stopping UGC-style video ads tailored to your brand.",
    },
    {
      num: "04",
      time: "15:00",
      title: "Download & deploy",
      desc: "Get your finished videos. Upload directly to TikTok, Reels, or your ad manager.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="px-6 md:px-12 py-20 border-b-2 border-ink"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-6xl mb-4 tracking-tight"
          style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
          }}
        >
          How it <span className="gradient-text">works</span>
        </h2>
        <p
          className="text-lg text-ink/60 mb-12 max-w-xl"
          style={{
            fontFamily: "var(--font-serif, 'DM Serif Display', serif)",
            fontStyle: "italic",
          }}
        >
          From product photo to ad-ready video in four simple steps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`p-8 border-2 border-ink ${i === 0 ? "" : ""} ${i % 2 === 0 ? "md:border-r-0" : ""} ${i < 2 ? "border-b-0 md:border-b-2" : ""} ${i === 2 ? "md:border-r-0" : ""}`}
              style={{
                borderTopWidth: i < 2 ? 2 : 0,
                borderBottomWidth: 2,
                borderLeftWidth: 2,
                borderRightWidth: i % 2 === 0 ? 0 : 2,
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-5xl gradient-text"
                  style={{
                    fontFamily:
                      "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  }}
                >
                  {s.num}
                </span>
                <span
                  className="text-xs uppercase tracking-widest text-ink/40 border border-ink/20 px-2 py-1 rounded-sm"
                  style={{
                    fontFamily:
                      "var(--font-mono, 'DM Mono', monospace)",
                  }}
                >
                  t+{s.time}
                </span>
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily:
                    "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: "1.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROOF ────────────────────────── */
function Proof() {
  const proofVideos = [
    { src: "/videos/miracle-wrinkle-cream-1-1.mp4", label: "Skincare" },
    { src: "/videos/miracle-wrinkle-cream-2-1.mp4", label: "Beauty" },
    { src: "/videos/video-proxy-3.mp4", label: "Lifestyle" },
    { src: "/videos/stanley-2.mp4", label: "Drinkware" },
    { src: "/videos/skynn-2.mp4", label: "Skincare" },
    { src: "/videos/miracle-wrinkle-cream-3-1.mp4", label: "Anti-Aging" },
  ];

  return (
    <section className="px-6 md:px-12 py-20 border-b-2 border-ink">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-6xl mb-4 tracking-tight"
          style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
          }}
        >
          See the <span className="gradient-text">proof</span>
        </h2>
        <p
          className="text-lg text-ink/60 mb-12 max-w-xl"
          style={{
            fontFamily: "var(--font-serif, 'DM Serif Display', serif)",
            fontStyle: "italic",
          }}
        >
          Real outputs from real products. Every video below was generated by AI.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {proofVideos.map((v, i) => (
            <div
              key={i}
              className="aspect-[9/16] rounded-sm border-2 border-ink relative overflow-hidden bg-ink/5"
            >
              <video
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute top-3 left-3 bg-ink/80 text-paper text-[10px] px-2 py-1 rounded-sm flex items-center gap-1 z-10"
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                }}
              >
                <Sparkles size={10} /> AI generated
              </div>
              <div
                className="absolute bottom-3 left-3 text-paper/80 text-xs font-medium z-10"
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                }}
              >
                {v.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRICING ──────────────────────── */
function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-12 py-20 border-b-2 border-ink">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-6xl mb-4 tracking-tight"
          style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
          }}
        >
          Simple <span className="gradient-text">pricing</span>
        </h2>
        <p
          className="text-lg text-ink/60 mb-12 max-w-xl"
          style={{
            fontFamily: "var(--font-serif, 'DM Serif Display', serif)",
            fontStyle: "italic",
          }}
        >
          No subscriptions required. Pay per batch, scale when you&apos;re ready.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {/* Starter */}
          <div className="border-2 border-ink rounded-sm p-8 relative gradient-bg text-paper">
            <div
              className="absolute top-4 right-4 bg-paper text-ink text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm"
              style={{
                fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              }}
            >
              Most Popular
            </div>
            <h3
              className="text-2xl mb-1"
              style={{
                fontFamily:
                  "var(--font-bebas, 'Bebas Neue', sans-serif)",
              }}
            >
              STARTER PACK
            </h3>
            <p
              className="text-paper/70 text-sm mb-6"
              style={{
                fontFamily:
                  "var(--font-serif, 'DM Serif Display', serif)",
                fontStyle: "italic",
              }}
            >
              Perfect for testing the waters
            </p>
            <div className="flex items-baseline gap-2 mb-6">
              <span
                className="text-6xl font-bold"
                style={{
                  fontFamily:
                    "var(--font-bebas, 'Bebas Neue', sans-serif)",
                }}
              >
                $29
              </span>
              <span
                className="text-paper/60 text-sm"
                style={{
                  fontFamily:
                    "var(--font-mono, 'DM Mono', monospace)",
                }}
              >
                per batch
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              {[
                "3 unique UGC video ads",
                "15-minute delivery",
                "Optimized for TikTok & Reels",
                "Commercial usage rights",
                "No watermarks",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={14} className="shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="/generate"
              className="block w-full text-center bg-paper text-ink py-3 text-sm font-bold uppercase tracking-wider rounded-sm border-2 border-paper hover:bg-paper/90 transition-colors"
            >
              Generate Now
            </a>
          </div>

          {/* Pro */}
          <div className="border-2 border-ink rounded-sm p-8 relative bg-paper">
            <div
              className="absolute top-4 right-4 bg-ink/10 text-ink text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm"
              style={{
                fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              }}
            >
              Coming Soon
            </div>
            <h3
              className="text-2xl mb-1"
              style={{
                fontFamily:
                  "var(--font-bebas, 'Bebas Neue', sans-serif)",
              }}
            >
              PRO MONTHLY
            </h3>
            <p
              className="text-ink/60 text-sm mb-6"
              style={{
                fontFamily:
                  "var(--font-serif, 'DM Serif Display', serif)",
                fontStyle: "italic",
              }}
            >
              For brands that need volume
            </p>
            <div className="flex items-baseline gap-2 mb-6">
              <span
                className="text-6xl font-bold gradient-text"
                style={{
                  fontFamily:
                    "var(--font-bebas, 'Bebas Neue', sans-serif)",
                }}
              >
                $49
              </span>
              <span
                className="text-ink/40 text-sm"
                style={{
                  fontFamily:
                    "var(--font-mono, 'DM Mono', monospace)",
                }}
              >
                /month
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-ink/70">
              {[
                "10 batches per month (30 videos)",
                "Priority processing",
                "Brand voice customization",
                "A/B testing variants",
                "Analytics dashboard",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={14} className="text-ink/40 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <button
              disabled
              className="block w-full text-center bg-ink/10 text-ink/40 py-3 text-sm font-bold uppercase tracking-wider rounded-sm border-2 border-ink/20 cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA FORM ─────────────────────── */
function CTAForm() {
  const [productName, setProductName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFile = (file: File) => {
    setFileName(file.name);
  };

  return (
    <section className="px-6 md:px-12 py-20 border-b-2 border-ink">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-4xl md:text-6xl mb-4 tracking-tight"
          style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
          }}
        >
          Ready to <span className="gradient-text">start?</span>
        </h2>
        <p
          className="text-lg text-ink/60 mb-12"
          style={{
            fontFamily: "var(--font-serif, 'DM Serif Display', serif)",
            fontStyle: "italic",
          }}
        >
          Upload your product photo and let AI do the rest.
        </p>
        <form
          className="space-y-4 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/generate";
          }}
        >
          <div>
            <label
              className="block text-xs uppercase tracking-widest text-ink/50 mb-2"
              style={{
                fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              }}
            >
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. GlowSerum Pro"
              className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-orange-start"
            />
          </div>
          <div>
            <label
              className="block text-xs uppercase tracking-widest text-ink/50 mb-2"
              style={{
                fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              }}
            >
              Product Image
            </label>
            <div
              className={`border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-colors ${
                dragActive ? "border-orange-start bg-orange-start/5" : "border-ink/30 hover:border-ink"
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);
                if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
              }}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) handleFile(file);
                };
                input.click();
              }}
            >
              <Upload size={24} className="mx-auto mb-2 text-ink/30" />
              {fileName ? (
                <p className="text-sm font-medium">{fileName}</p>
              ) : (
                <p className="text-sm text-ink/40">
                  Drag & drop or click to upload
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full gradient-bg text-paper py-4 text-sm font-bold uppercase tracking-wider rounded-sm border-2 border-ink hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Sparkles size={16} /> Generate My Ads
          </button>
        </form>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ──────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "How does CandidClips work?",
      a: "Upload a product photo, and our AI generates 3 unique UGC-style video ads optimized for TikTok, Instagram Reels, and other short-form platforms. The entire process takes about 15 minutes.",
    },
    {
      q: "Do I need real creators or actors?",
      a: "No. Our AI generates everything — scripts, voiceover, visuals, and editing. No creators, no scheduling, no contracts.",
    },
    {
      q: "What's included in each batch?",
      a: "Each $29 batch includes 3 unique video ads, each 15-30 seconds long, with different hooks and angles to test what converts best.",
    },
    {
      q: "Can I use these ads commercially?",
      a: "Yes. You get full commercial usage rights for all generated videos. Use them on any platform, in any ad campaign.",
    },
    {
      q: "How is this different from Ember or other tools?",
      a: "Ember charges $2,399/month. We charge $29 per batch with no subscription required. Same AI-generated UGC quality, fraction of the cost.",
    },
    {
      q: "What if I'm not satisfied with the results?",
      a: "We're confident in our output quality. If you're not satisfied, reach out and we'll work with you to make it right.",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20 border-b-2 border-ink">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-6xl mb-12 tracking-tight"
          style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
          }}
        >
          Questions & <span className="gradient-text">answers</span>
        </h2>
        <div className="divide-y divide-ink/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium text-base pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform text-ink/40 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 gradient-bg rounded-sm" />
          <span
            className="text-sm font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            }}
          >
            CANDIDCLIPS
          </span>
        </div>
        <p
          className="text-xs text-ink/40 text-center"
          style={{
            fontFamily: "var(--font-mono, 'DM Mono', monospace)",
          }}
        >
          CandidClips by BombAI &middot; Meridian Media LLC &middot; Denver CO
          &middot; 2026
        </p>
      </div>
    </footer>
  );
}

/* ───────────────────────── PAGE ─────────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Ticker />
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Proof />
      <Pricing />
      <CTAForm />
      <FAQ />
      <Footer />
    </main>
  );
}
