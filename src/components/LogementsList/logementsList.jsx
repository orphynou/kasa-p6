import React, { useEffect, useState } from 'react'
import Card from '../Card/card.jsx'
import './logementsList.scss'

const LogementsList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data/logements.json')
      const jsonData = await res.json()
      setData(jsonData)
    }
    fetchData()
  }, [])

  return (
    <div>
      <ul className="logements__card">
        {data.map((logements) => (
          <Card key={logements.id} logements={logements} />
        ))}
      </ul>
    </div>
  )
}

export default LogementsList
