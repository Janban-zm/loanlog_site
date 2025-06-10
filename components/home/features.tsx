"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const featureItems = [
  {
    title: "Let the system do the math",
    label: "Calculations",
    value: "loan-calculations",
    description:
      "Disburse loans with accurate interest, repayment, and fee calculations — no spreadsheets or manual work required.",
    image: "/calculations.svg",
  },
  {
    title: "Never miss a due date again",
    label: "Penalties",
    value: "default-penalty",
    description:
      "Track overdue loans and apply penalties automatically, helping you enforce repayment rules without extra admin effort.",
    image: "/reminder.svg",
  },
  {
    title: "Stay in touch at the right time",
    label: "Reminders",
    value: "email-reminders",
    description:
      "Automatically send reminder emails for upcoming due dates and defaulted loans to keep borrowers in the loop.",
    image: "/email.svg",
  },
  {
    title: "Reward good borrowers",
    label: "Rewards",
    value: "client-credit",
    description:
      "Build and track individual borrower credit scores to encourage repayment discipline and offer better rates to loyal clients.",
    image: "/credit.svg",
  },
  {
    title: "Export your data",
    label: "Download CSV",
    value: "download-reports",
    description:
      "Easily download repayment histories, client profiles, and loan performance data in CSV format — perfect for analysis, audits, or sharing with stakeholders.",
    image: "/download.svg",
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export function Features() {
  return (
    <section className="w-full px-4 py-12 flex justify-center items-center bg-white lg:rounded-md lg:shadow-md">
      <Tabs
        defaultValue={featureItems[0].value}
        className="w-full max-w-6xl flex flex-col items-center"
      >
        <TabsList className="flex flex-wrap gap-2 justify-center mb-8 max-w-xl lg:max-w-none">
          {featureItems.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="text-sm md:text-base px-4 py-1.5 rounded-md data-[state=active]:bg-blue-100"
              aria-label={`View feature: ${item.label}`}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {featureItems.map((item) => (
          <TabsContent
            key={item.value}
            value={item.value}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full  h-[250px] md:h-[300px] bg-center bg-no-repeat bg-contain md:bg-cover mx-auto"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 text-center lg:text-left"
            >
              <span className="uppercase text-sm font-medium tracking-wide text-blue-600">
                {item.value.replace("-", " ")}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
