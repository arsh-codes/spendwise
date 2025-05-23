import { BarChart3, Check, PieChart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-28 text-center md:px-12 md:py-32 lg:py-40">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight leading-tight sm:text-5xl sm:leading-tight lg:text-6xl">
          Smarter Expense Tracking with{" "}
          <span className="text-emerald-600">SpendWise</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-neutral-600 sm:text-xl">
          Track your expenses, manage your budget, and take control of your financial life.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Link to="/signup">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </Button>
          </Link>
          <Link to="/features">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-neutral-50 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Features to Empower Your Budget</h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to track spending and make better financial decisions.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-emerald-600" />}
            title="Real-Time Analytics"
            description="Visualize your expenses with clear and intuitive charts."
          />
          <FeatureCard
            icon={<PieChart className="h-10 w-10 text-emerald-600" />}
            title="Category Breakdown"
            description="Understand where your money goes with detailed categorization."
          />
          <FeatureCard
            icon={<Check className="h-10 w-10 text-emerald-600" />}
            title="Secure & Private"
            description="Your data is encrypted and privacy is our top priority."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-600 px-6 py-20 text-center text-white md:px-12 md:py-24">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Ready to manage your money smarter?
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg">
          Join thousands of users who trust SpendWise to track their finances.
        </p>
        <Link to="/signup">
          <Button className="mt-8 bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-transform active:scale-95">
            Get Started
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} SpendWise. All rights reserved.
      </footer>
    </div>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center px-4 sm:px-6">
    <div className="mb-5">{icon}</div>
    <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
    <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xs sm:max-w-sm mx-auto leading-relaxed">
      {description}
    </p>
  </div>
);
