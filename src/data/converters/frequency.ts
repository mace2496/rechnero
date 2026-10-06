import type { ConverterConfig } from "../../lib/converter";

export const frequencyConverter: ConverterConfig = {
  id: "frequency",
  slug: "frequenz",
  name: "Frequenzumrechner",
  description:
    "Frequenzen schnell und kostenlos zwischen Hertz, Kilohertz, Megahertz und Gigahertz umrechnen.",
  intro:
    "Mit unserem Frequenzumrechner kannst du Frequenzen schnell und einfach zwischen verschiedenen Frequenzeinheiten umrechnen.",
  seoDescription:
    "Frequenzumrechner für Hertz, Kilohertz, Megahertz und Gigahertz. Schnell, kostenlos und einfach online umrechnen.",
  units: [
    { id: "hz", name: "Hertz", symbol: "Hz", factor: 1 },
    { id: "khz", name: "Kilohertz", symbol: "kHz", factor: 1000 },
    { id: "mhz", name: "Megahertz", symbol: "MHz", factor: 1000000 },
    { id: "ghz", name: "Gigahertz", symbol: "GHz", factor: 1000000000 },
  ],
};