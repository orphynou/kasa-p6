import { useEffect, useState } from "react";
import Banner from "../../components/Banner/banner";
import Collapse from "../../components/Collapse/collapse";
import bannerApropos from "../../assets/ImageApropos.png";
import "./about.scss";

function About() {
  const titleBanner = "";
  const imageBanner = bannerApropos;
  const [aboutData, setAbout] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./data/about.json");
        const jsonData = await res.json();
        setAbout(jsonData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="main__about">
      <Banner title={titleBanner} image={imageBanner} />
      <div className="collapse">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </main>
  );
}

export default About;
