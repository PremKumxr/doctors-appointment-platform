// components/pricing.jsx
import { Check } from "lucide-react";
export default function Pricing() {
  const plans = [
    {
      name: "Basic Consultation",
      price: "$25",
      duration: "30 minutes",
      features: ["General health check", "Video call", "Follow-up notes"],
      popular: false,
    },
    {
      name: "Standard Care",
      price: "$50",
      duration: "60 minutes",
      features: ["Full diagnosis", "Video call", "Prescription", "Follow-up email"],
      popular: true,
    },
    {
      name: "Specialist Visit",
      price: "$80",
      duration: "45 minutes",
      features: ["Specialist consultation", "Video call", "Report", "2-day follow-up"],
      popular: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative bg-gray-900 border rounded-lg p-6 ${
            plan.popular
              ? "border-emerald-500 shadow-lg shadow-emerald-500/10 transform scale-105"
              : "border-gray-700"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
          )}

          <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
          <div className="text-sm text-gray-400 mb-4">{plan.duration}</div>

          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center text-sm text-gray-300">
                <Check className="h-4 w-4 mr-2 text-emerald-500" /> {feature}
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-2 px-4 rounded text-sm font-medium transition ${
              plan.popular
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
            }`}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}