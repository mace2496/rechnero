
import type { ConverterConfig } from "../../lib/converter";

export const volumeConverter: ConverterConfig = {
  id: "volume",
  slug: "volumen",
  name: "Volumenumrechner",

  description:
    "Rechne Milliliter, Liter, Kubikzentimeter, Kubikmeter, US-Gallonen und Kubikfuß kostenlos ineinander um.",

  intro:
    "Wie viele Milliliter passen in einen Liter oder wie viel Liter entsprechen einer US-Gallone? Mit dem Volumenumrechner kannst du verschiedene Volumeneinheiten schnell und einfach umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Unterstützt werden Milliliter, Liter, Kubikzentimeter, Kubikmeter, US-Gallonen und Kubikfuß. Der Rechner ist beispielsweise beim Kochen, beim Abmessen von Flüssigkeiten, bei technischen Berechnungen und beim Vergleichen internationaler Mengenangaben hilfreich.",

  seoDescription:
    "Volumenumrechner für Milliliter, Liter, Kubikzentimeter, Kubikmeter, US-Gallonen und Kubikfuß. Volumen schnell und kostenlos online umrechnen.",

  units: [
    {
      id: "ml",
      name: "Milliliter",
      symbol: "ml",
      factor: 0.001,
    },
    {
      id: "l",
      name: "Liter",
      symbol: "l",
      factor: 1,
    },
    {
      id: "cm3",
      name: "Kubikzentimeter",
      symbol: "cm³",
      factor: 0.001,
    },
    {
      id: "m3",
      name: "Kubikmeter",
      symbol: "m³",
      factor: 1000,
    },
    {
      id: "gal",
      name: "US-Gallone",
      symbol: "gal",
      factor: 3.785411784,
    },
    {
      id: "ft3",
      name: "Kubikfuß",
      symbol: "ft³",
      factor: 28.316846592,
    },
  ],
};
