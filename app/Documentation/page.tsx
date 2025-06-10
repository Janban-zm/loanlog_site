// app/Documentation/page.tsx
"use client";

import Image from "next/image";

export default function DocumentationPage() {
  return (
    <div className="w-full lg:w-3/4 p-6 space-y-16 text-gray-600">
      {/* Welcome Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-blue-400">
          Welcome to the Platform
        </h1>
        <p className="text-lg leading-relaxed">
          To begin using the platform, open your Chrome browser and visit:{" "}
          <span className="text-blue-500 underline">
            https://{"YourCompanyName"}.loanlytix.com
          </span>{" "}
          or{" "}
          <span className="text-blue-500 underline">
            https://YourCompanyName.com
          </span>{" "}
          (premium users)
        </p>
        <p className="text-lg leading-relaxed">
          For the best experience, install the web app on your device. On
          Chrome, you can do this by clicking the browser menu (three dots),
          then selecting <strong>“Install App”</strong>. This enables quicker
          access and a native feel similar to mobile apps.
        </p>
        <div className="mt-3 border border-gray-700 rounded-md p-4 bg-gray-900 text-sm w-full">
          <Image
            src="/screenshots/install.png"
            alt="install webapp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <p className="mt-2 text-gray-400 text-xs">
            Screenshot: install webapp
          </p>
        </div>
        <p className="text-lg leading-relaxed">
          This comprehensive guide will assist you in navigating the platform’s
          features including registration, login, role management, and penalty
          setup. Follow each step carefully to ensure correct configuration and
          usage.
        </p>
      </section>

      {/* Register Section */}
      <section id="register" className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">1. Register</h2>
        <p className="leading-relaxed">
          Before accessing the platform’s features, every user is required to
          register an account. This step is essential for identity verification,
          secure authentication, and role assignment based on your
          responsibilities.
        </p>
        <p className="leading-relaxed">
          Registration is carried out on the login screen via the Create Account
          option, allowing new users to submit their details for approval.
          Please note that this platform does not support direct registration
          through external services such as Kinde.
        </p>
        <p className="leading-relaxed">
          There are two ways to obtain an account:
        </p>
        <ul className="list-disc pl-6 space-y-6">
          <li>
            <p>
              <strong>Admin Registration:</strong> In this method, an
              administrator manually creates your account by entering your
              personal information and assigning the appropriate user role. This
              is often used for staff or privileged users who require immediate
              access without going through the self-registration process.
            </p>
            <div className="mt-3 border border-gray-700 rounded-md p-4 bg-gray-900 text-sm w-full">
              <Image
                src="/screenshots/start.png"
                alt="Start page"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
              <p className="mt-2 text-gray-400 text-xs">
                Screenshot: Start page
              </p>
            </div>
          </li>

          <li>
            <p>
              <strong>Self Registration:</strong> If you do not have an existing
              account, you can create one yourself by selecting the Create
              Account link on the login page. After submitting your registration
              details, your account will be set to a <em>pending approval</em>{" "}
              status until it is reviewed and authorized by an administrator.
            </p>
            <div className="mt-3 border border-gray-700 rounded-md p-4 bg-gray-900 text-sm w-full">
              <Image
                src="/screenshots/register.png"
                alt="Self registration on login page"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
              <p className="mt-2 text-gray-400 text-xs">
                Screenshot: Self registration on login page
              </p>
            </div>
          </li>
        </ul>
        <p className="text-sm text-gray-400 mt-4">
          <strong>Important:</strong> Until your account is approved by an
          administrator, you will not be able to log in or access any platform
          features.
        </p>
      </section>

      {/* Login Section */}
      <section id="login" className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">2. Login</h2>
        <p className="leading-relaxed">
          After your account has been approved, you will be able to log in using
          the credentials you set during registration. The system authenticates
          your identity and grants access based on your assigned role and
          permissions.
        </p>
        <p className="leading-relaxed">
          Upon successful login, you will be redirected to your personalized
          dashboard where you can manage loans, view notifications, and adjust
          your settings.
        </p>
        <div className="mt-3 border border-gray-700 rounded-md p-4 bg-gray-900 text-sm w-full">
          <Image
            src="/screenshots/login.png"
            alt="loging in with your credentials"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <p className="mt-2 text-gray-400 text-xs">
            Screenshot: loging in with your credentials
          </p>
        </div>
      </section>
      {/* Dashbord  Section */}
      <section id="dashboard" className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">
          3. The Dashboard
        </h2>
        <p className="text-sm text-gray-400">
          <strong>Note:</strong> This is the first screen you will see after
          logging in. It provides access to key configurations and gives a
          high-level overview of the platforms loan management activity.
        </p>
        <p className="leading-relaxed">
          The dashboard acts as your control center. From here, you can monitor
          system stats, track loan statuses, and navigate to essential features
          such as client management, loan setup, and reporting tools. It’s
          designed for clarity and efficiency to help you manage everything at a
          glance.
        </p>
        <div className="mt-3 border border-gray-700 rounded-md p-4 bg-gray-900 text-sm w-full">
          <Image
            src="/screenshots/dashboard.png"
            alt="Dashboard overview"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <p className="mt-2 text-gray-400 text-xs">
            Screenshot: Dashboard overview
          </p>
        </div>
      </section>

      {/* Penalty Percentage Section */}
      <section id="penalty" className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">
          4. Set Penalty Percentage
        </h2>
        <p className="leading-relaxed">
          Setting the penalty percentage is a critical configuration step before
          initiating any loan transactions. This percentage determines the rate
          at which penalties are applied to late or missed repayments, helping
          enforce timely loan servicing.
        </p>
        <p className="italic text-sm text-gray-400 leading-relaxed">
          For example, if the penalty percentage is set to 5%, then any overdue
          payments will incur an additional 5% charge on the outstanding amount,
          calculated daily or monthly depending on platform settings.
        </p>
        <div className="mt-3 border border-gray-700 rounded-md p-4 bg-gray-900 text-sm w-full">
          <Image
            src="/screenshots/penalty.png"
            alt="Self registration on login page"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <p className="mt-2 text-gray-400 text-xs">
            Screenshot: penalty rate settigs
          </p>
        </div>
        <p className="text-sm text-gray-400">
          <strong>Note:</strong> This penalty rate applies globally and affects
          all loans created following this configuration.
        </p>
      </section>
    </div>
  );
}
