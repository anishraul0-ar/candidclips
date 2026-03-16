import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
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

    const stripe = getStripe();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "CandidClips — 3 UGC Video Ads",
              description: `AI-generated UGC video ads for ${productName}`,
            },
            unit_amount: 2900, // $29.00
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${appUrl}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/generate?canceled=true`,
      metadata: {
        productName,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
