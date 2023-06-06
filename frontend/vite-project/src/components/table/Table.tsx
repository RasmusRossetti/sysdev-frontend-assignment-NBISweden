import { TableDataItem } from "../../models/dataModel"
import "./style.css"

interface Props {
  tableData: TableDataItem[]
  incrementCount: number
  selectedCity: string
}

export const Table = ({ tableData, incrementCount, selectedCity }: Props) => {
  const getGraphColor = (level: number) => {
    if (level >= 0 && level <= 20) {
      return "green"
    } else if (level > 20 && level <= 100) {
      return "yellow"
    } else if (level > 100 && level <= 200) {
      return "red"
    } else if (level > 200) {
      return "purple"
    }
  }
  const getGraphWidth = (level: number) => {
    let maxWidth
    if (level > 200) {
      maxWidth = 90
    } else if (level > 80) {
      maxWidth = 40
    } else {
      maxWidth = 20
    }
    const width = level * 1.5
    return `${Math.min(width, maxWidth)}px`
  }

  return (
    <table id="pollenTable">
      <thead>
        <tr>
          <th>Date</th>
          <th>City</th>
          <th>Pollen Level</th>
          <th>Graph</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.slice(0, incrementCount).map((row, index) => (
            <tr className="tablerow" key={index}>
              <td>{row.date}</td>
              {row.pollenData &&
                row.pollenData
                  .filter((data) => data.city === selectedCity)
                  .map((data) => (
                    <>
                      <td>
                        {data.city}{" "}
                        <img
                          src="https://www.countryflags.com/wp-content/uploads/sweden-flag-png-xl.png"
                          alt="Sweden"
                        />
                      </td>
                      <td>{data.level}</td>
                      <td>
                        <div
                          className="graph"
                          style={{
                            backgroundColor: getGraphColor(data.level),
                            width: getGraphWidth(data.level)
                          }}
                        ></div>
                      </td>
                    </>
                  ))}
            </tr>
          ))}
      </tbody>
    </table>
  )
}
