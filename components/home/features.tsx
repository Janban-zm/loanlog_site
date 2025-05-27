"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Let the system do the math",
    title2: "Calculations",
    value: "loan-calculations",
    description:
      "Disburse loans with accurate interest, repayment, and fee calculations — no spreadsheets or manual work required.",
    image: "/calculations.svg",
  },
  {
    title: "Never miss a due date again",
    title2: "Penalties",
    value: "default-penalty",
    description:
      "Track overdue loans and apply penalties automatically, helping you enforce repayment rules without extra admin effort.",
    image: "/reminder.svg",
  },
  {
    title: "Stay in touch at the right time",
    title2: "Reminders",
    value: "email-reminders",
    description:
      "Automatically send reminder emails for upcoming due dates and defaulted loans to keep borrowers in the loop.",
    image: "/email.svg",
  },
  {
    title: "Reward good borrowers",
    title2: "Rewards",
    value: "client-credit",
    description:
      "Build and track individual borrower credit scores to encourage repayment discipline and offer better rates to loyal clients.",
    image: "/credit.svg",
  },
  {
    title: "Export your data",
    title2: "Download CSV",
    value: "download-reports",
    description:
      "Easily download repayment histories, client profiles, and loan performance data in CSV format — perfect for analysis, audits, or sharing with stakeholders.",
    image: "/download.svg",
  },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export function Features() {
  return (
    <div className="w-full px-4 py-8 flex justify-center items-center">
      <Tabs
        defaultValue={features[0].value}
        className="w-full max-w-6xl flex flex-col justify-center items-center"
      >
        <TabsList className="flex flex-wrap gap-2 justify-center mb-6 w-max">
          {features.map((feature) => (
            <TabsTrigger
              key={feature.value}
              value={feature.value}
              className="text-sm md:text-base px-3 py-1"
            >
              {feature.title2}
            </TabsTrigger>
          ))}
        </TabsList>

        {features.map((feature) => (
          <TabsContent
            key={feature.value}
            value={feature.value}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
          >
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 text-center lg:text-left"
            >
              <div>
                <h3 className="uppercase text-blue-700 text-xs tracking-wide">
                  {feature.value}
                </h3>
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-950">
                  {feature.title}
                </h2>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
