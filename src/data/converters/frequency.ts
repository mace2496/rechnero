
import type { ConverterConfig } from "../../lib/converter";

export const frequencyConverter: ConverterConfig = {
  id: "frequency",
  slug: "frequenz",
  name: "Frequenzumrechner",

  description:
    "Rechne Hertz, Kilohertz, Megahertz und Gigahertz schnell und kostenlos um.",

  intro:
    "Wie viele Hertz sind 2,4 Gigahertz oder wie lassen sich Megahertz in Kilohertz umrechnen? Mit dem Frequenzumrechner kannst du verschiedene Frequenzeinheiten schnell und einfach ineinander umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Der Rechner unterstützt Hertz, Kilohertz, Megahertz und Gigahertz. Er eignet sich beispielsweise für Angaben zu Prozessoren, Funkfrequenzen, elektronischen Schaltungen und anderen technischen Anwendungen.",

  seoDescription:
    "Frequenzumrechner für Hertz, Kilohertz, Megahertz und Gigahertz. Frequenzeinheiten schnell und kostenlos online umrechnen.",

  units: [
    { id: "hz", name: "Hertz", symbol: "Hz", factor: 1 },
    { id: "khz", name: "Kilohertz", symbol: "kHz", factor: 1000 },
    { id: "mhz", name: "Megahertz", symbol: "MHz", factor: 1000000 },
    { id: "ghz", name: "Gigahertz", symbol: "GHz", factor: 1000000000 },
  ],
};
