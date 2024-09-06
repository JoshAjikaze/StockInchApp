import { useState, useEffect } from 'react'

interface QueryOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  body?: string
}

interface QueryResult<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
}

export function useQuery<T>(url: string, options: QueryOptions = {}): QueryResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: options.method || 'GET',
          headers: options.headers,
          body: options.body,
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        setData(result)
      } catch (e) {
        setError(e instanceof Error ? e : new Error('An unknown error occurred'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, options.method, options.headers, options.body])

  return { data, isLoading, error }
}