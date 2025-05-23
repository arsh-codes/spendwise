import {
  ActivitySquare,
  Download,
  FileBarChart2,
  PiggyBank,
  Repeat,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";

import { Link } from "react-router";

const Features = () => {
  return (
    <section className="min-h-[auto] bg-neutral-50 px-6 py-16 md:min-h-screen md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-emerald-600 sm:text-4xl md:text-5xl">
          Powerful Features to Track Your Spending
        </h1>
        <p className="mx-auto mb-12 max-w-3xl px-2 text-base text-neutral-700 sm:px-0 sm:text-lg md:text-xl">
          Everything you need to take control of your finances with confidence —
          simple, smart, and secure.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12 lg:grid-cols-4">
          <FeatureCard
            icon={<ActivitySquare className="h-10 w-10 text-emerald-600" />}
            title="Real-time Expense Tracking"
            description="Instantly record and monitor your expenses with a simple and seamless interface."
          />
          <FeatureCard
            icon={<PiggyBank className="h-10 w-10 text-emerald-600" />}
            title="Automated Budgeting"
            description="Set smart budgets and receive real-time alerts when you overspend or meet your goals."
          />
          <FeatureCard
            icon={<FileBarChart2 className="h-10 w-10 text-emerald-600" />}
            title="Insightful Reports"
            description="Beautiful graphs and detailed reports to analyze your spending habits over time."
          />
          <FeatureCard
            icon={<Repeat className="h-10 w-10 text-emerald-600" />}
            title="Recurring Expense Tracking"
            description="Automatically track subscriptions and regular payments without lifting a finger."
          />
          <FeatureCard
            icon={<Download className="h-10 w-10 text-emerald-600" />}
            title="Data Export"
            description="Easily export your financial data for backup or use in other apps."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-10 w-10 text-emerald-600" />}
            title="Secure & Private"
            description="Your data is encrypted and secure with industry-standard privacy practices."
          />
          <FeatureCard
            icon={<UserCheck className="h-10 w-10 text-emerald-600" />}
            title="Personalized Insights"
            description="Get tailored tips and advice based on your spending patterns."
          />
          <FeatureCard
            icon={<TrendingUp className="h-10 w-10 text-emerald-600" />}
            title="Spending Trends"
            description="Visualize your financial progress with clear and interactive trend analysis."
          />
        </div>

        <div className="mx-auto mt-20 max-w-4xl px-4 text-center sm:px-0">
          <h3 className="mb-4 text-xl font-semibold tracking-wide text-emerald-700 sm:text-2xl md:text-3xl">
            More reasons to love SpendWise
          </h3>
          <p className="mb-8 px-2 text-base text-neutral-700 sm:px-0 sm:text-lg md:text-xl">
            From recurring expense tracking and data export to multi-device
            sync, SpendWise keeps you financially sharp across all aspects.
          </p>

          <Link to="/signup">
            <button className="inline-block rounded-lg bg-emerald-600 px-7 py-3 font-semibold text-white shadow-lg transition-transform hover:bg-emerald-700 active:scale-95 sm:px-8 sm:py-4">
              Get Started for Free
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative floating circles */}
      <div className="pointer-events-none fixed top-16 left-8 hidden h-24 w-24 animate-pulse rounded-full bg-emerald-100 opacity-20 blur-3xl md:block"></div>
      <div className="pointer-events-none fixed right-16 bottom-24 hidden h-32 w-32 animate-pulse rounded-full bg-emerald-200 opacity-10 blur-2xl lg:block"></div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex cursor-default flex-col items-center rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl sm:min-w-[250px] sm:p-8">
    <div className="mb-4">{icon}</div>
    <h2 className="mb-2 text-lg font-semibold text-emerald-600 sm:text-xl">
      {title}
    </h2>
    <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
      {description}
    </p>
  </div>
);

export default Features;
