"use client";
import Accordion from "@/components/common/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What is Loanlytix?",
    answer:
      "Loanlytix is a loan management system designed for small to medium-sized lending businesses. It helps you track clients, manage repayments, and organize your operations effectively.",
  },
  {
    question: "How do I get started with Loanlytix?",
    answer:
      "To get started, simply submit a request through our website. We'll then contact you for further discussions ,after discussions we can set up an instance tailored to your business size and selected payment plan.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No. Loanlytix is cloud-based, so you can access it directly from your browser without installing anything.",
  },
  {
    question: "Can I customize Loanlytix for my business?",
    answer:
      "Customization is only available under custom order arrangements. Please contact us to discuss your specific needs and requirements.",
  },
  {
    question: "What are the available payment options?",
    answer:
      "Loan Log offers four plans: Basic, Standard and Premium, . Each plan provides different levels of access, features, and support.",
  },
  {
    question: "Is there a trial or demo version?",
    answer:
      "Yes.after Request We can provide a limited-time demo so you can explore the platform .",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FaqPage() {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Header */}
      <motion.header
        className="text-center w-full bg-white bg-[url('/bg.svg')] bg-cover bg-center"
        variants={itemVariants}
      >
        <section className="flex flex-col text-white justify-center items-center h-[30dvh] lg:h-[25dvh]">
          <h1 className="text-3xl font-black text-blue-950">FAQs</h1>
          <p className="text-lg lg:text-xl text-center text-blue-400">
            frequently asked questions
          </p>
        </section>
      </motion.header>

      {/* Main Content */}
      <motion.section
        className="py-10 px-4 md:px-12 max-w-7xl mx-auto max-h-max mb-20 -mt-10 bg-white rounded-sm"
        variants={itemVariants}
      >
        <Accordion items={faqItems} />
      </motion.section>
    </motion.div>
  );
}
