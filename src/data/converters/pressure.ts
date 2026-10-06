import type { ConverterConfig } from "../../lib/converter";

export const pressureConverter: ConverterConfig = {
  id: "pressure",
  slug: "druck",
  name: "Druckumrechner",
  description:
    "Druck schnell und kostenlos zwischen Pascal, Kilopascal, Bar, Millibar, Atmosphäre, PSI und Torr umrechnen.",
  intro:
    "Mit unserem Druckumrechner kannst du Druck schnell und einfach zwischen verschiedenen Druckeinheiten umrechnen.",
  seoDescription:
    "Druckumrechner für Pascal, Kilopascal, Bar, Millibar, Atmosphäre, PSI und Torr. Schnell, kostenlos und einfach online umrechnen.",
  units: [
    { id: "pa", name: "Pascal", symbol: "Pa", factor: 1 },
    { id: "kpa", name: "Kilopascal", symbol: "kPa", factor: 1000 },
    { id: "bar", name: "Bar", symbol: "bar", factor: 100000 },
    { id: "mbar", name: "Millibar", symbol: "mbar", factor: 100 },
    { id: "atm", name: "Atmosphäre", symbol: "atm", factor: 101325 },
    { id: "psi", name: "Pfund pro Quadratzoll", symbol: "psi", factor: 6894.757293168 },
    { id: "torr", name: "Torr", symbol: "Torr", factor: 101325 / 760 },
  ],
};