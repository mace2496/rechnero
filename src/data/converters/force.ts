
import type { ConverterConfig } from "../../lib/converter";

export const forceConverter: ConverterConfig = {
  id: "force",
  slug: "kraft",
  name: "Kraftumrechner",

  description:
    "Rechne Newton, Kilonewton, Meganewton, Kilopond und Pound-force schnell und kostenlos um.",

  intro:
    "Wie viele Newton entsprechen einem Kilonewton oder wie lässt sich Pound-force in Newton umrechnen? Mit dem Kraftumrechner kannst du verschiedene Krafteinheiten schnell und einfach ineinander umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Unterstützt werden Newton, Kilonewton, Meganewton, Kilopond und Pound-force. Der Rechner eignet sich beispielsweise für technische Berechnungen, den Maschinenbau, die Physik und den Vergleich internationaler Messwerte.",

  seoDescription:
    "Kraftumrechner für Newton, Kilonewton, Meganewton, Kilopond und Pound-force. Krafteinheiten schnell und kostenlos online umrechnen.",

  units: [
    { id: "n", name: "Newton", symbol: "N", factor: 1 },
    { id: "kn", name: "Kilonewton", symbol: "kN", factor: 1000 },
    { id: "mn", name: "Meganewton", symbol: "MN", factor: 1000000 },
    { id: "kp", name: "Kilopond", symbol: "kp", factor: 9.80665 },
    { id: "lbf", name: "Pound-force", symbol: "lbf", factor: 4.4482216152605 },
  ],
};
