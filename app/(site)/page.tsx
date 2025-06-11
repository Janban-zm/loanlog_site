import { Hero } from "@/components/home/hero ";
import { WhyChoose } from "@/components/home/why_choose_us";
import { Features } from "@/components/home/features";
import { Pricing } from "@/components/home/pricing";
import { CoreSection } from "@/components/home/core_pillars";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-h-max flex flex-col justify-center items-center bg-white">
        <section className="w-full  z-20">
          <Hero />
        </section>

        <section className="lg:w-[70vw] p-4 mb-20 -mt-20 z-30">
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
          className="w-full bg-blue-950 flex flex-col justify-center items-center py-10 px-4"
        >
          <div className="w-full lg:w-[65vw] text-center px-4 flex flex-col items-center">
            <h2 className="text-xl lg:text-4xl font-bold max-w-xl text-white text-center">
              Flexible pricing that grows with you
              <span className="text-blue-400">
                — so you can focus on your business.
              </span>
            </h2>
            <p className="mt-2 text-gray-200 text-sm lg:text-lg text-center">
              Simple pricing, built for any stage — with the tools and support
              you need. Need something custom?{" "}
              <Link href={"/Contacts"} className="text-blue-400">
                Let’s talk!{" "}
              </Link>
            </p>
          </div>

          <Pricing />
          <Link href={"mailto:support@loanlytix.com"}>
            <Button className="w-full mt-6 bg-blue-300 hover:bg-blue-500 text-blue-950 hover:text-white">
              Get a Custom Plan
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
