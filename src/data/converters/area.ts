
import type { ConverterConfig } from "../../lib/converter";

export const areaConverter: ConverterConfig = {
  id: "area",
  slug: "flaeche",
  name: "Flächenumrechner",

  description:
    "Rechne Flächen zwischen Quadratmillimeter, Quadratzentimeter, Quadratmeter, Quadratkilometer, Hektar, Acre und Quadratfuß kostenlos um.",

  intro:
    "Wie viele Quadratmeter sind ein Hektar oder wie groß ist eine Fläche von 1.000 Quadratfuß in Quadratmetern? Mit dem Flächenumrechner kannst du unterschiedliche Flächeneinheiten schnell und einfach umrechnen. Wähle die Ausgangs- und Zieleinheit, gib den Flächenwert ein und erhalte direkt das Ergebnis. Der Rechner unterstützt Quadratmillimeter, Quadratzentimeter, Quadratmeter, Quadratkilometer, Hektar, Acre und Quadratfuß. Er ist beispielsweise bei der Planung von Grundstücken, bei Renovierungen, im Bauwesen und beim Vergleichen internationaler Flächenangaben hilfreich.",

  seoDescription:
    "Flächenumrechner für Quadratmillimeter, Quadratzentimeter, Quadratmeter, Quadratkilometer, Hektar, Acre und Quadratfuß. Flächen kostenlos online umrechnen.",

  units: [
    {
      id: "mm2",
      name: "Quadratmillimeter",
      symbol: "mm²",
      factor: 0.000001,
    },
    {
      id: "cm2",
      name: "Quadratzentimeter",
      symbol: "cm²",
      factor: 0.0001,
    },
    {
      id: "m2",
      name: "Quadratmeter",
      symbol: "m²",
      factor: 1,
    },
    {
      id: "km2",
      name: "Quadratkilometer",
      symbol: "km²",
      factor: 1000000,
    },
    {
      id: "ha",
      name: "Hektar",
      symbol: "ha",
      factor: 10000,
    },
    {
      id: "acre",
      name: "Acre",
      symbol: "ac",
      factor: 4046.8564224,
    },
    {
      id: "ft2",
      name: "Quadratfuß",
      symbol: "ft²",
      factor: 0.09290304,
    },
  ],
};
