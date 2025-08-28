/**
 * A simple dummy function for testing monorepo support
 */
export function getDummyMessage(): string {
  return "Hello from shared library!";
}

/**
 * Get a timestamp message for logging/debugging
 */
export function getSharedTimestamp(): string {
  return `Shared lib called at: ${new Date().toISOString()}`;
}