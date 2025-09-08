import { getCountryByName } from "@/src/app/_lib/services/countryById";

export default async function CountryDetails({
  countryName,
}: {
  countryName: string;
}) {
  const country = await getCountryByName(countryName);
  console.log(country);

  return (
    <div>
      {/* flags */}
      <section>{/* <Image src={} /> */}</section>

      {/* country details */}
      <section>
        {/* name */}
        <h1></h1>

        {/*  stats */}
        <div>
          {/* first block of stats */}
          <div></div>

          {/* second block of stats */}
          <div></div>
        </div>

        {/* borders */}
        <footer></footer>
      </section>
    </div>
  );
}
