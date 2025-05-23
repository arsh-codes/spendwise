import { DollarSign, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold">SpendWise</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            <Link
              to="/features"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" size="sm">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">Sign up</Button>
            </Link>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="mt-8 flex flex-col gap-4">
              <Link
                to="/features"
                className="text-sm font-medium hover:text-neutral-900"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-sm font-medium hover:text-neutral-900"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-neutral-900"
              >
                About
              </Link>
              <Separator />
              <Link to="/login">
                <Button variant="outline" className="justify-start">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button className="justify-start">Sign up</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;