
import type { ConverterConfig } from "../../lib/converter";

export const pressureConverter: ConverterConfig = {
  id: "pressure",
  slug: "druck",
  name: "Druckumrechner",

  description:
    "Rechne Pascal, Kilopascal, Bar, Millibar, Atmosphäre, PSI und Torr schnell und kostenlos um.",

  intro:
    "Wie viel Bar entsprechen 200 Kilopascal oder wie lässt sich ein Druckwert von PSI in Bar umrechnen? Mit dem Druckumrechner kannst du verschiedene Druckeinheiten schnell und einfach ineinander umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Unterstützt werden Pascal, Kilopascal, Bar, Millibar, Atmosphäre, PSI und Torr. Der Rechner ist beispielsweise beim Prüfen von Reifendruck, bei technischen Anwendungen und beim Vergleichen von Messwerten hilfreich.",

  seoDescription:
    "Druckumrechner für Pascal, Kilopascal, Bar, Millibar, Atmosphäre, PSI und Torr. Druckeinheiten schnell und kostenlos online umrechnen.",

  units: [
    { id: "pa", name: "Pascal", symbol: "Pa", factor: 1 },
    { id: "kpa", name: "Kilopascal", symbol: "kPa", factor: 1000 },
    { id: "bar", name: "Bar", symbol: "bar", factor: 100000 },
    { id: "mbar", name: "Millibar", symbol: "mbar", factor: 100 },
    { id: "atm", name: "Atmosphäre", symbol: "atm", factor: 101325 },
    {
      id: "psi",
      name: "Pfund pro Quadratzoll",
      symbol: "psi",
      factor: 6894.757293168,
    },
    { id: "torr", name: "Torr", symbol: "Torr", factor: 101325 / 760 },
  ],
};
