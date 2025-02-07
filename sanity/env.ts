export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "sk9dvMN2BQuJ46d6DSAHavgUSSogAhpz7C8FFLCaYqnHG8LXDjrYNySZQtd4Exzmt2aYtRj8HN6koS9aPnZyjLq7lzOVEbMvELCneSgZ6Kccx1Ecx0ZReJ9cHz3VeweOOYWhp4QPuluShnAagIs1qp4h5JTZhlzMCJKYAunSXomhpTXxPSHl",
  "Missing environment variable: SANITY_API_TOKEN"
);


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
