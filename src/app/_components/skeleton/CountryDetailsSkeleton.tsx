// Alternative shimmer skeleton
const ShimmerSkeleton = ({
  width = "100%",
  height = "1rem",
  circle = false,
  className = "",
}) => (
  <div
    className={`animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] ${
      circle ? "rounded-full" : "rounded"
    } ${className}`}
    style={{
      width: typeof width === "string" ? width : `${width}px`,
      height: typeof height === "string" ? height : `${height}px`,
    }}
  />
);

// Country Detail Page Shimmer Skeleton
export const CountryDetailSkeleton = ({
  firstStatsCount = 5,
  secondStatsCount = 3,
  borderCount = 4,
}) => (
  <div className="mt-10 flex flex-col gap-8 text-neutral-950 lg:flex-row">
    {/* flags */}
    <section className="relative aspect-video lg:w-[45%]">
      <ShimmerSkeleton width="100%" height="100%" className="rounded-none" />
    </section>

    {/* country details */}
    <section className="flex-1">
      {/* name */}
      <h1 className="text-[21px] font-extrabold md:text-2xl">
        <ShimmerSkeleton height="32px" width="60%" />
      </h1>

      {/* stats */}
      <div className="mt-5 flex flex-col gap-8 sm:flex-row sm:justify-between">
        {/* first block of stats */}
        <ul className="flex-1 space-y-3">
          {Array.from({ length: firstStatsCount }).map((_, idx) => (
            <li key={idx} className="text-sm capitalize">
              <div className="flex items-center gap-1">
                <ShimmerSkeleton width="80px" height="14px" />
                <span className="text-gray-300">:</span>
                <ShimmerSkeleton width="120px" height="14px" />
              </div>
            </li>
          ))}
        </ul>

        {/* second block of stats */}
        <ul className="flex-1 space-y-3">
          {Array.from({ length: secondStatsCount }).map((_, idx) => (
            <li key={idx} className="text-sm capitalize">
              <div className="flex items-center gap-1">
                <ShimmerSkeleton width="70px" height="14px" />
                <span className="text-gray-300">:</span>
                <ShimmerSkeleton width="100px" height="14px" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* borders */}
      <footer className="mt-12 flex flex-col gap-3 lg:flex-row">
        <h2 className="text lg: text-[15px] font-semibold">
          <ShimmerSkeleton width="130px" height="18px" />
        </h2>

        <div className="flex-1">
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-4">
            {Array.from({ length: borderCount }).map((_, idx) => (
              <li key={idx}>
                <ShimmerSkeleton
                  width={`${60 + Math.random() * 40}px`}
                  height="24px"
                  className="rounded-xs"
                />
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  </div>
);
