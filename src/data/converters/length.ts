
import type { ConverterConfig } from "../../lib/converter";

export const lengthConverter: ConverterConfig = {
  id: "length",
  slug: "laenge",
  name: "Längenumrechner",

  description:
    "Rechne Längen kostenlos zwischen Millimeter, Zentimeter, Meter, Kilometer, Zoll, Fuß, Yard und Meilen um.",

  intro:
    "Wie viele Zentimeter sind ein Meter oder wie viele Kilometer entsprechen fünf Meilen? Mit dem Längenumrechner kannst du verschiedene Längeneinheiten schnell und einfach umrechnen. Wähle die Ausgangs- und Zieleinheit, gib den gewünschten Wert ein und erhalte direkt das Ergebnis. Der Rechner unterstützt metrische Einheiten wie Millimeter, Zentimeter, Meter und Kilometer sowie angloamerikanische Einheiten wie Zoll, Fuß, Yard und Meilen. Er eignet sich beispielsweise für den Alltag, die Schule, handwerkliche Arbeiten und internationale Maßangaben.",

  seoDescription:
    "Längenumrechner: Millimeter, Zentimeter, Meter, Kilometer, Zoll, Fuß, Yard und Meilen schnell und kostenlos online umrechnen.",

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
