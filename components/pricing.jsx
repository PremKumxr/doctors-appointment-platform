// components/pricing.jsx
"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Consultation",
    price: "$25",
    duration: "30 min video call",
    features: ["General Check-up", "Digital Notes", "One-time Visit"],
    popular: false,
  },
  {
    name: "Standard Care",
    price: "$50",
    duration: "60 min video call",
    features: ["Full Diagnosis", "Prescription", "Follow-up Email", "Lab Guidance"],
    popular: true,
  },
  {
    name: "Specialist Visit",
    price: "$80",
    duration: "45 min video call",
    features: ["Specialist Access", "Detailed Report", "2-Day Follow-up", "Priority Scheduling"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg border ${
                plan.popular
                  ? "border-emerald-500 bg-emerald-950/40 shadow-emerald-500/20 shadow-md transform scale-105"
                  : "border-gray-800 bg-gray-900/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-2xl font-bold text-emerald-300 mb-1">{plan.price}</div>
              <div className="text-sm text-gray-400 mb-4">{plan.duration}</div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <Check className="h-4 w-4 mr-2 text-emerald-500" /> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded text-sm font-medium transition
                  ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
                  }
                `}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}