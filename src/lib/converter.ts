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
  type?: "linear" | "temperature" | "fuel";
}

export function convert(
  value: number,
  from: Unit,
  to: Unit,
  type: "linear" | "temperature" | "fuel" = "linear"
): number {
  if (!Number.isFinite(value)) {
    throw new Error("Ungültiger Wert");
  }

  if (type === "temperature") {
    const baseValue =
      value * from.factor + (from.offset ?? 0);

    return (
      (baseValue - (to.offset ?? 0)) /
      to.factor
    );
  }

  if (type === "fuel") {
    if (value <= 0) {
      throw new Error("Ungültiger Wert");
    }

    const baseValue =
      from.id === "l100km"
        ? 100 / value
        : value * from.factor;

    return to.id === "l100km"
      ? 100 / baseValue
      : baseValue / to.factor;
  }

  const baseValue = value * from.factor;

  return baseValue / to.factor;
}