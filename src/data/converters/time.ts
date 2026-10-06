import type { ConverterConfig } from "../../lib/converter";

export const timeConverter: ConverterConfig = {
  id: "time",

  slug: "zeit",

  name: "Zeitumrechner",

  description:
    "Zeit schnell und kostenlos zwischen Millisekunden, Sekunden, Minuten, Stunden, Tagen und Wochen umrechnen.",

  intro:
    "Mit unserem Zeitumrechner kannst du Zeit schnell und einfach zwischen verschiedenen Zeiteinheiten umrechnen.",

  seoDescription:
    "Zeitumrechner für Millisekunden, Sekunden, Minuten, Stunden, Tage und Wochen. Schnell, kostenlos und einfach online umrechnen.",

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