import { getBlurDataUrl } from "@/src/app/_lib/services/images";
import { getFormattedPopulation } from "@/src/app/_utils/funcs";
import { Country } from "@/src/app/_utils/types/country-list";
import Image from "next/image";

interface CountryCardType {
  country: Country;
  priority: boolean;
}

export default async function CountryCard({
  country,
  priority,
}: CountryCardType) {
  const { flags, region, name, population, capital } = country ?? {};
  const blurDataUrl = await getBlurDataUrl(flags.png);

  return (
    <div
      data-testid="country-card"
      className="h-full w-full max-w-[300px] overflow-hidden rounded-md bg-white shadow-md shadow-gray-200"
    >
      {/* image */}
      <div className="relative h-[200px] w-[300px]">
        <Image
          src={flags.svg}
          alt="flag"
          fill
          className="object-cover"
          quality={100}
          placeholder={blurDataUrl ? "blur" : "empty"}
          blurDataURL={blurDataUrl}
          priority={priority}
        />
      </div>

      {/* details */}
      <div className="space-y-3 px-6 pt-6 pb-8">
        <h2 className="text-[19px] font-extrabold">{name.official}</h2>

        <ul className="space-y-1">
          {[
            { name: "population", value: getFormattedPopulation(population) },
            { name: "region", value: region },
            { name: "capital", value: capital },
          ].map((data, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[15px]">
              <span className="font-medium capitalize">{data.name}:</span>

              <span className="text-neutral-800 capitalize">{data.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
