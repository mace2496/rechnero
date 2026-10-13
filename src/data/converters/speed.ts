
import type { ConverterConfig } from "../../lib/converter";

export const speedConverter: ConverterConfig = {
  id: "speed",
  slug: "geschwindigkeit",
  name: "Geschwindigkeitsumrechner",

  description:
    "Rechne Geschwindigkeiten zwischen m/s, km/h, mph, Knoten und ft/s schnell und kostenlos um.",

  intro:
    "Wie viel Kilometer pro Stunde sind 10 Meter pro Sekunde oder wie schnell sind 60 Meilen pro Stunde in km/h? Mit dem Geschwindigkeitsumrechner kannst du verschiedene Geschwindigkeitseinheiten schnell und einfach umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Der Rechner unterstützt Meter pro Sekunde, Kilometer pro Stunde, Meilen pro Stunde, Knoten und Fuß pro Sekunde. Er eignet sich beispielsweise für den Straßenverkehr, den Sport, technische Berechnungen und die Schifffahrt.",

  seoDescription:
    "Geschwindigkeitsumrechner für Meter pro Sekunde, Kilometer pro Stunde, Meilen pro Stunde, Knoten und Fuß pro Sekunde. Kostenlos online umrechnen.",

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
