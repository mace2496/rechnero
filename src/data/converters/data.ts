
import type { ConverterConfig } from "../../lib/converter";

export const dataConverter: ConverterConfig = {
  id: "data",
  slug: "datenmenge",
  name: "Datenmengen-Umrechner",

  description:
    "Rechne Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Kibibyte, Mebibyte und Gibibyte kostenlos um.",

  intro:
    "Wie viele Megabyte sind ein Gigabyte oder wie viele Gibibyte entsprechen einer bestimmten Datenmenge? Mit dem Datenmengen-Umrechner kannst du digitale Speichergrößen schnell und einfach umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Wert ein und erhalte direkt das Ergebnis. Unterstützt werden Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte sowie die binären Einheiten Kibibyte, Mebibyte und Gibibyte. Dabei gilt: Dezimale Einheiten basieren auf dem Faktor 1.000, binäre Einheiten auf dem Faktor 1.024. Der Rechner hilft dir beispielsweise beim Vergleichen von Speicherkapazitäten, Dateigrößen und Datenangaben.",

  seoDescription:
    "Datenmengen-Umrechner für Bit, Byte, KB, MB, GB, TB sowie KiB, MiB und GiB. Digitale Speichergrößen kostenlos online umrechnen.",

  units: [
    {
      id: "bit",
      name: "Bit",
      symbol: "bit",
      factor: 0.125,
    },
    {
      id: "byte",
      name: "Byte",
      symbol: "B",
      factor: 1,
    },
    {
      id: "kb",
      name: "Kilobyte",
      symbol: "kB",
      factor: 1000,
    },
    {
      id: "mb",
      name: "Megabyte",
      symbol: "MB",
      factor: 1000000,
    },
    {
      id: "gb",
      name: "Gigabyte",
      symbol: "GB",
      factor: 1000000000,
    },
    {
      id: "tb",
      name: "Terabyte",
      symbol: "TB",
      factor: 1000000000000,
    },
    {
      id: "kib",
      name: "Kibibyte",
      symbol: "KiB",
      factor: 1024,
    },
    {
      id: "mib",
      name: "Mebibyte",
      symbol: "MiB",
      factor: 1048576,
    },
    {
      id: "gib",
      name: "Gibibyte",
      symbol: "GiB",
      factor: 1073741824,
    },
  ],
};
