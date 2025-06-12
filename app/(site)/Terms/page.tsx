"use client";
import { motion } from "framer-motion";

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

export default function termsPage() {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.header
        className="text-center w-full bg-white bg-[url('/bg.svg')] bg-cover bg-center"
        variants={itemVariants}
      >
        <section className="flex flex-col text-white justify-center items-center h-[30dvh] lg:h-[25dvh]">
          <h1 className="text-3xl font-black text-blue-950">Terms Of Use</h1>
          <p className="text-lg lg:text-xl text-center text-blue-400">
            Terms and Conditions
          </p>
        </section>
      </motion.header>

      {/* Content */}
      <motion.div className="mx-auto p-6" variants={itemVariants}>
        <section>
          <main className="space-y-6 lg:max-w-[60vw] p-5">
            <motion.section className="mb-6" variants={itemVariants}>
              <h2 className="text-xl font-semibold">
                1. Subscription-Based Usage
              </h2>
              <p>
                Monthly subscribers are granted a{" "}
                <strong>non-transferable license</strong> to use the software.
                No customization or branding requests are allowed under this
                model. Hosting and updates are managed by the developer.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={itemVariants}>
              <h2 className="text-xl font-semibold">
                2. Leasing (6-Months or More)
              </h2>
              <p>
                Clients leasing the software for 6 months or more are eligible
                for <strong>branding customizations</strong> (such as logo and
                colors). Core features cannot be changed. Maintenance and
                support included based on the plan selected.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={itemVariants}>
              <h2 className="text-xl font-semibold">
                3. Full Purchase & Ownership
              </h2>
              <p>
                Full ownership grants exclusive use rights to the buyer. This
                includes:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Branding customization</li>
                <li>All premium features</li>
                <li>Hosted option with updates (K360/month)</li>
                <li>Self-hosting allowed but no feature updates</li>
              </ul>
              <p>
                <strong>Resale is strictly prohibited</strong> without a
                separate licensing agreement.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={itemVariants}>
              <h2 className="text-xl font-semibold">
                4. Restrictions & Prohibited Use
              </h2>
              <ul className="list-disc list-inside mt-2">
                <li>Reverse-engineering or redistribution without approval</li>
                <li>Usage by unauthorized third parties</li>
                <li>Reselling without a proper license agreement</li>
              </ul>
            </motion.section>

            <motion.section className="mb-6" variants={itemVariants}>
              <h2 className="text-xl font-semibold">5. Support & Updates</h2>
              <p>
                Support is tied to the specific plan. Premium and Hosted
                Purchase plans get priority support and regular updates.
                Self-hosted purchases receive no future updates or feature
                requests unless re-enrolled in hosting.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={itemVariants}>
              <h2 className="text-xl font-semibold">
                6. Contact for Resale or Licensing
              </h2>
              <p>
                For partnerships, reselling, or white-labeling, email:
                <a
                  href="mailto:Chilanzi11037@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  {" "}
                  support@loanlytix.com
                </a>
              </p>
            </motion.section>
          </main>
        </section>
      </motion.div>
    </motion.div>
  );
}
