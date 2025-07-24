// Convert temperature from Kelvin to Celsius and the opposite
export const toCelsius = (kelvin: number) => kelvin - 273.15;
export const toFahrenheit = (kelvin: number) =>
  (kelvin - 273.15) * (9 / 5) + 32;

// Format Unix timestamp (seconds) to "HH:MM" time string in English locale
export const formatTime = (unixTime: number) =>
  new Date(unixTime * 1000).toLocaleTimeString("En", {
    hour: "2-digit",
    minute: "2-digit",
  });
// Calculate local date string based on UTC timestamp and timezone
export function getDate(dt: number, timezone: number) {
  const UtcSeconds = dt + timezone;
  const UtcMilliseconds = UtcSeconds * 1000;
  const localDate = new Date(UtcMilliseconds).toUTCString();

  return localDate;
}
