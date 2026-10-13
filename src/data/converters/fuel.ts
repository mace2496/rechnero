
import type { ConverterConfig } from "../../lib/converter";

export const fuelConverter: ConverterConfig = {
  id: "fuel",
  slug: "kraftstoffverbrauch",
  name: "Kraftstoffverbrauch-Umrechner",

  description:
    "Rechne Kraftstoffverbrauch zwischen l/100 km, km/l, US-mpg und UK-mpg schnell und kostenlos um.",

  intro:
    "Wie viel Liter pro 100 Kilometer entsprechen 30 Meilen pro Gallone? Mit dem Kraftstoffverbrauchs-Umrechner kannst du Verbrauchswerte zwischen den gebräuchlichen internationalen Einheiten umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Unterstützt werden Liter pro 100 Kilometer, Kilometer pro Liter sowie Meilen pro US-Gallone und britischer Gallone. Beachte: Bei l/100 km steht ein niedrigerer Wert für einen geringeren Verbrauch. Bei km/l und mpg bedeutet ein höherer Wert dagegen, dass du mit derselben Kraftstoffmenge weiter kommst. Der Rechner hilft dir beispielsweise beim Vergleichen von Fahrzeugen und beim Einordnen internationaler Verbrauchsangaben.",

  seoDescription:
    "Kraftstoffverbrauch umrechnen: l/100 km, km/l, mpg US und mpg UK. Verbrauchswerte schnell und kostenlos online vergleichen.",

  type: "fuel",

  units: [
    {
      id: "l100km",
      name: "Liter pro 100 Kilometer",
      symbol: "l/100 km",
      factor: 100,
    },
    {
      id: "kmpl",
      name: "Kilometer pro Liter",
      symbol: "km/l",
      factor: 1,
    },
    {
      id: "mpgus",
      name: "Meilen pro Gallone (US)",
      symbol: "mpg US",
      factor: 0.425143707,
    },
    {
      id: "mpguk",
      name: "Meilen pro Gallone (UK)",
      symbol: "mpg UK",
      factor: 0.354006189,
    },
  ],
};
