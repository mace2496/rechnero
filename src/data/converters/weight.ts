import type { ConverterConfig } from "../../lib/converter";

export const weightConverter: ConverterConfig = {
  id: "weight",

  slug: "gewicht",

  name: "Gewichtsumrechner",

  description:
    "Gewichte schnell und kostenlos zwischen Milligramm, Gramm, Kilogramm, Tonnen, Unzen und Pfund umrechnen.",

  intro:
    "Mit unserem Gewichtsumrechner kannst du Gewichte schnell und einfach zwischen metrischen und angloamerikanischen Maßeinheiten umrechnen.",

  seoDescription:
    "Gewichtsumrechner für Milligramm, Gramm, Kilogramm, Tonnen, Unzen und Pfund. Schnell, kostenlos und einfach online umrechnen.",

  units: [
    {
      id: "mg",
      name: "Milligramm",
      symbol: "mg",
      factor: 0.000001,
    },
    {
      id: "g",
      name: "Gramm",
      symbol: "g",
      factor: 0.001,
    },
    {
      id: "kg",
      name: "Kilogramm",
      symbol: "kg",
      factor: 1,
    },
    {
      id: "t",
      name: "Tonne",
      symbol: "t",
      factor: 1000,
    },
    {
      id: "oz",
      name: "Unze",
      symbol: "oz",
      factor: 0.028349523125,
    },
    {
      id: "lb",
      name: "Pfund",
      symbol: "lb",
      factor: 0.45359237,
    },
  ],
};