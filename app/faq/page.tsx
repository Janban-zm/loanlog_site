import Faq from "@/components/common/accordion";

const faqItems = [
  {
    question: "What is the purpose of this website?",
    answer: "This website is dedicated to sharing and streaming poetry events.",
  },
  {
    question: "How can I participate in events?",
    answer:
      "You can participate by signing up and attending our scheduled live streams and readings.",
  },
  {
    question: "Can I contribute my own poetry?",
    answer:
      "Absolutely! We welcome submissions and collaborations from poets around the world.",
  },
  {
    question: "Do I need an account to watch poetry readings?",
    answer:
      "Yes,you can watch public events without an account. However, signing up allows you to access exclusive content.",
  },
  {
    question: "Can I download poetry readings to watch later?",
    answer:
      "At the moment, we offer on-demand streaming, but downloads may be available for premium users in the future.",
  },
  {
    question: "Are there poetry competitions or open mic nights?",
    answer:
      "Yes! We regularly host poetry competitions and open mic sessions where poets can showcase their talent to a live audience.",
  },
  {
    question: "Is there a subscription fee to access the platform?",
    answer:
      "Our platform offers free and premium membership options. Free users can access live events, while premium members enjoy exclusive content and features.",
  },
];

export default function Faqpage() {
  return (
    <div className={"w-full flex flex-col"}>
      <header className={"text-center w-full bg-gray-900"}>
        <section
          className={
            "flex flex-col text-white justify-center items-center h-[30dvh]"
          }
        >
          <h1 className={"text-3xl font-black"}>FAQs</h1>
          <p className={"text-xm lg:text-xl  text-center text-blue-400"}>
            Frequently Asked Questions
          </p>
        </section>
      </header>

      <main className={" w-full flex flex-col justify-center items-center p-2"}>
        <section className={"w-full lg:w-2/3 my-10"}>
          <Faq items={faqItems} />
        </section>
      </main>
    </div>
  );
}
