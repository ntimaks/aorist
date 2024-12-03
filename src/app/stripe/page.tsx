"use client";

import CheckoutPage from "../../components/CheckoutPage";
import convertToSubcurrency from "i/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {
    const amount = 49.99;

    return (
        <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 bg-black ">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
                <h2 className="text-2xl">
                    has requested
                    <span className="font-bold"> ${amount}</span>
                </h2>
            </div>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubcurrency(amount),
                    currency: "usd",
                    appearance: {
                        theme: 'stripe',
                        variables: {
                            colorPrimary: '#000000',
                            colorText: '#000000',
                        },
                    },
                }}
            >
                <CheckoutPage amount={amount} />
            </Elements>
        </main>
    );
}