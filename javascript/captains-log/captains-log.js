// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const result = Math.floor(Math.random() * (9999 - 1000 + 1));
  return "NCC" + "-" + result.toString();
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const result = Math.random() * (42000.0 - 41000.0) + 41000.0
  return result;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetaryClasses = "DHJKLMNRTY";
  const randomNumber = Math.floor(Math.random() * planetaryClasses.length);
  return planetaryClasses[randomNumber];
}
