export function getFormattedPopulation(population: number) {
  return new Intl.NumberFormat().format(population);
}
