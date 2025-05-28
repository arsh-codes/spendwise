import { DollarSign, Menu, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store"; // adjust if your store type is named differently
import { Separator } from "@/components/ui/separator";
import { logout } from "@/redux/slices/authSlice"; // make sure this action exists

const Navbar = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold text-neutral-800">SpendWise</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-neutral-700">
            <Link to="/features" className="hover:text-neutral-900">Features</Link>
            <Link to="/pricing" className="hover:text-neutral-900">Pricing</Link>
            <Link to="/about" className="hover:text-neutral-900">About</Link>
          </nav>

          <div className="flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Sign up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="text-sm"
                >
                  Logout
                </Button>
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-emerald-600" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="mt-8 flex flex-col gap-4 text-neutral-700">
              <Link to="/features" className="hover:text-neutral-900">Features</Link>
              <Link to="/pricing" className="hover:text-neutral-900">Pricing</Link>
              <Link to="/about" className="hover:text-neutral-900">About</Link>
              <Separator />
              {!isAuthenticated ? (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="justify-start w-full">Log in</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="justify-start w-full">Sign up</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="justify-start w-full"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-sm text-neutral-700">Logged in</span>
                  </div>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
