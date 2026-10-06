import type { ConverterConfig } from "../../lib/converter";

export const dataConverter: ConverterConfig = {
  id: "data",

  slug: "datenmenge",

  name: "Datenmengen-Umrechner",

  description:
    "Datenmengen schnell und kostenlos zwischen Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Kibibyte, Mebibyte und Gibibyte umrechnen.",

  intro:
    "Mit unserem Datenmengen-Umrechner kannst du digitale Datenmengen schnell und einfach zwischen dezimalen und binären Einheiten umrechnen.",

  seoDescription:
    "Datenmengen-Umrechner für Bit, Byte, KB, MB, GB, TB sowie KiB, MiB und GiB. Schnell, kostenlos und einfach online umrechnen.",

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