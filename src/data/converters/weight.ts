
import type { ConverterConfig } from "../../lib/converter";

export const weightConverter: ConverterConfig = {
  id: "weight",
  slug: "gewicht",
  name: "Gewichtsumrechner",

  description:
    "Rechne Milligramm, Gramm, Kilogramm, Tonnen, Unzen und Pfund schnell und kostenlos ineinander um.",

  intro:
    "Wie viele Gramm sind ein Kilogramm oder wie viel wiegt ein Gegenstand in Unzen? Mit dem Gewichtsumrechner kannst du verschiedene Masseinheiten einfach und kostenlos umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Der Rechner unterstützt Milligramm, Gramm, Kilogramm, Tonnen sowie die angloamerikanischen Einheiten Unze und Pfund. Er hilft dir beispielsweise beim Kochen, beim Abwiegen von Zutaten, beim Vergleichen von Produktangaben und beim Umrechnen internationaler Gewichtsangaben.",

  seoDescription:
    "Gewichtsumrechner für Milligramm, Gramm, Kilogramm, Tonnen, Unzen und Pfund. Masseinheiten schnell und kostenlos online umrechnen.",

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
