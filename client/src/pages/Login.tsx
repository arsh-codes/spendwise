import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, DollarSign, Lock, Mail, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "../redux/slices/authSlice";
import { loginUser } from "@/api/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const data = await loginUser({ email, password });
      console.log("Login Success:", data);

      setError("");
      setSubmitted(true);
      dispatch(login());

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <main className="flex flex-1 flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          {submitted && (
            <Alert className="mb-6 flex items-center space-x-3 rounded-md border-emerald-200 bg-emerald-50 px-4 py-3">
              <Check className="h-5 w-5 text-emerald-600" />
              <div>
                <AlertTitle className="text-sm font-semibold text-emerald-800 sm:text-base">
                  Success!
                </AlertTitle>
                <AlertDescription className="text-sm text-emerald-700 sm:text-base">
                  You are now logged in.
                </AlertDescription>
              </div>
            </Alert>
          )}

          {error && (
            <Alert className="mb-6 flex items-center space-x-3 rounded-md border-red-200 bg-red-50 px-4 py-3">
              <X className="h-5 w-5 text-red-600" />
              <div>
                <AlertTitle className="text-sm font-semibold text-red-800 sm:text-base">
                  Error
                </AlertTitle>
                <AlertDescription className="text-sm text-red-700 sm:text-base">
                  {error}
                </AlertDescription>
              </div>
            </Alert>
          )}

          <Card className="border-neutral-200 shadow-lg">
            <CardHeader className="space-y-2 px-6 pt-6">
              <div className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-emerald-600" />
                <CardTitle className="text-2xl font-semibold sm:text-3xl">
                  Log in to your account
                </CardTitle>
              </div>
              <CardDescription className="text-sm text-neutral-600 sm:text-base">
                Welcome back! Please enter your credentials.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-4 sm:py-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute top-3 left-3 h-5 w-5 text-neutral-500" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@example.com"
                      className="py-3 pl-12 text-base sm:text-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm sm:text-base">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute top-3 left-3 h-5 w-5 text-neutral-500" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="py-3 pl-12 text-base sm:text-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 px-6 pt-0 pb-6">
              <Button
                className="w-full rounded-md bg-emerald-600 py-3 text-lg font-semibold shadow-md transition-transform hover:bg-emerald-700 active:scale-95"
                onClick={handleSubmit}
              >
                Log In
              </Button>
              <div className="text-center text-sm text-neutral-600 sm:text-base">
                Don’t have an account?{" "}
                <Link to="/signup">
                  <span className="text-emerald-600 hover:underline">
                    Sign up
                  </span>
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-neutral-500 sm:flex-row sm:text-base">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              <span>Track your expenses smartly</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>Secure and reliable</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
