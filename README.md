# CandidClips by BombAI

AI-powered UGC video ad generator. Photo in. Ads out. 15 minutes.

## Setup

1. **Install dependencies:**

```bash
npm install
```

2. **Configure environment variables:**

```bash
cp .env.local.example .env.local
```

Fill in your keys:

- `STRIPE_SECRET_KEY` — from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — from Stripe Dashboard
- `STRIPE_WEBHOOK_SECRET` — from Stripe webhook settings
- `OPENAI_API_KEY` — from [OpenAI](https://platform.openai.com/api-keys)
- `GEMINI_API_KEY` — from [Google AI Studio](https://aistudio.google.com/apikey)

3. **Run the dev server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page |
| `/dashboard` | Generations dashboard |
| `/generate` | New order flow |
| `/api/checkout` | Stripe checkout session |
| `/api/jobs` | Job status API |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Payments:** Stripe
- **Fonts:** Bebas Neue, DM Serif Display, DM Mono, Instrument Sans
- **Icons:** Lucide React

## Design System

- Paper white: `#FAF8F4`
- Ink black: `#0E0E0E`
- Gradient: `linear-gradient(135deg, #FF6B00, #FF3300, #CC1000)`
- All borders: `2px solid #0E0E0E`
- Grain texture overlay on body

---

CandidClips by BombAI · Meridian Media LLC · Denver CO · 2026
