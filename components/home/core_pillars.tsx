"use client";

import { motion } from "framer-motion";

export function CoreSection() {
  return (
    <div className="w-full flex flex-col">
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Feature 1 – Access from Anywhere */}
        <motion.span
          className="w-full relative p-5 lg:p-16 flex items-center bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(onthemove.webp)` }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Gradient Overlay */}
          <span
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to right, #fff 20%, transparent)",
            }}
          ></span>

          <div className="w-full flex flex-col justify-between items-start min-h-80 gap-5 text-blue-950 relative z-10">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Access from Anywhere</h2>
              <p className="max-w-[550px]">
                Manage loans, agents, and repayments anytime, anywhere. Stay in
                full control even when you’re on the move.
              </p>
            </section>
          </div>
        </motion.span>

        {/* Feature 2 – Make Agents Accountable */}
        <motion.span
          className="w-full relative p-5 lg:p-16 flex items-center bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(deals.jpg)` }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to right, #fff 20%, transparent)",
            }}
          ></span>

          <div className="w-full flex flex-col justify-between items-start min-h-80 gap-5 text-blue-950 relative z-10">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Make Agents Accountable</h2>
              <p className="max-w-[550px] ">
                Eliminate mismanagement with real-time agent tracking and full
                accountability for every repayment.
              </p>
            </section>
          </div>
        </motion.span>
      </section>

      {/* Feature 3 – Smart Decision Tools */}
      <motion.section
        className="w-full relative p-5 lg:p-16 flex items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(Kpis.jpg)` }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <span
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to right, #fff 40%, transparent)",
          }}
        ></span>

        <div className="w-full flex flex-col justify-between items-start min-h-80 gap-5 text-blue-950 relative z-10">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Smart Decision Tools</h2>
            <p className="max-w-[550px]">
              Use real-time KPIs and dashboards to make clear business decisions
              and stay ahead of repayment risks.
            </p>
          </section>
        </div>
      </motion.section>
    </div>
  );
}
