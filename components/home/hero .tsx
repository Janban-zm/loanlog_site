"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const data = {
  title: "Built for Growing Lenders with Big Dreams",
  description:
    "Loan Log makes loan management simple and affordable. Built for small to mid-sized lenders, it helps you onboard clients, track repayments, and grow your business — all from one smart platform.",
  link_One: "tel:+260771923958",
  link_Two: "/Contacts",
  image_Url: "/loanlog.svg",
  image_alt: "Loan Log Dashboard Preview",
};

export function Hero() {
  return (
    <div className="w-full bg-[url('/bg.svg')] bg-cover bg-center h-max p-4 flex justify-center items-center">
      <div className="h-3/4 lg:h-[60dvh] w-full lg:w-[70vw] grid grid-cols-1 justify-center items-center gap-4 my-16">
        {/* Text Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center items-center gap-10">
          <div className="w-full space-y-4 lg:w-[50vw]">
            <h1 className="text-center  text-4xl font-bold text-blue-950">
              {data.title}
            </h1>
            <p className="text-center">{data.description}</p>
          </div>

          <div className="w-full flex gap-2 max-w-max justify-center items-center">
            <Button asChild>
              <Link href={data.link_One}>Contact Sales</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={data.link_Two}>Request Demo</Link>
            </Button>
          </div>
        </motion.section>

        {/* Image Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center items-center gap-10">
          <div className="max-w-[700px]">
            <Image
              src={data.image_Url}
              alt={data.image_alt}
              width={1080}
              height={675} // Keep the same aspect ratio (16:10 or 16:9)
              className="w-full h-auto rounded border-2 shadow-lg border-blue-950 transition-all"
              priority
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
