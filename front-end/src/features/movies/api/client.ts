export async function apiGet<T>(
  url: string,
  params: Record<string, string | number | undefined>
): Promise<T> {
  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      searchParams.set(key, String(value))
    }
  }

  const response = await fetch(`${url}?${searchParams}`)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}
