import type { ConverterConfig } from "../../lib/converter";

export const volumeConverter: ConverterConfig = {
  id: "volume",

  slug: "volumen",

  name: "Volumenumrechner",

  description:
    "Volumen schnell und kostenlos zwischen Milliliter, Liter, Kubikzentimeter, Kubikmeter, US-Gallonen und Kubikfuß umrechnen.",

  intro:
    "Mit unserem Volumenumrechner kannst du Volumen schnell und einfach zwischen metrischen und angloamerikanischen Maßeinheiten umrechnen.",

  seoDescription:
    "Volumenumrechner für Milliliter, Liter, Kubikzentimeter, Kubikmeter, US-Gallonen und Kubikfuß. Schnell, kostenlos und einfach online umrechnen.",

  units: [
    {
      id: "ml",
      name: "Milliliter",
      symbol: "ml",
      factor: 0.001,
    },
    {
      id: "l",
      name: "Liter",
      symbol: "l",
      factor: 1,
    },
    {
      id: "cm3",
      name: "Kubikzentimeter",
      symbol: "cm³",
      factor: 0.001,
    },
    {
      id: "m3",
      name: "Kubikmeter",
      symbol: "m³",
      factor: 1000,
    },
    {
      id: "gal",
      name: "US-Gallone",
      symbol: "gal",
      factor: 3.785411784,
    },
    {
      id: "ft3",
      name: "Kubikfuß",
      symbol: "ft³",
      factor: 28.316846592,
    },
  ],
};