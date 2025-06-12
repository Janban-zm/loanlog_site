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
    price: "K250",
    color: "text-blue-300",
    features: [
      "Single Super Admin",
      "Unlimited Agents",
      "Core Functionality",
      "Standard Support (8am–5pm)",
    ],
  },
  {
    name: "LoanCore",
    price: "K500",
    color: "text-blue-500",
    features: [
      "Single Super Admin",
      "Unlimited Admins",
      "Unlimited Agents",
      "Core Functionality",
      "Priority Support",
    ],
  },
  {
    name: "LoanPro",
    price: "K1200",
    color: "text-blue-9s00",
    features: [
      "Unlimited Super Admins",
      "Unlimited Admins",
      "Unlimited Agents",
      "Email Alerts (Due Dates)",
      "Priority Support",
      "Feature Requests",
      "Frequent Updates",
      "Reports & download",
    ],
  },
];

export function Pricing() {
  return (
    <div className="w-full md:w-[70vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
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
          <div className="w-full h-full flex flex-col justify-start gap-10">
            <span>
              <h3
                className={`text-xl text-center uppercase font-semibold ${plan.color}`}
              >
                {plan.name}
              </h3>
            </span>

            <span>
              <p className="text-2xl font-bold text-gray-900">
                {plan.price}
                <span className="text-xs text-gray-500">/month</span>
              </p>
              <Link href={"/Contacts"}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </span>

            <ul className="space-y-2">
              <hr className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent border-none " />
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
        </motion.div>
      ))}
    </div>
  );
}
