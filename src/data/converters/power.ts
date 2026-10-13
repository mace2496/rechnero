
import type { ConverterConfig } from "../../lib/converter";

export const powerConverter: ConverterConfig = {
  id: "power",
  slug: "leistung",
  name: "Leistungsumrechner",

  description:
    "Rechne Watt, Kilowatt, Megawatt, Pferdestärken und BTU pro Stunde schnell und kostenlos um.",

  intro:
    "Wie viel Kilowatt entsprechen 100 Pferdestärken oder wie lässt sich Watt in BTU pro Stunde umrechnen? Mit dem Leistungsumrechner kannst du verschiedene Leistungseinheiten schnell und einfach ineinander umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Unterstützt werden Watt, Kilowatt, Megawatt, Pferdestärke (PS) und BTU pro Stunde. Der Rechner ist beispielsweise beim Vergleichen von Motorleistungen, bei technischen Berechnungen und beim Einordnen von Leistungsangaben elektrischer Geräte hilfreich.",

  seoDescription:
    "Leistungsumrechner für Watt, Kilowatt, Megawatt, Pferdestärken und BTU pro Stunde. Leistungseinheiten schnell und kostenlos online umrechnen.",

  units: [
    { id: "w", name: "Watt", symbol: "W", factor: 1 },
    { id: "kw", name: "Kilowatt", symbol: "kW", factor: 1000 },
    { id: "mw", name: "Megawatt", symbol: "MW", factor: 1000000 },
    { id: "ps", name: "Pferdestärke", symbol: "PS", factor: 735.49875 },
    { id: "btu", name: "BTU pro Stunde", symbol: "BTU/h", factor: 0.29307107 },
  ],
};
