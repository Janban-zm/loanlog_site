import Form from "@/components/common/form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+(260) 771-923-958 ",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "Chilanzi11037@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Kitwe, Zambia",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <header
        className={
          "text-center w-full bg-white bg-[url('/bg.svg')] bg-cover bg-center"
        }
      >
        <section
          className={
            "flex flex-col text-white justify-center items-center h-[30dvh] lg:h-[25dvh]"
          }
        >
          <h1 className={"text-3xl font-black text-blue-950"}>Contacts</h1>
          <p className={"text-lg lg:text-xl  text-center text-blue-400"}>
            Get in touch
          </p>
        </section>
      </header>

      {/* Main Content */}
      <section className="py-10 px-4 md:px-12 max-w-7xl mx-auto max-h-max -mt-20 bg-white rounded-sm mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* right Section - Contact Form */}
          <div className="w-full bg-transparent p-2 md:p-8">
            <Form />
          </div>
          {/* left Section - Intro & Contact Info */}
          <div className="space-y-10 pt-4">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-blue-950">
                Let’s Talk Loans & Lending
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Have questions about how LoanLog works, pricing, or
                partnerships? Our team is here to help. Reach out through the
                form or connect with us directly using the details below.
              </p>
            </div>

            <div className="rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-medium text-gray-800 mb-6">
                Contact Us
              </h3>
              <ul className="space-y-6">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Icon className="text-blue-600 w-5 h-5 shrink-0" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          {item.label}
                        </p>
                        <span className="text-gray-700 text-base">
                          {item.value}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
