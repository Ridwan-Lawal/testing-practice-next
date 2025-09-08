import { AxiosError } from "axios";

export function getFormattedPopulation(population: number) {
  return new Intl.NumberFormat().format(population);
}

export function logFullErrorDetailsInDevMode(error: AxiosError) {
  if (process.env.NODE_ENV === "development") {
    console.error("API Error Details:", {
      message: error.message,
      cause: error.cause,
      code: error.code,
      stack: error.stack,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
}
