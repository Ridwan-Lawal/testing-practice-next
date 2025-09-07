interface NetworkErrorCause {
  code: string;
  errno?: number;
  syscall?: string;
  hostname?: string;
  address?: string;
  port?: number;
}

interface NetworkTypeError extends TypeError {
  cause: NetworkErrorCause;
}

export function isNetworkTypeError(error: unknown): error is NetworkTypeError {
  return (
    error instanceof TypeError &&
    error.message === "fetch failed" &&
    error.cause != null &&
    typeof error.cause === "object" &&
    "code" in error.cause &&
    typeof (error.cause as any).code === "string"
  );
}

export function throwErrorMessage(resStatus: number) {
  switch (resStatus) {
    case 400:
      throw new Error(
        "Bad Request: The server could not understand the request due to invalid syntax.",
      );
    case 401:
      throw new Error(
        "Unauthorized: You need to log in first to access this resource.",
      );
    case 403:
      throw new Error(
        "Forbidden: You do not have permission to access this resource.",
      );
    case 404:
      throw new Error("Not Found: The requested resource could not be found.");
    case 409:
      throw new Error("Conflict: There was a conflict with your request.");
    case 500:
      throw new Error(
        "Internal Server Error: Something went wrong on our end.",
      );
    case 502:
      throw new Error(
        "Bad Gateway: The server received an invalid response from an upstream server.",
      );
    case 503:
      throw new Error(
        "Service Unavailable: The server is currently unavailable. Please try again later.",
      );
    default:
      throw new Error(
        `Unexpected error occurred with status code ${resStatus}`,
      );
  }
}
