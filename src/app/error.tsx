"use client";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="h-screen flex items-center flex-col justify-center gap-4">
      <h1 className="text-2xl font-semibold">{error?.message}</h1>
      <button
        onClick={reset}
        className="bg-neutral-900 text-white py-2 5 px-5 rounded-md"
      >
        Go back
      </button>
    </div>
  );
}
