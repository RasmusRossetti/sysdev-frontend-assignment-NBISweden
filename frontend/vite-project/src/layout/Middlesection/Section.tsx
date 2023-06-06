import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { Table } from "../../components/table/Table"
import { TableData } from "../../models/dataModel"
import "./style.css"

export const Section = () => {
  const { data: citiesData, loading: citiesLoading } = useFetch<TableData>(
    "http://localhost:3002/pollen/cities"
  )

  const { data: typesData, loading: typesLoading } = useFetch<TableData>(
    "http://localhost:3002/pollen/types"
  )

  const { data: yearsData, loading: yearsLoading } = useFetch<TableData>(
    "http://localhost:3002/pollen/years"
  )

  const [selectedCity, setSelectedCity] = useState("Borlänge")
  const [selectedType, setSelectedType] = useState("Alnus")
  const [selectedYear, setSelectedYear] = useState("2017")
  const [incrementCount, setIncrementCount] = useState(10)
  const [tableData, setTableData] = useState([])

  const handleGetData = () => {
    if (selectedType && selectedYear) {
      const url = `http://localhost:3002/pollen/${selectedType}/${selectedYear}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setTableData(data.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
    setIncrementCount(10)
  }

  return (
    <div className="container">
      <h1>Pollen data</h1>
      <section>
        <p>Choose a city:</p>

        {citiesLoading ? (
          <div>Loading cities...</div>
        ) : (
          <select
            id="cities"
            name="cities"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {citiesData.cities &&
              citiesData.cities.map((city, index) => (
                <option value={city} key={index}>
                  {city}
                </option>
              ))}
          </select>
        )}
        <p>Choose a type:</p>

        {typesLoading ? (
          <div>Loading types...</div>
        ) : (
          <select
            id="types"
            name="types"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {typesLoading ? (
              <option value="">Loading types...</option>
            ) : (
              typesData.types &&
              typesData.types.map((type, index) => (
                <option value={type} key={index}>
                  {type}
                </option>
              ))
            )}
          </select>
        )}

        <p>Choose a year:</p>

        {yearsLoading ? (
          <div>Loading years...</div>
        ) : (
          <select
            name="years"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {yearsData.years &&
              yearsData.years.map((year, index) => (
                <option value={year} key={index}>
                  {year}
                </option>
              ))}
          </select>
        )}

        <button className="button-27" onClick={handleGetData}>
          Get data
        </button>
      </section>
      <Table
        tableData={tableData}
        incrementCount={incrementCount}
        selectedCity={selectedCity}
      />
      <div className="footer">
        <button
          className="button-27"
          onClick={() => setIncrementCount(incrementCount + 10)}
        >
          Show more
        </button>
      </div>
    </div>
  )
}
