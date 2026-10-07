import { percentageCalculator } from "./percentage";
import { vatCalculator } from "./vat";
import { ruleOfThreeCalculator } from "./dreisatz";

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
];