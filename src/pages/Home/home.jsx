import Banner from "../../components/Banner/banner";
import LogementsList from "../../components/LogementsList/logementsList";
import bannerAccueil from "../../assets/ImageAccueil.png";

function Home() {
  const title = "Chez vous, partout et ailleurs";
  const image = bannerAccueil;
  return (
    <main className="main__home">
      <Banner title={title} image={image} />
      <LogementsList />
    </main>
  );
}

export default Home;
