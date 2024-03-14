import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../Error/error.jsx'
import Carousel from '../../components/Carousel/carousel'
import Collapse from '../../components/Collapse/collapse.jsx'
import FicheTag from '../../components/FicheTag/ficheTag.jsx'
import FicheRating from '../../components/FicheRating/ficheRating.jsx'
import FicheHost from '../../components/FicheHost/ficheHost.jsx'
import FicheTitle from '../../components/FicheTitle/ficheTitle.jsx'
import './fiches.scss'

const Fiches = () => {
  const { id } = useParams()
  const [logement, setLogementsData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../data/logements.json')
      const jsonData = await res.json()
      const logementById = jsonData.find(
        (logementsData) => logementsData.id === id,
      )
      setLogementsData(logementById)
    }
    fetchData()
  }, [id])

  if (!logement) {
    return <Error />
  }

  return (
    <main className="fiche__main__container">
      <Carousel pictures={logement.pictures} />
      <div className="fiche__location__container">
        <div className="fiche__title__container">
          <FicheTitle title={logement.title} location={logement.location} />
          <div className="fiche__tag__container">
            <ul className="fiche__tag">
              {logement &&
                logement.tags.map((tag, index) => (
                  <FicheTag key={index} tag={tag} />
                ))}
            </ul>
          </div>
        </div>
        <div className="fiche__host__container">
          <FicheHost
            name={logement.host.name}
            picture={logement.host.picture}
          />
          <FicheRating rating={logement.rating} />
        </div>
      </div>
      <div className="fiche__collapse__container">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </main>
  )
}

export default Fiches
