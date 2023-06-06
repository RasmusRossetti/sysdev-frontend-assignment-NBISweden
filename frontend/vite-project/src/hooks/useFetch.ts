import { useEffect, useState } from "react"

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>([] as T)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const fetchedData = await response.json()
      setData(fetchedData)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error)
      throw error
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading }
}
