import { BadgeDollarSign, Layers3, TrendingUp } from "lucide-react";

import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="min-h-screen bg-neutral-50 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold text-emerald-600 sm:text-5xl">
          Simple Pricing for Everyone
        </h1>
        <p className="mx-auto mb-14 max-w-3xl text-lg text-neutral-600 sm:text-xl">
          Choose the plan that fits your needs. Start for free, upgrade anytime.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {/* Free Plan */}
          <div className="flex flex-col items-center rounded-2xl border bg-white p-8 shadow-md transition-transform hover:scale-[1.03]">
            <BadgeDollarSign className="mb-5 h-10 w-10 text-emerald-600" />
            <h2 className="text-xl font-semibold sm:text-2xl">Free</h2>
            <p className="my-3 text-4xl font-bold text-emerald-600">$0</p>
            <ul className="mt-5 space-y-3 text-left text-neutral-600 sm:text-lg">
              <li>✓ Track unlimited expenses</li>
              <li>✓ Basic budgeting tools</li>
              <li>✓ Weekly email reports</li>
            </ul>
            <Link
              to="/login"
              className="mt-8 w-full rounded-lg bg-emerald-600 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-emerald-600 bg-white p-8 shadow-xl transition-transform hover:scale-[1.05]">
            <TrendingUp className="mb-5 h-10 w-10 text-emerald-600" />
            <h2 className="text-xl font-semibold text-emerald-700 sm:text-2xl">
              Pro
            </h2>
            <p className="my-3 text-4xl font-bold text-emerald-700">$9.99/mo</p>
            <ul className="mt-5 space-y-3 text-left text-neutral-700 sm:text-lg">
              <li>✓ Everything in Free</li>
              <li>✓ Unlimited budgets</li>
              <li>✓ Smart financial insights</li>
              <li>✓ Priority support</li>
            </ul>
            <Link
              to="/login"
              className="mt-8 w-full rounded-lg bg-emerald-600 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Upgrade Now
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col items-center rounded-2xl border bg-white p-8 shadow-md transition-transform hover:scale-[1.03]">
            <Layers3 className="mb-5 h-10 w-10 text-emerald-600" />
            <h2 className="text-xl font-semibold sm:text-2xl">Enterprise</h2>
            <p className="my-3 text-4xl font-bold text-emerald-600">Custom</p>
            <ul className="mt-5 space-y-3 text-left text-neutral-600 sm:text-lg">
              <li>✓ Custom integrations</li>
              <li>✓ Team accounts</li>
              <li>✓ SLA & support</li>
            </ul>
            <Link
              to="/login"
              className="mt-8 w-full rounded-lg bg-emerald-600 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center text-base text-neutral-600 sm:text-lg">
          <p>
            All plans come with a 14-day money-back guarantee. No questions
            asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
