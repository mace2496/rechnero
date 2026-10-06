import type { ConverterConfig } from "../../lib/converter";

export const areaConverter: ConverterConfig = {
  id: "area",

  slug: "flaeche",

  name: "Flächenumrechner",

  description:
    "Flächen schnell und kostenlos zwischen Quadratmillimeter, Quadratzentimeter, Quadratmeter, Quadratkilometer, Hektar, Acre und Quadratfuß umrechnen.",

  intro:
    "Mit unserem Flächenumrechner kannst du Flächen schnell und einfach zwischen metrischen und angloamerikanischen Maßeinheiten umrechnen.",

  seoDescription:
    "Flächenumrechner für Quadratmillimeter, Quadratzentimeter, Quadratmeter, Quadratkilometer, Hektar, Acre und Quadratfuß. Schnell, kostenlos und einfach online umrechnen.",

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