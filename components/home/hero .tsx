"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const data = {
  title: "Built for Growing Lenders with Big Dreams",
  description:
    "Loan Log makes loan management simple and affordable. Built for small to mid-sized lenders, it helps you onboard clients, track repayments, and grow your business — all from one smart platform.",
  link_One: "tel:+260771923958",
  link_Two: "/Contacts",
  image_Url: "/loanlog.svg",
  image_alt: "#",
};
export function Hero() {
  return (
    <div className="w-full bg-[url('/bg.svg')] bg-cover bg-center h-max p-4 flex justify-center items-center">
      <span className="h-max lg:h-[60dvh] w-full lg:w-[70vw] grid grid-cols-1 lg:grid-cols-2 gap-4 my-16">
        <section className="w-full h-full flex flex-col justify-center lg:items-start items-center gap-10">
          <span className="w-full space-y-4">
            <h1 className=" text-center lg:text-start text-4xl font-bold text-blue-950">
              {data.title}
            </h1>
            <p className="text-center lg:text-start">{data.description}</p>
          </span>
          <span className="w-full flex gap-2 max-w-max justify-center items-center">
            <Button>
              <Link href={data.link_One}>Contact Sales</Link>
            </Button>
            <Button variant={"outline"}>
              <Link href={data.link_Two}>Request Demo</Link>
            </Button>
          </span>
        </section>
        <section className="w-full h-full flex flex-col justify-center lg:items-start items-center gap-10">
          <Image
            src={data.image_Url}
            alt={data.image_alt}
            width={800}
            height={500}
            className="rounded border-2 shadow-lg border-blue-950 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:border-blue-400 transition-all"
            priority
          />
        </section>
      </span>
    </div>
  );
}
