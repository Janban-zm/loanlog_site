import { Hero } from "@/components/home/hero ";
import { WhyChoose } from "@/components/home/why_choose_us";
import { Features } from "@/components/home/features";
import { Pricing } from "@/components/home/pricing";
import { CoreSection } from "@/components/home/core_pillars";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex flex-col justify-center items-center bg-white">
        <Hero />
        <section className="lg:w-[70vw] p-4  mb-20 -mt-20">
          <WhyChoose />
        </section>
      </header>
      <main className="w-full flex flex-col justify-center items-center">
        <section
          id="Features"
          className="w-full flex flex-col justify-center items-center p-4 lg:w-[80vw] space-y-10 my-10 "
        >
          <div className="w-full text-center  px-4 flex flex-col items-center justify-center ">
            <h2 className="text-xl lg:text-3xl font-bold max-w-xl text-blue-900">
              Emphasizes simplification and efficiency.
            </h2>
          </div>
          <Features />
        </section>
        <section id="Features" className="w-full">
          <CoreSection />
        </section>
        <section
          id="Prices"
          className="w-full bg-blue-950 flex flex-col justify-center items-center p-4 "
        >
          <div className="w-full lg:w-[50vw] text-center  px-4 flex flex-col items-center">
            <h2 className="text-xl lg:text-3xl font-bold max-w-xl text-white text-center">
              Flexible Pricing for Every Growth Stage
            </h2>
            <p className="mt-2 text-gray-200 text-sm lg:text-lg text-center">
              Whether you are just getting started or scaling fast, our plans
              are designed to meet your needs — with powerful tools, support,
              and features tailored to how you work.
            </p>
          </div>

          <Pricing />
        </section>
      </main>
    </div>
  );
}
