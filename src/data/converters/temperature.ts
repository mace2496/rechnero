import type { ConverterConfig } from "../../lib/converter";

export const temperatureConverter: ConverterConfig = {
  id: "temperature",

  slug: "temperatur",

  name: "Temperaturumrechner",

  description:
    "Temperaturen schnell und kostenlos zwischen Celsius, Fahrenheit und Kelvin umrechnen.",

  intro:
    "Mit unserem Temperaturumrechner kannst du Temperaturen schnell und einfach zwischen Celsius, Fahrenheit und Kelvin umrechnen.",

  seoDescription:
    "Temperaturumrechner für Celsius, Fahrenheit und Kelvin. Temperaturen schnell, kostenlos und einfach online umrechnen.",

  type: "temperature",

  units: [
    {
      id: "c",
      name: "Celsius",
      symbol: "°C",
      factor: 1,
      offset: 0,
    },
    {
      id: "f",
      name: "Fahrenheit",
      symbol: "°F",
      factor: 5 / 9,
      offset: -32 * (5 / 9),
    },
    {
      id: "k",
      name: "Kelvin",
      symbol: "K",
      factor: 1,
      offset: -273.15,
    },
  ],
};