import { ShieldCheck, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section className="relative min-h-screen bg-neutral-50 px-6 py-20 md:px-12">
      {/* Decorative floating circles for subtle background interest */}
      <div className="pointer-events-none fixed top-20 left-10 hidden h-28 w-28 animate-pulse rounded-full bg-emerald-100 opacity-20 blur-3xl md:block"></div>
      <div className="pointer-events-none fixed right-20 bottom-32 hidden h-36 w-36 animate-pulse rounded-full bg-emerald-200 opacity-10 blur-2xl lg:block"></div>

      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-emerald-600 sm:text-5xl">
          About SpendWise
        </h1>
        <p className="mx-auto mb-16 max-w-3xl text-lg text-neutral-700 sm:text-xl">
          Helping you master your money with intuitive and powerful expense
          tracking tools.
        </p>

        <div className="mb-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              icon: <TrendingUp className="h-10 w-10 text-emerald-600" />,
              title: "Empowering Growth",
              description:
                "Whether you’re saving for a goal or cutting unnecessary expenses, SpendWise equips you with the insight to make better financial decisions.",
            },
            {
              icon: <Users className="h-10 w-10 text-emerald-600" />,
              title: "Built for Everyone",
              description:
                "Students, families, freelancers—SpendWise is crafted to meet the needs of all types of spenders.",
            },
            {
              icon: <ShieldCheck className="h-10 w-10 text-emerald-600" />,
              title: "Privacy First",
              description:
                "We never sell your data. Your personal information is encrypted, secure, and always under your control.",
            },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex cursor-default flex-col items-center rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-md transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl"
            >
              <div className="mb-5">{icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-emerald-600 sm:text-2xl">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white p-12 shadow-lg sm:p-16">
          <h2 className="mb-6 text-center text-3xl font-extrabold text-neutral-800">
            Our Mission
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-center text-lg text-neutral-700 sm:text-xl">
            SpendWise was born out of a simple idea: budgeting should be
            effortless, accessible, and insightful. Too many people live
            paycheck-to-paycheck, unaware of where their money is going. We set
            out to change that.
          </p>
          <p className="mx-auto max-w-3xl text-center text-lg text-neutral-700 sm:text-xl">
            With real-time tracking, smart categorization, and insightful
            reports, SpendWise is more than a tracker—it’s a financial companion
            designed to guide you to smarter money decisions.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {[
            { value: "50K+", label: "Happy Users Worldwide" },
            { value: "$2M+", label: "Expenses Tracked Monthly" },
            { value: "99.9%", label: "Uptime & Reliability" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-3xl bg-white p-10 shadow-md transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl"
            >
              <p className="mb-2 text-5xl font-extrabold text-emerald-600 sm:text-6xl">
                {value}
              </p>
              <p className="text-lg font-medium text-neutral-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
