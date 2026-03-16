"use client";

import { useState, useCallback } from "react";
import { Upload, Sparkles, ArrowLeft, X, Image as ImageIcon } from "lucide-react";

export default function Generate() {
  const [productName, setProductName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || !file) return;

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-paper">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b-2 border-ink">
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
        <a
          href="/dashboard"
          className="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          My Generations
        </a>
      </nav>

      <div className="max-w-xl mx-auto px-6 md:px-12 py-10">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-xs text-ink/40 hover:text-ink/60 mb-6 transition-colors"
          style={{ fontFamily: "var(--font-mono, 'DM Mono', monospace)" }}
        >
          <ArrowLeft size={12} /> Back to home
        </a>

        <h1
          className="text-4xl md:text-5xl tracking-tight mb-2"
          style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
          }}
        >
          New <span className="gradient-text">Order</span>
        </h1>
        <p
          className="text-ink/60 mb-10"
          style={{
            fontFamily: "var(--font-serif, 'DM Serif Display', serif)",
            fontStyle: "italic",
          }}
        >
          Upload your product photo and we&apos;ll generate 3 unique UGC video
          ads.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label
              className="block text-xs uppercase tracking-widest text-ink/50 mb-2"
              style={{ fontFamily: "var(--font-mono, 'DM Mono', monospace)" }}
            >
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. GlowSerum Pro"
              required
              className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-orange-start"
              style={{ fontFamily: "var(--font-sans, 'Instrument Sans', sans-serif)" }}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label
              className="block text-xs uppercase tracking-widest text-ink/50 mb-2"
              style={{ fontFamily: "var(--font-mono, 'DM Mono', monospace)" }}
            >
              Product Image
            </label>

            {preview ? (
              <div className="relative border-2 border-ink rounded-sm overflow-hidden">
                <img
                  src={preview}
                  alt="Product preview"
                  className="w-full h-64 object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-ink/80 text-paper rounded-sm flex items-center justify-center hover:bg-ink transition-colors"
                >
                  <X size={14} />
                </button>
                <div
                  className="absolute bottom-3 left-3 bg-ink/80 text-paper text-[10px] px-2 py-1 rounded-sm"
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                  }}
                >
                  {file?.name}
                </div>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-sm p-12 text-center cursor-pointer transition-all ${
                  dragActive
                    ? "border-orange-start bg-orange-start/5"
                    : "border-ink/30 hover:border-ink"
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
                  input.onchange = (ev) => {
                    const f = (ev.target as HTMLInputElement).files?.[0];
                    if (f) handleFile(f);
                  };
                  input.click();
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-ink/5 flex items-center justify-center">
                  <ImageIcon size={20} className="text-ink/30" />
                </div>
                <p className="text-sm font-medium mb-1">
                  Drop your product image here
                </p>
                <p
                  className="text-xs text-ink/40"
                  style={{
                    fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                  }}
                >
                  PNG, JPG up to 10MB
                </p>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="border-2 border-ink rounded-sm p-5 bg-ink/[0.02]">
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-xs uppercase tracking-widest text-ink/50"
                style={{
                  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
                }}
              >
                Order Summary
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">3 UGC Video Ads</span>
              <span
                className="text-2xl font-bold gradient-text"
                style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                }}
              >
                $29
              </span>
            </div>
            <p
              className="text-[10px] text-ink/40 mt-1"
              style={{ fontFamily: "var(--font-mono, 'DM Mono', monospace)" }}
            >
              15-minute delivery &middot; Commercial rights included
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!productName || !file || loading}
            className="w-full gradient-bg text-paper py-4 text-sm font-bold uppercase tracking-wider rounded-sm border-2 border-ink hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full" />
                Redirecting to checkout...
              </>
            ) : (
              <>
                <Sparkles size={16} /> Generate 3 Videos — $29
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
