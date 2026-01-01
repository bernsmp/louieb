"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import Link from "next/link";

type InputField = {
  label: string;
  key: string;
  defaultValue: number;
  tooltip?: string;
  prefix?: string;
  suffix?: string;
};

const inputFields: InputField[] = [
  {
    label: "Annual Revenue",
    key: "revenue",
    defaultValue: 1000000,
    prefix: "$",
    tooltip: "Your company's total annual sales revenue - used to calculate founder's hourly value",
  },
  {
    label: "Hours Founder Spends Selling (Weekly)",
    key: "founderSellingHours",
    defaultValue: 25,
    suffix: "hrs",
    tooltip: "Hours per week the founder spends on sales activities",
  },
  {
    label: "First Year Customer Revenue",
    key: "firstYearCustomerRevenue",
    defaultValue: 5000,
    prefix: "$",
    tooltip: "Average revenue from a new customer in their first year",
  },
  {
    label: "Monthly Missed Opportunities",
    key: "monthlyMissedOpportunities",
    defaultValue: 8,
    tooltip: "Deals lost due to poor training, lack of accountability, or weak management",
  },
  {
    label: "VP Salary + Bonus + Overhead",
    key: "vpSalary",
    defaultValue: 200000,
    prefix: "$",
    tooltip: "Average low-end for SaaS VP Sales compensation",
  },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

export function ROICalculator() {
  const [inputs, setInputs] = useState<Record<string, number>>(() => {
    const defaults: Record<string, number> = {};
    inputFields.forEach((field) => {
      defaults[field.key] = field.defaultValue;
    });
    return defaults;
  });

  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleInputChange = (key: string, value: string) => {
    const numValue = parseFloat(value.replace(/[^0-9.-]/g, "")) || 0;
    setInputs((prev) => ({ ...prev, [key]: numValue }));
  };

  // Calculations based on Excel logic

  // Founder's hourly rate = Revenue / 2080 work hours per year
  const founderHourlyRate = inputs.revenue / 2080;

  // Cost of Founder-Led Sales (6 months)
  const founderWeeklyCost = founderHourlyRate * inputs.founderSellingHours;
  const founderAnnualCost = founderWeeklyCost * 50; // 50 weeks (2 week vacation)
  const founderSixMonthCost = founderAnnualCost * 0.9; // ~6 months adjusted

  // Cost of Bad VP Hire (6 months)
  const vpSixMonthSalary = inputs.vpSalary / 2;
  const salespersonReplacementCost = 136500; // Two reps leave - 3 month search + 6 month ramp
  const vpReplacementCost = 150000; // 3 month search + 6 month ramp
  const badVPSixMonthCost = vpSixMonthSalary + salespersonReplacementCost + vpReplacementCost;

  // Cost of Missed Opportunities (6 months)
  const monthlyUnrealizedRevenue = inputs.monthlyMissedOpportunities * inputs.firstYearCustomerRevenue;
  const sixMonthUnrealizedRevenue = monthlyUnrealizedRevenue * 6;

  // Fractional Sales Exec Cost (6 months)
  const fractionalSixMonthCost = 65000; // 20 hours per week, 26 weeks

  // Savings
  const savingsOverFounder = founderSixMonthCost - fractionalSixMonthCost;
  const savingsOverBadVP = badVPSixMonthCost - fractionalSixMonthCost;

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="rounded-2xl border-2 border-border bg-card p-6 md:p-8">
        <h2 className="text-xl font-bold text-foreground mb-6">Your Numbers</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Adjust these values to match your company
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {inputFields.map((field) => (
            <div key={field.key} className="relative">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                {field.label}
                {field.tooltip && (
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onMouseEnter={() => setActiveTooltip(field.key)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onClick={() => setActiveTooltip(activeTooltip === field.key ? null : field.key)}
                  >
                    <Info className="h-4 w-4" />
                  </button>
                )}
              </label>

              {activeTooltip === field.key && field.tooltip && (
                <div className="absolute z-10 bottom-full left-0 mb-2 p-2 bg-foreground text-background text-xs rounded-lg max-w-xs shadow-lg">
                  {field.tooltip}
                </div>
              )}

              <div className="relative">
                {field.prefix && (
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {field.prefix}
                  </span>
                )}
                <input
                  type="text"
                  value={formatNumber(inputs[field.key])}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  className={`w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-[#0966c2] focus:outline-none focus:ring-1 focus:ring-[#0966c2] ${
                    field.prefix ? "pl-7" : ""
                  } ${field.suffix ? "pr-12" : ""}`}
                />
                {field.suffix && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {field.suffix}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div className="rounded-2xl border-2 border-[#0966c2] bg-gradient-to-br from-[#0966c2]/5 to-[#0855a3]/5 p-6 md:p-8">
        <h2 className="text-xl font-bold text-foreground mb-6">6-Month Cost Comparison</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Founder-Led Sales */}
          <div className="rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Founder-Led Sales
            </h3>
            <p className="text-3xl font-bold text-foreground">
              {formatCurrency(founderSixMonthCost)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {inputs.founderSellingHours} hrs/week × {formatCurrency(founderHourlyRate)}/hr (from revenue)
            </p>
          </div>

          {/* Bad VP Hire */}
          <div className="rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Bad VP Hire
            </h3>
            <p className="text-3xl font-bold text-foreground">
              {formatCurrency(badVPSixMonthCost)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Includes salary + turnover costs
            </p>
          </div>

          {/* Fractional Sales Leader */}
          <div className="rounded-xl bg-[#0966c2] p-6 shadow-sm">
            <h3 className="text-sm font-medium text-white/80 mb-2">
              Fractional Sales Leader
            </h3>
            <p className="text-3xl font-bold text-white">
              {formatCurrency(fractionalSixMonthCost)}
            </p>
            <p className="text-xs text-white/80 mt-2">
              20 hours/week for 26 weeks
            </p>
          </div>
        </div>

        {/* Savings */}
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">Your Potential Savings</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-between rounded-xl bg-green-50 dark:bg-green-950/30 p-4">
              <span className="text-sm font-medium text-foreground">
                vs. Founder-Led Sales
              </span>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {formatCurrency(savingsOverFounder)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-green-50 dark:bg-green-950/30 p-4">
              <span className="text-sm font-medium text-foreground">
                vs. Bad VP Hire
              </span>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {formatCurrency(savingsOverBadVP)}
              </span>
            </div>
          </div>
        </div>

        {/* Missed Revenue */}
        <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Plus:</strong> Without proper sales leadership, you're leaving an estimated{" "}
            <strong>{formatCurrency(sixMonthUnrealizedRevenue)}</strong> on the table over 6 months
            from missed opportunities.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Ready to see what a Fractional Sales Leader can do for your business?
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#0966c2] px-8 py-3 text-white font-medium hover:bg-[#0855a3] transition-colors"
        >
          Let&apos;s Talk
        </Link>
      </div>

      {/* Download Calculator Section */}
      <div className="mt-8 p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800">
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          <strong>Note:</strong> This calculator shows top-line impact only. Gross and net profit are not calculated.
        </p>
        <a
          href="https://docs.google.com/spreadsheets/d/1i9yvZM5BPvYfftJGYaOmgRGMr6u4Y-Xm/edit?gid=1275642810#gid=1275642810"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0966c2] text-white rounded-md font-medium hover:bg-[#0855a3] transition-colors"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download the complete Fractional Sales Leadership pricing calculator
        </a>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Compare against Founder-Led Sales, Hiring a Sales VP, and hiring a Fractional Sales Leader.
        </p>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-center text-muted-foreground">
        Note: This calculator shows top-line impact only. Gross and net profit are not calculated.
        <br />
        © Louie Bernstein - Fractional Sales Leader
      </p>
    </div>
  );
}
