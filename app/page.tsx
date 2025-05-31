import Accordion from "@/components/common/accordion";
import { Hero } from "@/components/home/hero ";
import { WhyChoose } from "@/components/home/why_choose_us";
import { Features } from "@/components/home/features";
import { Pricing } from "@/components/home/pricing";

const faqItems = [
  {
    question: "What is Loan Log?",
    answer:
      "Loan Log is a loan management system designed for small to medium-sized lending businesses. It helps you track clients, manage repayments, and organize your operations effectively.",
  },
  {
    question: "How do I get started with Loan Log?",
    answer:
      "To get started, simply submit a request through our website. We'll then set up an instance tailored to your business size and selected payment plan.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No. Loan Log is cloud-based, so you can access it directly from your browser without installing anything.",
  },
  {
    question: "Can I customize Loan Log for my business?",
    answer:
      "Customization is available for Premium and Full Purchase plans. These allow in-depth modifications to suit your workflows, branding, and special features.",
  },
  {
    question: "What are the available payment options?",
    answer:
      "Loan Log offers four plans: Basic, Standard, Premium, and Full Purchase. Each plan provides different levels of access, features, and support.",
  },
  {
    question: "Is there a trial or demo version?",
    answer:
      "Yes. We provide a limited-time demo so you can explore the platform before committing to a plan.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <header className="w-full bg-blue-50">
        <Hero />
      </header>
      <main className="w-full flex flex-col justify-center items-center gap-16">
        <section className="lg:w-[70vw] p-4 lg:p-8">
          <WhyChoose />
        </section>
        <section id="Features" className="w-full p-4 lg:w-[60vw]">
          <div className="w-full text-center lg:text-end px-4 flex flex-col items-center lg:items-end">
            <h2 className="text-xl lg:text-3xl font-bold max-w-xl text-blue-900">
              Tools that power smarter, faster lending
            </h2>
            <p className="mt-2 text-gray-600 text-sm lg:text-lg lg:text-end">
              From automated calculations to downloadable reports, our system is
              built to streamline every step of the loan process — so you can
              focus more on growth, not admin.
            </p>
          </div>
          <Features />
        </section>
        <section
          id="Prices"
          className="w-full bg-blue-400 flex flex-col justify-center items-center p-4"
        >
          <div className="w-full lg:w-[70vw] text-center lg:text-start px-4 flex flex-col items-center lg:items-start">
            <h2 className="text-xl lg:text-3xl font-bold max-w-xl text-white">
              Flexible Pricing for Every Growth Stage
            </h2>
            <p className="mt-2 text-gray-200 text-sm lg:text-lg lg:text-start">
              Whether you are just getting started or scaling fast, our plans
              are designed to meet your needs — with powerful tools, support,
              and features tailored to how you work.
            </p>
          </div>

          <Pricing />
        </section>
        <section id="Faq" className="w-full lg:w-[70vw] p-4 lg:p-8">
          <h2 className="text-center text-xl font-bold mb-10 text-blue-950">
            Frequently Asked Question
          </h2>
          <Accordion items={faqItems} />
        </section>
      </main>
    </div>
  );
}
