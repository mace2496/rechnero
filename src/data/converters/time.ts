
import type { ConverterConfig } from "../../lib/converter";

export const timeConverter: ConverterConfig = {
  id: "time",
  slug: "zeit",
  name: "Zeitumrechner",

  description:
    "Rechne Millisekunden, Sekunden, Minuten, Stunden, Tage und Wochen schnell und kostenlos um.",

  intro:
    "Wie viele Minuten sind zwei Stunden oder wie viele Sekunden hat ein Tag? Mit dem Zeitumrechner kannst du verschiedene Zeiteinheiten schnell und einfach ineinander umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Der Rechner unterstützt Millisekunden, Sekunden, Minuten, Stunden, Tage und Wochen. Er ist beispielsweise bei der Zeitplanung, beim Lernen, bei der Berechnung von Laufzeiten und beim Umrechnen von Zeitangaben in Alltag und Beruf hilfreich.",

  seoDescription:
    "Zeitumrechner für Millisekunden, Sekunden, Minuten, Stunden, Tage und Wochen. Zeiteinheiten kostenlos und schnell online umrechnen.",

  units: [
    {
      id: "ms",
      name: "Millisekunde",
      symbol: "ms",
      factor: 0.001,
    },
    {
      id: "s",
      name: "Sekunde",
      symbol: "s",
      factor: 1,
    },
    {
      id: "min",
      name: "Minute",
      symbol: "min",
      factor: 60,
    },
    {
      id: "h",
      name: "Stunde",
      symbol: "h",
      factor: 3600,
    },
    {
      id: "d",
      name: "Tag",
      symbol: "d",
      factor: 86400,
    },
    {
      id: "week",
      name: "Woche",
      symbol: "Wo.",
      factor: 604800,
    },
  ],
};
