import { z } from "zod";

export const nativeNameSchema = z.record(
  z.string(),
  z.object({
    official: z.string(),
    common: z.string(),
  }),
);

export const nameSchema = z.object({
  common: z.string(),
  official: z.string(),
  nativeName: nativeNameSchema,
});

export const countryByBorderSchema = z.object({
  name: nameSchema,
});

export type CountryByBorder = z.infer<typeof countryByBorderSchema>;
