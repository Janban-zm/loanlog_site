import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";

interface LinkProps {
  name: string;
  link: string;
}

interface developerProp {
  name: string;
  link: string;
}

const newDate = new Date();
const CurrentYear = newDate.getFullYear();

const links: LinkProps[] = [
  { name: "Home", link: "/" },
  { name: "Contacts", link: "/Contacts" },
  { name: "Documentation", link: "/Documentation" },
  { name: "Features", link: "/#Features" },
  { name: "FAQs", link: "/Faq" },
  { name: "Pricing", link: "/#Prices" },
  { name: "Terms and Conditions", link: "/Terms" },
];

const developers: developerProp[] = [
  {
    name: "Chilanzi Creates",
    link: "https://github.com/Chilanzi-thirt33n",
  },
];

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-blue-950 text-slate-50 flex flex-col justify-center items-center overflow-hidden">
      <motion.div className="w-full lg:w-[70vw] flex flex-col justify-around items-center gap-6 p-4">
        <section className="w-full flex flex-col gap-6 lg:flex-row justify-center items-center lg:justify-between lg:items-start p-4">
          {/* Logo */}
          <div className="lg:self-center min-w-[250px] flex justify-center items-center gap-4">
            <Image src="/logo.svg" alt="Loanlog" width={40} height={40} />
            <h3 className="font-bold max-w-40">Loan Management System</h3>
          </div>

          {/* Links Section */}
          <div className="space-y-3 flex flex-col items-center lg:items-start">
            <h3 className="text-sm lg:text-lg font-bold text-zinc-300">
              Links
            </h3>
            <ul className="flex flex-col lg:flex-row gap-4 text-sm text-slate-300 text-center lg:text-start">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="hover:text-sky-300 hover:underline transition-colors duration-200 "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </motion.div>

      {/* Bottom Copyright */}
      <section className="w-full bg-gray-100 p-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {CurrentYear} Janban Enterprise Ltd. All rights reserved |
          Developed by{" "}
          <Link
            className="hover:underline text-blue-600"
            id="chilanzi"
            href={developers[0].link}
          >
            {developers[0].name}
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Footer;
