"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const data = {
  title: "Stop Losing Money to Poor Loan Tracking",
  description:
    "LoanLytix gives small lenders full control over agents, repayments, and client accounts — eliminating mismanagement and helping you grow with confidence, all from one simple platform.",
  link_One: "/Documentation",
  link_Two: "/Contacts",
  image_Url: "/loanlog.png",
  image_alt: "Loan Log Dashboard Preview",
};

const parts = data.title.split(/(Losing Money|Poor Loan)/);

export function Hero() {
  return (
    <div className="w-full bg-[url('/bg.svg')] bg-cover bg-center h-max p-4 flex justify-center items-center">
      <div className="h-max w-full lg:w-[70vw] grid grid-cols-1 justify-center items-center gap-4 mt-20 mb-10">
        {/* Text Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center items-center gap-10"
        >
          <div className="w-full space-y-4 lg:w-[50vw]">
            <h1 className="text-center  text-5xl font-bold text-blue-950">
              {parts.map((part, i) => {
                if (part === "Losing Money") {
                  return (
                    <span key={i} className="text-blue-500 relative">
                      {part}
                    </span>
                  );
                } else if (part === "Poor Loan") {
                  return (
                    <span key={i} className="text-blue-500 relative">
                      {part}
                    </span>
                  );
                } else {
                  return <span key={i}>{part}</span>;
                }
              })}
            </h1>
            <p className="text-center text-gray-800 lg:text-lg">
              {data.description}
            </p>
          </div>

          <div className="w-full flex gap-2 max-w-max justify-center items-center">
            <Button asChild>
              <Link href={data.link_One}>Documentation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={data.link_Two}>Contact Sales</Link>
            </Button>
          </div>
        </motion.section>

        {/* Image Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center items-center gap-10"
        >
          <div className="lg:max-w-[60vw] max-w-[80vw] relative border rounded-md p-2 bg-gray-900">
            <Image
              src={data.image_Url}
              alt={data.image_alt}
              width={1080}
              height={675}
              className="w-full h-auto rounded-lg shadow-lg "
              priority
            />
            {/* Stronger and longer fade to white */}
            <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none rounded-b transition-all" />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
