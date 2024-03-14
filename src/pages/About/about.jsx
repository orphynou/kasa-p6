import Banner from '../../components/Banner/banner.jsx'
import bannerApropos from '../../assets/ImageApropos.png'
import Collapse from '../../components/Collapse/collapse.jsx'
import './about.scss'
import { useEffect, useState } from 'react'

function About() {
  const titleBanner = ''
  const imageBanner = bannerApropos
  const [aboutData, setAbout] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data/about.json')
      const jsonData = await res.json()
      setAbout(jsonData)
    }
    fetchData()
  }, [])

  return (
    <main className="main__about">
      <Banner title={titleBanner} image={imageBanner} />
      <div className="collapse">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </main>
  )
}

export default About
