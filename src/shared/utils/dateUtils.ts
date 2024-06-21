import moment from 'moment';

/**
 * Converts a UTC time string to local time and formats it.
 * @param {string} utcTime - The UTC time string.
 * @param {string} format - The desired format for the local time string.
 * @returns {string} The formatted local time string.
 */
export function convertUtcToLocal(utcTime: string, format: string = 'lll'): string {
  const momentUtc = moment.utc(utcTime);
  const localTime = momentUtc.local();
  return localTime.format(format);
}