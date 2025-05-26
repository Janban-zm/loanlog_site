import Accordion from "@/components/common/accordion";
import { Hero } from "@/components/home/hero ";
import { WhyChoose } from "@/components/home/why_choose_us";

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
  {
    question: "Is my data safe on Loan Log?",
    answer:
      "Yes. We prioritize your data's security using modern encryption and cloud security practices to ensure your information is always protected.",
  },
  {
    question: "What kind of support do I receive?",
    answer:
      "Support depends on your plan. All users receive basic support, while Premium and Full Purchase clients enjoy priority support and onboarding assistance.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <header className="w-full bg-blue-50">
        <Hero />
      </header>
      <main className="w-full flex flex-col justify-center items-center gap-16 sm:p-20">
        <section className="lg:w-[70vw]">
          <WhyChoose />
        </section>
        <section id="Faq" className="lg:w-[60vw]">
          <h2 className="text-center text-sm lg:text-lg font-bold mb-10">
            Frequently Asked Question
          </h2>
          <Accordion items={faqItems} />
        </section>
      </main>
    </div>
  );
}
