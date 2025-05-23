import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, CreditCard, DollarSign, User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setSubmitted(true);
    // In a real app, you would send this data to your backend
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 px-4 py-8 sm:px-6 md:px-12 lg:px-20">
      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-md">
          {submitted && (
            <Alert className="mb-6 flex items-start space-x-3 rounded-md border-emerald-200 bg-emerald-50 px-4 py-3">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
              <div>
                <AlertTitle className="text-lg font-semibold text-emerald-800">
                  Success!
                </AlertTitle>
                <AlertDescription className="text-base text-emerald-700">
                  Your account has been created. Welcome to SpendWise!
                </AlertDescription>
              </div>
            </Alert>
          )}

          {error && (
            <Alert className="mb-6 flex items-start space-x-3 rounded-md border-red-200 bg-red-50 px-4 py-3">
              <X className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <AlertTitle className="text-lg font-semibold text-red-800">
                  Error
                </AlertTitle>
                <AlertDescription className="text-base text-red-700">
                  {error}
                </AlertDescription>
              </div>
            </Alert>
          )}

          <Card className="border-neutral-200 shadow-lg">
            <CardHeader className="space-y-2 px-6 py-6">
              <div className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 flex-shrink-0 text-emerald-600" />
                <CardTitle className="text-3xl font-bold">
                  Create an account
                </CardTitle>
              </div>
              <CardDescription className="max-w-xs text-lg text-neutral-700 sm:max-w-full">
                Get started with SpendWise to track and manage your expenses.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 py-4">
              <div className="space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="pointer-events-none absolute top-3 left-3 h-5 w-5 text-neutral-400" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="py-3 pl-12 text-base"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-base font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                    className="py-3 text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="password" className="text-base font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="py-3 text-base"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="confirm-password"
                    className="text-base font-medium"
                  >
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="py-3 text-base"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-5 px-6 py-6">
              <Button
                className="w-full rounded-lg bg-emerald-600 py-3 text-lg font-semibold transition-colors hover:bg-emerald-700"
                onClick={handleSubmit}
              >
                Create Account
              </Button>
              <div className="text-center text-sm text-neutral-600">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-emerald-600 hover:underline">
                    Log in
                  </span>
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-10 flex flex-col items-center gap-6 text-neutral-500 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <CreditCard className="h-5 w-5 flex-shrink-0" />
              <span>Secure payments</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Check className="h-5 w-5 flex-shrink-0" />
              <span>Privacy protected</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
