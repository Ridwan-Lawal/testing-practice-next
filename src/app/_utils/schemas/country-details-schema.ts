import { z } from "zod";

const CurrenciesSchema = z.record(
  z.string(),
  z
    .object({
      name: z.string(),
      symbol: z.string(),
    })
    .strict(), // ← Add strict to nested objects
);

const FlagsSchema = z
  .object({
    png: z.string(),
    svg: z.string(),
    alt: z.string(),
  })
  .strict(); // ← Add strict here

const LanguagesSchema = z.record(z.string(), z.string());

const NativeNameSchema = z.record(
  z.string(),
  z
    .object({
      official: z.string(),
      common: z.string(),
    })
    .strict(), // ← Add strict here
);

const NameSchema = z
  .object({
    common: z.string(),
    nativeName: NativeNameSchema,
    official: z.string(),
  })
  .strict(); // ← Add strict here

// Main schema with strict mode
const CountryByNameSchema = z
  .object({
    borders: z.array(z.string()),
    capital: z.array(z.string()),
    currencies: CurrenciesSchema,
    flags: FlagsSchema,
    languages: LanguagesSchema,
    name: NameSchema,
    population: z.number(),
    region: z.string(),
    subregion: z.string(),
    tld: z.array(z.string()),
  })
  .strict(); // ← Main object strict

// Export the schema and inferred types
export { CountryByNameSchema };
export type CountryByName = z.infer<typeof CountryByNameSchema>;
export type Currencies = z.infer<typeof CurrenciesSchema>;
export type Flags = z.infer<typeof FlagsSchema>;
export type Languages = z.infer<typeof LanguagesSchema>;
export type Name = z.infer<typeof NameSchema>;
export type NativeName = z.infer<typeof NativeNameSchema>;
