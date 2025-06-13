"use client";
import { SquareCheckBig } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Take Control Fast",
    description: "Set up quickly and stop losing track of your loans.",
    icon: SquareCheckBig,
  },
  {
    title: "Full Agent Oversight",
    description: "Track agents, repayments, and clients easily.",
    icon: SquareCheckBig,
  },
  {
    title: "Grow Simply",
    description: "Scale your lending without tech headaches.",
    icon: SquareCheckBig,
  },
];

export function WhyChoose() {
  return (
    <div className="w-full text-blue-950">
      <div className="grid gap-3 grid-cols-1 md:grid-cols-3 auto-rows-min px-4 ">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex gap-4 items-start justify-start p-4 rounded-md hover:shadow-md border border-blue-100 transition-all bg-white"
            >
              <Icon size={30} className="text-blue-600" />
              <span className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
