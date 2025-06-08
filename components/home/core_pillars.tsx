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
          {/* Gradient Overlay: Solid blue → Transparent right */}
          <span
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to right, #fff 20%, transparent)",
            }}
          ></span>

          <div className="w-full flex flex-col justify-between items-start min-h-80 gap-5 text-blue-950 relative z-10">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Access from Anywhere</h2>
              <p className="max-w-[550px] ">
                Stay connected and manage your loan data from anywhere. LoanLog
                is fully cloud-based, ensuring speed and reliability on all
                devices.
              </p>
            </section>
          </div>
        </motion.span>

        {/* Feature 2 – Scales with Your Business */}
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
              <h2 className="text-3xl font-bold">Scales with Your Business</h2>
              <p className="max-w-[550px] ">
                From small teams to enterprise operations, LoanLog adapts to
                your workflow. Add users, track more data, and expand without
                limitations.
              </p>
            </section>
          </div>
        </motion.span>
      </section>

      {/* Feature 3 – Modern Decision Tools */}
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
            <h2 className="text-3xl font-bold">Modern Decision Tools</h2>
            <p className="max-w-[550px]">
              Get instant access to powerful KPIs and smart dashboards. Make
              better financial decisions, faster — based on real-time loan and
              customer data.
            </p>
          </section>
        </div>
      </motion.section>
    </div>
  );
}
