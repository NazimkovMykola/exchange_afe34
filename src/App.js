import "./App.css"
import { useEffect, useState } from "react"

const translateCurrency = {
  USD: " Американський Доллар",
  EUR: "Євро",
  DKK: "Датська Крона",
}
const dataCurrency = {
  data: {
    DKK: 6.879600971,
    EUR: 0.9214701108,
    USD: 1,
  },
}

function App() {
  const [data, setDate] = useState(dataCurrency)
useEffect(()=> {
  // fetch(
  //   "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_qWTIYYyfmHFoFXh63B1MJAxOQxLF5pUkjIFQJZi4"
  // )
  // .then(res => res.json())
  // .then(res => setDate(res.data))
  setDate(dataCurrency)
}, [])
  return (
    <div className="App">
      <div className="App__container">
        <h1>Калькулятор валют:</h1>
        <input type="text" />
        <select defaultValue={"default"}>
          <option defaultValue="default" disabled>
            --Оберіть валюту--
          </option>
          {Object.keys(data.data)?.map((el) => {
            return (
              <option key={el} value={el}>
                {translateCurrency[el]}
              </option>
            )
          })}
        </select>
        <select defaultValue={"default"}>
          <option defaultValue="default" disabled>
            --Оберіть валюту--
          </option>
          {Object.keys(data.data).map((el) => {
            return (
              <option key={el} value={el}>
                {translateCurrency[el]}
              </option>
            )
          })}
        </select>
        <button>Розрахувати</button>
        <div>Результат</div>
      </div>
    </div>
  )
}

export default App
