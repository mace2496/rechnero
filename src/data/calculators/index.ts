import { percentageCalculator } from "./percentage";
import { vatCalculator } from "./vat";
import { ruleOfThreeCalculator } from "./dreisatz";
import { interestCalculator } from "./zins";
import { discountCalculator } from "./rabatt";
import { averageCalculator } from "./durchschnitt";
import { fractionCalculator } from "./bruch";

export interface CalculatorConfig {
  id: string;
  slug: string;
  name: string;
  description: string;
  intro: string;
  seoDescription: string;
}

export const calculators: CalculatorConfig[] = [
  percentageCalculator,
  vatCalculator,
  ruleOfThreeCalculator,
  interestCalculator,
  discountCalculator,
  averageCalculator,
  fractionCalculator,
];