"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

interface Generation {
  id: string;
  productName: string;
  status: "processing" | "complete";
  createdAt: string;
  videos: { id: string; label: string; bg: string }[];
}

const mockGenerations: Generation[] = [
  {
    id: "gen_001",
    productName: "GlowSerum Pro",
    status: "complete",
    createdAt: "2026-03-14",
    videos: [
      { id: "v1", label: "Hook A — Unboxing", bg: "#E8DDD3" },
      { id: "v2", label: "Hook B — Testimonial", bg: "#D4E4D9" },
      { id: "v3", label: "Hook C — Before/After", bg: "#DDD8E8" },
    ],
  },
  {
    id: "gen_002",
    productName: "FitBlend Shaker",
    status: "processing",
    createdAt: "2026-03-15",
    videos: [
      { id: "v4", label: "Hook A", bg: "#E8D4D4" },
      { id: "v5", label: "Hook B", bg: "#D8E0E8" },
      { id: "v6", label: "Hook C", bg: "#E0D8D0" },
    ],
  },
  {
    id: "gen_003",
    productName: "BrewMaster Kettle",
    status: "complete",
    createdAt: "2026-03-12",
    videos: [
      { id: "v7", label: "Hook A — Morning Routine", bg: "#D4E4D9" },
      { id: "v8", label: "Hook B — Product Focus", bg: "#E8DDD3" },
      { id: "v9", label: "Hook C — Lifestyle", bg: "#DDD8E8" },
    ],
  },
];

function StatusBadge({ status }: { status: Generation["status"] }) {
  if (status === "processing") {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm bg-amber-100 text-amber-700 border border-amber-300"
        style={{ fontFamily: "var(--font-mono, 'DM Mono', monospace)" }}
      >
        <Clock size={10} /> Processing
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm bg-emerald-100 text-emerald-700 border border-emerald-300"
      style={{ fontFamily: "var(--font-mono, 'DM Mono', monospace)" }}
    >
      <CheckCircle size={10} /> Complete
    </span>
  );
}

function GenerationCard({ gen }: { gen: Generation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-2 border-ink rounded-sm bg-paper overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 hover:bg-ink/[0.02] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 gradient-bg rounded-sm flex items-center justify-center text-paper">
            <Sparkles size={16} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-sm">{gen.productName}</h3>
            <p
              className="text-[11px] text-ink/40 mt-0.5"
              style={{ fontFamily: "var(--font-mono, 'DM Mono', monospace)" }}
            >
              {gen.id} &middot; {gen.createdAt}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <StatusBadge status={gen.status} />
          {expanded ? (
            <ChevronUp size={16} className="text-ink/40" />
          ) : (
            <ChevronDown size={16} className="text-ink/40" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t-2 border-ink p-5">
          <div className="grid grid-cols-3 gap-3">
            {gen.videos.map((v) => (
              <div key={v.id} className="space-y-2">
                <div
                  className="aspect-[9/16] rounded-sm border-2 border-ink relative overflow-hidden"
                  style={{ backgroundColor: v.bg }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-ink/10 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-ink/30 ml-1" />
                    </div>
                  </div>
                  {gen.status === "processing" && (
                    <div className="absolute inset-0 bg-paper/60 flex items-center justify-center">
                      <div className="animate-spin w-6 h-6 border-2 border-ink/20 border-t-ink rounded-full" />
                    </div>
                  )}
                </div>
                <p
                  className="text-[10px] text-ink/50 truncate"
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                  }}
                >
                  {v.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const totalGenerations = mockGenerations.length;
  const totalVideos = mockGenerations.reduce(
    (acc, g) => acc + g.videos.length,
    0
  );

  return (
    <main className="min-h-screen bg-paper">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b-2 border-ink">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-sm" />
            <span
              className="text-xl tracking-tight font-bold"
              style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              }}
            >
              CANDIDCLIPS
            </span>
          </a>
        </div>
        <a
          href="/generate"
          className="gradient-bg text-paper px-5 py-2.5 text-sm font-semibold rounded-sm border-2 border-ink hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        >
          <Plus size={14} /> New Order
        </a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-1 text-xs text-ink/40 hover:text-ink/60 mb-2 transition-colors"
              style={{
                fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              }}
            >
              <ArrowLeft size={12} /> Back to home
            </a>
            <h1
              className="text-4xl md:text-5xl tracking-tight"
              style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              }}
            >
              My <span className="gradient-text">Generations</span>
            </h1>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <div
                className="text-2xl font-bold gradient-text"
                style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                }}
              >
                {totalGenerations}
              </div>
              <div
                className="text-[10px] uppercase tracking-widest text-ink/40"
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                }}
              >
                Generations
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-2xl font-bold gradient-text"
                style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                }}
              >
                {totalVideos}
              </div>
              <div
                className="text-[10px] uppercase tracking-widest text-ink/40"
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                }}
              >
                Videos
              </div>
            </div>
          </div>
        </div>

        {/* Generation list */}
        <div className="space-y-4">
          {mockGenerations.map((gen) => (
            <GenerationCard key={gen.id} gen={gen} />
          ))}
        </div>
      </div>
    </main>
  );
}
