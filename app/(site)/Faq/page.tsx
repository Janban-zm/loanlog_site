import Accordion from "@/components/common/accordion";

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

export default function FaqPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <header
        className={
          "text-center w-full  bg-[url('/bg.svg')] bg-cover bg-center"
        }>
        <section
          className={
            "flex flex-col text-white justify-center items-center h-[30dvh] lg:h-[25dvh]"
          }>
          <h1 className={"text-3xl font-black text-blue-950"}>FAQs</h1>
          <p className={"text-lg lg:text-xl  text-center text-blue-400"}>
            frequently asked questions
          </p>
        </section>
      </header>

      {/* Main Content */}
      <section className="py-10 px-4 md:px-12 max-w-7xl mx-auto max-h-max my-5 bg-white rounded-sm">
        {" "}
        <Accordion items={faqItems} />
      </section>
    </div>
  );
}
