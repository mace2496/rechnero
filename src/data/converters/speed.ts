import type { ConverterConfig } from "../../lib/converter";

export const speedConverter: ConverterConfig = {
  id: "speed",

  slug: "geschwindigkeit",

  name: "Geschwindigkeitsumrechner",

  description:
    "Geschwindigkeiten schnell und kostenlos zwischen Meter pro Sekunde, Kilometer pro Stunde, Meilen pro Stunde, Knoten und Fuß pro Sekunde umrechnen.",

  intro:
    "Mit unserem Geschwindigkeitsumrechner kannst du Geschwindigkeiten schnell und einfach zwischen metrischen und angloamerikanischen Maßeinheiten umrechnen.",

  seoDescription:
    "Geschwindigkeitsumrechner für Meter pro Sekunde, Kilometer pro Stunde, Meilen pro Stunde, Knoten und Fuß pro Sekunde. Schnell, kostenlos und einfach online umrechnen.",

  units: [
    {
      id: "ms",
      name: "Meter pro Sekunde",
      symbol: "m/s",
      factor: 1,
    },
    {
      id: "kmh",
      name: "Kilometer pro Stunde",
      symbol: "km/h",
      factor: 1000 / 3600,
    },
    {
      id: "mph",
      name: "Meilen pro Stunde",
      symbol: "mph",
      factor: 1609.344 / 3600,
    },
    {
      id: "kn",
      name: "Knoten",
      symbol: "kn",
      factor: 1852 / 3600,
    },
    {
      id: "fts",
      name: "Fuß pro Sekunde",
      symbol: "ft/s",
      factor: 0.3048,
    },
  ],
};