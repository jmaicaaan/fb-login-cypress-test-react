/**
 * Hand-made delay function to halt execution based on the `milliseconds` (ms)
 */
export const delay = (ms: number = 3000) => (
  new Promise(
    (resolve) => setTimeout(resolve, ms)
  )
);