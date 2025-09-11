"use client";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-center text-2xl font-semibold">{error?.message}</h1>
      <button
        onClick={reset}
        className="5 rounded-md bg-neutral-900 px-5 py-2 text-white"
      >
        Go back
      </button>
    </div>
  );
}
