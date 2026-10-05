import { lengthConverter } from "./length";
import { weightConverter } from "./weight";
import { temperatureConverter } from "./temperature";
import { volumeConverter } from "./volume";

export const converters = [
  lengthConverter,
  weightConverter,
  temperatureConverter,
  volumeConverter,
];