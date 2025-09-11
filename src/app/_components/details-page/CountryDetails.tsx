import { getAllCountries } from "@/src/app/_lib/services/countries";
import { getCountryByName } from "@/src/app/_lib/services/countryById";
import { getCountryNameByBorder } from "@/src/app/_lib/services/coutriesByBorder";
import { getBlurDataUrl } from "@/src/app/_lib/services/images";
import { CountryByBorder } from "@/src/app/_utils/schemas/country-border-schema";
import Image from "next/image";
import Link from "next/link";

export default async function CountryDetails({
  countryName,
}: {
  countryName: string;
}) {
  const country = await getCountryByName(countryName);

  // promise.all
  const blurDataUrl = await getBlurDataUrl(country?.flags?.svg);

  const borders: (CountryByBorder | undefined)[] = country
    ? await Promise.all(
        country?.borders?.map((border) => getCountryNameByBorder(border)),
      )
    : [];

  const bordersName = borders?.map((border) => border?.name?.common);

  const countries = await getAllCountries();

  const nativeNameKeys = Object.keys(country?.name?.nativeName as object);
  const languages = Object.values(country?.languages as object);
  const currencies = Object.keys(country?.currencies as object);

  const firstSetOfDetails = [
    {
      name: "native name",
      value:
        country?.name?.nativeName[nativeNameKeys[1]]?.common ||
        country?.name?.nativeName[nativeNameKeys[1]]?.official ||
        "N/A",
    },
    {
      name: "population",
      value: country?.population,
    },
    {
      name: "region",
      value: country?.region,
    },
    {
      name: "sub region",
      value: country?.subregion,
    },
    {
      name: "capital",
      value: country?.capital?.at(0),
    },
  ];

  const secondSetOfDetails = [
    {
      name: "top level domain",
      value: country?.tld,
    },
    {
      name: "currencies",
      value: country?.currencies[currencies[0]]?.name,
    },
    {
      name: "languages",
      value: languages.join(", "),
    },
  ];

  return (
    <div className="mt-10 flex flex-col gap-8 text-neutral-950 lg:flex-row">
      {/* flags */}
      <section className="relative aspect-video lg:w-[45%]">
        {country?.flags?.svg ? (
          <Image
            src={country?.flags?.svg}
            alt={country?.flags?.alt ?? "country flag"}
            fill
            className="object-cover"
            quality={100}
            placeholder={blurDataUrl ? "blur" : "empty"}
            blurDataURL={blurDataUrl ?? ""}
          />
        ) : (
          `${countryName}'s flag not available`
        )}
      </section>

      {/* country details */}
      <section className="">
        {/* name */}
        <h1 className="text-[21px] font-extrabold md:text-2xl">
          {country?.name?.common}
        </h1>

        {/*  stats */}
        <div className="mt-5 flex flex-col gap-8 sm:flex-row sm:justify-between">
          {/* first block of stats */}
          <ul className="space-y-3">
            {firstSetOfDetails?.map((detail, idx) => (
              <li key={idx} className="text-sm capitalize">
                <span className="font-semibold">{detail.name}: </span>
                <span>{detail.value}</span>
              </li>
            ))}
          </ul>

          {/* second block of stats */}
          <ul className="space-y-3">
            {secondSetOfDetails?.map((detail, idx) => (
              <li key={idx} className="text-sm capitalize">
                <span className="font-semibold">{detail.name}: </span>
                <span>{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* borders */}
        <footer className="mt-12 flex flex-col gap-3 lg:flex-row">
          <h2 className="text lg: text-[15px] font-semibold">
            Border Countries:
          </h2>

          {country?.borders?.length ? (
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-4">
              {bordersName.map((borderingCountry, idx) => (
                <li
                  key={idx}
                  className="flex w-fit cursor-pointer items-center rounded-xs bg-white px-6 pt-[5px] pb-[3px] text-xs capitalize shadow-md"
                >
                  <Link href={`/country/${borderingCountry}`}>
                    {borderingCountry}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm italic">
              {countryName.includes("%")
                ? countryName.replace("%", " ")
                : countryName}{" "}
              has no bordering countries.
            </p>
          )}
        </footer>
      </section>
    </div>
  );
}

// get the bordering countries full name by using the border country abbrv to get the data from the api using cca3 filter from the data. create a new function
