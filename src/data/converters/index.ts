import { lengthConverter } from "./length";
import { weightConverter } from "./weight";
import { temperatureConverter } from "./temperature";
import { volumeConverter } from "./volume";
import { areaConverter } from "./area";
import { speedConverter } from "./speed";
import { timeConverter } from "./time";

export const converters = [
  lengthConverter,
  weightConverter,
  temperatureConverter,
  volumeConverter,
  areaConverter,
  speedConverter,
  timeConverter,
];