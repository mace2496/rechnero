
import type { ConverterConfig } from "../../lib/converter";

export const temperatureConverter: ConverterConfig = {
  id: "temperature",
  slug: "temperatur",
  name: "Temperaturumrechner",

  description:
    "Rechne Temperaturen kostenlos zwischen Celsius, Fahrenheit und Kelvin um.",

  intro:
    "Wie viel Grad Fahrenheit sind 20 °C oder welcher Kelvin-Wert entspricht einer bestimmten Temperatur? Mit dem Temperaturumrechner kannst du Celsius, Fahrenheit und Kelvin schnell und einfach ineinander umrechnen. Wähle die Ausgangs- und Zieleinheit, gib die Temperatur ein und erhalte direkt das Ergebnis. Der Rechner eignet sich beispielsweise für Wetterangaben, wissenschaftliche Anwendungen, den Unterricht und den Vergleich internationaler Temperaturwerte.",

  seoDescription:
    "Temperaturumrechner für Celsius, Fahrenheit und Kelvin. Rechne Temperaturen schnell, kostenlos und einfach online um.",

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
