import Form from "@/components/common/form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+(260) 964 - 575 - 072 ",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "therebelzplus@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Lusaka | Kitwe, Zambia",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <header className={"text-center w-full bg-gray-900"}>
        <section
          className={
            "flex flex-col text-white justify-center items-center h-[30dvh]"
          }
        >
          <h1 className={"text-3xl font-black"}>Contacts</h1>
          <p className={"text-xm lg:text-xl  text-center text-blue-400"}>
            Get in touch
          </p>
        </section>
      </header>

      {/* Main Content */}
      <section className="py-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* left Section - Intro & Contact Info */}
          <div className="space-y-10 pt-4">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                We will love to hear from you
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Whether you are curious about our work, want to collaborate, or
                just want to say hello — we are always open to conversations.
                Reach out via the form or directly through any of the details
                below.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-medium text-gray-800 mb-6">
                Contact Information
              </h3>
              <ul className="space-y-6">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Icon className="text-blue-600 w-5 h-5 shrink-0" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          {item.label}
                        </p>
                        <span className="text-gray-700 text-base md:text-lg">
                          {item.value}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* right Section - Contact Form */}
          <div className="w-full bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a message
            </h2>
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
}
