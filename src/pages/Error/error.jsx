import { Link } from "react-router-dom";
import "./error.scss";

function Error() {
  return (
    <main className="main__error">
      <p className="error__404">404</p>
      <p className="error__txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error___link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;
