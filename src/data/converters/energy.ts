
import type { ConverterConfig } from "../../lib/converter";

export const energyConverter: ConverterConfig = {
  id: "energy",
  slug: "energie",
  name: "Energieumrechner",

  description:
    "Rechne Joule, Kilojoule, Wattstunden, Kilowattstunden, Kalorien und Kilokalorien schnell und kostenlos um.",

  intro:
    "Wie viele Joule sind eine Kilowattstunde oder wie lassen sich Kilokalorien in Kilojoule umrechnen? Mit dem Energieumrechner kannst du verschiedene Energieeinheiten schnell und einfach ineinander umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Der Rechner unterstützt Joule, Kilojoule, Wattstunden, Kilowattstunden, Kalorien und Kilokalorien. Er ist beispielsweise hilfreich beim Vergleichen von Stromverbrauch, beim Umrechnen technischer Energieangaben und beim Einordnen von Energieangaben auf Lebensmitteln.",

  seoDescription:
    "Energieumrechner für Joule, Kilojoule, Wattstunden, Kilowattstunden, Kalorien und Kilokalorien. Energieeinheiten kostenlos online umrechnen.",

  units: [
    { id: "j", name: "Joule", symbol: "J", factor: 1 },
    { id: "kj", name: "Kilojoule", symbol: "kJ", factor: 1000 },
    { id: "wh", name: "Wattstunde", symbol: "Wh", factor: 3600 },
    { id: "kwh", name: "Kilowattstunde", symbol: "kWh", factor: 3600000 },
    { id: "cal", name: "Kalorie", symbol: "cal", factor: 4.184 },
    { id: "kcal", name: "Kilokalorie", symbol: "kcal", factor: 4184 },
  ],
};
