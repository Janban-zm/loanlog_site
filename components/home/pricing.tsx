"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";
import Link from "next/link";

type PricingPlan = {
  name: string;
  price: string;
  color: string;
  features: (string | React.ReactNode)[];
};

const pricingPlans: PricingPlan[] = [
  {
    name: "LoanLite",
    price: "K200/month",
    color: "text-blue-600",
    features: [
      "Single Admin",
      "Unlimited Agents",
      "Core Functionality",
      "Standard Support (8am–5pm)",
    ],
  },
  {
    name: "LoanCore",
    price: "K300/month",
    color: "text-green-600",
    features: [
      "Single Admin",
      "Unlimited Agents",
      "2 Dashboard Admins",
      "Core Functionality",
      "24/7 Support",
    ],
  },
  {
    name: "LoanPro",
    price: "K600/month",
    color: "text-purple-600",
    features: [
      "Unlimited Admins",
      "Unlimited Dashboard Admins",
      "Unlimited Agents",
      "Email Alerts (Due Dates)",
      "Priority Support",
      "Feature Requests",
      "Frequent Updates",
      "Reports & download",
    ],
  },
  {
    name: "LoanForge",
    price: "K8000 one-time",
    color: "text-yellow-600",
    features: [
      "All LoanPro Features Included",
      "Custom Branding",
      "Domain (If Hosted)",
      "No Feature Requests if Self-Hosted",
      <span key="hosting">
        <b className="text-blue-500">K360</b>/month for Hosting & Maintenance
      </span>,
    ],
  },
];

export function Pricing() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={index}
          className="border p-6 rounded-2xl shadow-sm bg-white hover:shadow-lg transition-all flex flex-col justify-between h-full min-h-[400px] backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
        >
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${plan.color}`}>
              {plan.name}
            </h3>
            <p className="text-2xl font-bold text-gray-900 mb-4">
              <span className="text-base font-medium text-gray-500">
                Starting at{" "}
              </span>
              {plan.price}
            </p>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 text-sm"
                >
                  <Check className="text-blue-500 w-4 h-4 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href={"/Contacts"}>
            <Button className="w-full mt-6">Get Started</Button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
