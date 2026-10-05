export interface Unit {
  id: string;
  name: string;
  symbol: string;
  factor: number;
}

export interface ConverterConfig {
  id: string;
  slug: string;
  name: string;
  description: string;
  units: Unit[];
}

export function convert(
  value: number,
  from: Unit,
  to: Unit
): number {
  if (!Number.isFinite(value)) {
    throw new Error("Ungültiger Wert");
  }

  const baseValue = value * from.factor;

  return baseValue / to.factor;
}