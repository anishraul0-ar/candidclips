import { NextRequest, NextResponse } from "next/server";

interface Job {
  id: string;
  productName: string;
  status: "queued" | "processing" | "complete" | "failed";
  createdAt: string;
  videos: { id: string; label: string; url: string | null }[];
}

// In-memory store for demo purposes
const jobs: Map<string, Job> = new Map([
  [
    "gen_001",
    {
      id: "gen_001",
      productName: "GlowSerum Pro",
      status: "complete",
      createdAt: "2026-03-14T10:00:00Z",
      videos: [
        { id: "v1", label: "Hook A — Unboxing", url: null },
        { id: "v2", label: "Hook B — Testimonial", url: null },
        { id: "v3", label: "Hook C — Before/After", url: null },
      ],
    },
  ],
  [
    "gen_002",
    {
      id: "gen_002",
      productName: "FitBlend Shaker",
      status: "processing",
      createdAt: "2026-03-15T14:30:00Z",
      videos: [
        { id: "v4", label: "Hook A", url: null },
        { id: "v5", label: "Hook B", url: null },
        { id: "v6", label: "Hook C", url: null },
      ],
    },
  ],
]);

export async function GET(req: NextRequest) {
  const jobId = req.nextUrl.searchParams.get("id");

  if (jobId) {
    const job = jobs.get(jobId);
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
    return NextResponse.json(job);
  }

  // Return all jobs
  return NextResponse.json(Array.from(jobs.values()));
}

export async function POST(req: NextRequest) {
  try {
    const { productName } = await req.json();

    if (!productName) {
      return NextResponse.json(
        { error: "Product name is required" },
        { status: 400 }
      );
    }

    const id = `gen_${String(jobs.size + 1).padStart(3, "0")}`;
    const job: Job = {
      id,
      productName,
      status: "queued",
      createdAt: new Date().toISOString(),
      videos: [
        { id: `${id}_v1`, label: "Hook A", url: null },
        { id: `${id}_v2`, label: "Hook B", url: null },
        { id: `${id}_v3`, label: "Hook C", url: null },
      ],
    };

    jobs.set(id, job);

    return NextResponse.json(job, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}
