export interface TableData {
  date: string
  cities: string[]
  types: string[]
  years: string[]
  pollenData: {
    city: string
    level: number
  }[]
}

export interface TableDataItem {
  date: string
  pollenData: {
    city: string
    level: number
  }[]
}
