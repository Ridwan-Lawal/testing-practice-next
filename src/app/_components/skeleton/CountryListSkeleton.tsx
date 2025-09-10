import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Individual Country Card Skeleton
const CountryCardSkeleton = () => (
  <div
    data-testid="country-card-skeleton"
    className="h-full w-full max-w-[300px] overflow-hidden rounded-md bg-white shadow-md shadow-gray-200"
  >
    {/* Flag image skeleton */}
    <div className="relative h-[200px] w-[300px]">
      <Skeleton height={200} width={300} />
    </div>

    {/* Details skeleton */}
    <div className="space-y-3 px-6 pt-6 pb-8">
      {/* Country name */}
      <Skeleton height={23} width="85%" />

      {/* Country details list */}
      <ul className="space-y-1">
        {/* Population */}
        <li className="flex items-center gap-2 text-[15px]">
          <Skeleton width={80} height={15} />
          <Skeleton width={100} height={15} />
        </li>

        {/* Region */}
        <li className="flex items-center gap-2 text-[15px]">
          <Skeleton width={50} height={15} />
          <Skeleton width={80} height={15} />
        </li>

        {/* Capital */}
        <li className="flex items-center gap-2 text-[15px]">
          <Skeleton width={55} height={15} />
          <Skeleton width={90} height={15} />
        </li>
      </ul>
    </div>
  </div>
);

// Main Countries Grid Skeleton
export const CountriesListSkeleton = ({ count = 12 }) => (
  <SkeletonTheme baseColor="#f3f4f6" highlightColor="#e5e7eb">
    <div
      role="contentinfo"
      className="mt-10 grid grid-cols-1 justify-items-center gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4"
    >
      {Array.from({ length: count }).map((_, idx) => (
        <CountryCardSkeleton key={idx} />
      ))}
    </div>
  </SkeletonTheme>
);
