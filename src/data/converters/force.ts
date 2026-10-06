import type { ConverterConfig } from "../../lib/converter";

export const forceConverter: ConverterConfig = {
  id: "force",
  slug: "kraft",
  name: "Kraftumrechner",
  description:
    "Kraft schnell und kostenlos zwischen Newton, Kilonewton, Meganewton, Kilopond und Pound-force umrechnen.",
  intro:
    "Mit unserem Kraftumrechner kannst du Kräfte schnell und einfach zwischen verschiedenen Krafteinheiten umrechnen.",
  seoDescription:
    "Kraftumrechner für Newton, Kilonewton, Meganewton, Kilopond und Pound-force. Schnell, kostenlos und einfach online umrechnen.",
  units: [
    { id: "n", name: "Newton", symbol: "N", factor: 1 },
    { id: "kn", name: "Kilonewton", symbol: "kN", factor: 1000 },
    { id: "mn", name: "Meganewton", symbol: "MN", factor: 1000000 },
    { id: "kp", name: "Kilopond", symbol: "kp", factor: 9.80665 },
    { id: "lbf", name: "Pound-force", symbol: "lbf", factor: 4.4482216152605 },
  ],
};