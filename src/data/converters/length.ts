import type { ConverterConfig } from "../../lib/converter";

export const lengthConverter: ConverterConfig = {
  id: "length",
  slug: "laenge",
  name: "Längenumrechner",

  description:
    "Längen schnell und kostenlos zwischen Millimeter, Zentimeter, Meter, Kilometer, Zoll, Fuß, Yard und Meilen umrechnen.",

  intro:
    "Mit unserem Längenumrechner kannst du Längen schnell und einfach zwischen metrischen und angloamerikanischen Maßeinheiten umrechnen.",

  seoDescription:
    "Längenumrechner für Millimeter, Zentimeter, Meter, Kilometer, Zoll, Fuß, Yard und Meilen. Schnell, kostenlos und einfach online umrechnen.",
  
  units: [
    {
      id: "mm",
      name: "Millimeter",
      symbol: "mm",
      factor: 0.001,
    },
    {
      id: "cm",
      name: "Zentimeter",
      symbol: "cm",
      factor: 0.01,
    },
    {
      id: "m",
      name: "Meter",
      symbol: "m",
      factor: 1,
    },
    {
      id: "km",
      name: "Kilometer",
      symbol: "km",
      factor: 1000,
    },
    {
      id: "in",
      name: "Zoll",
      symbol: "in",
      factor: 0.0254,
    },
    {
      id: "ft",
      name: "Fuß",
      symbol: "ft",
      factor: 0.3048,
    },
    {
      id: "yd",
      name: "Yard",
      symbol: "yd",
      factor: 0.9144,
    },
    {
      id: "mi",
      name: "Meile",
      symbol: "mi",
      factor: 1609.344,
    },
  ],
};