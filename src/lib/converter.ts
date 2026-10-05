export interface Unit {
  id: string;
  name: string;
  symbol: string;
  factor: number;
  offset?: number;
}

export interface ConverterConfig {
  id: string;
  slug: string;
  name: string;
  description: string;
  intro: string;
  seoDescription: string;
  units: Unit[];
  type?: "linear" | "temperature";
}

export function convert(
  value: number,
  from: Unit,
  to: Unit,
  type: "linear" | "temperature" = "linear"
): number {
  if (!Number.isFinite(value)) {
    throw new Error("Ungültiger Wert");
  }

  if (type === "temperature") {
    const baseValue = value * from.factor + (from.offset ?? 0);

    return (
      (baseValue - (to.offset ?? 0)) /
      to.factor
    );
  }

  const baseValue = value * from.factor;

  return baseValue / to.factor;
}