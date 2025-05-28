import { Calendar, DollarSign, List, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold text-neutral-800">
          Welcome to Your Dashboard
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-neutral-200 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-semibold">
                <DollarSign className="h-5 w-5 text-emerald-600" />
                Monthly Expenses
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600">
              $0.00 (API data)
            </CardContent>
          </Card>

          <Card className="border-neutral-200 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-semibold">
                <User className="h-5 w-5 text-blue-600" />
                Profile Info
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600">
              Name, Email, etc. (API)
            </CardContent>
          </Card>

          <Card className="border-neutral-200 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-semibold">
                <Calendar className="h-5 w-5 text-orange-500" />
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600">
              List of recent expenses (API)
            </CardContent>
          </Card>

          <Card className="border-neutral-200 shadow-md sm:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-semibold">
                <List className="h-5 w-5 text-purple-600" />
                Expense Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600">
              Pie/Bar chart (API)
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="bg-emerald-600 px-6 py-3 text-lg font-medium text-white hover:bg-emerald-700">
            Add New Expense
          </Button>
        </div>
      </div>
    </div>
  );
}
