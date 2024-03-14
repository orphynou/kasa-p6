import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import Loader from "../Loader/loader";
import "./logementsList.scss";

const LogementsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./data/logements.json");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="logements__card">
          {data.map((logements) => (
            <Card key={logements.id} logements={logements} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogementsList;
