import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Bunch - terms of use",
  description: "the terms of use for this web app ",
};

const TermsOfUse = () => {
  return (
    <div className="w-full h-full flex justify-center items-center my-16">
      <div className=" mx-auto p-6 ">
        <header className="flex flex-col justify-center items-center space-y-2 mb-5">
          <h1 className="text-3xl font-bold mb-4 text-center">Terms of Use</h1>
        </header>
        <section className="mt-10">
          <main className="space-y-6 lg:max-w-[50vw]">
            <section className="mb-6">
              <h2 className="text-xl font-semibold">
                1. Subscription-Based Usage
              </h2>
              <p>
                Monthly subscribers are granted a{" "}
                <strong>non-transferable license</strong> to use the software.
                No customization or branding requests are allowed under this
                model. Hosting and updates are managed by the developer.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold">
                2. Leasing (6-Months or More)
              </h2>
              <p>
                Clients leasing the software for 6 months or more are eligible
                for <strong>branding customizations</strong> (such as logo and
                colors). Core features cannot be changed. Maintenance and
                support included based on the plan selected.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold">
                3. Full Purchase & Ownership
              </h2>
              <p>
                Full ownership grants exclusive use rights to the buyer. This
                includes:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Branding customization</li>
                <li>All premium features</li>
                <li>Hosted option with updates (K360/month)</li>
                <li>Self-hosting allowed but no feature updates</li>
              </ul>
              <p>
                <strong>Resale is strictly prohibited</strong> without a
                separate licensing agreement.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold">
                4. Restrictions & Prohibited Use
              </h2>
              <ul className="list-disc list-inside mt-2">
                <li>Reverse-engineering or redistribution without approval</li>
                <li>Usage by unauthorized third parties</li>
                <li>Reselling without a proper license agreement</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold">5. Support & Updates</h2>
              <p>
                Support is tied to the specific plan. Premium and Hosted
                Purchase plans get priority support and regular updates.
                Self-hosted purchases receive no future updates or feature
                requests unless re-enrolled in hosting.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold">
                6. Contact for Resale or Licensing
              </h2>
              <p>
                For partnerships, reselling, or white-labeling, email:
                <a
                  href="mailto:Chilanzi11037@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  {" "}
                  Chilanzi11037@gmail.com
                </a>
              </p>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
