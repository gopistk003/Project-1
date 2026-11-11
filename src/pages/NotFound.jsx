
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="error-page">

      {/* LEFT IMAGE SECTION */}

      <section className="error-visual">

        <div className="error-visual-shade"></div>

        <Link to="/" className="error-logo">
          ✦ WORLD EXPLORER
        </Link>

        <div className="visual-content">

          <span>DISCOVER THE UNKNOWN</span>

          <h1>
            The world is too
            <br />
            beautiful to stop
            <br />
            exploring.
          </h1>

          <p>
            Every journey begins with a single step.
          </p>

        </div>

      </section>


      {/* RIGHT ERROR SECTION */}

      <section className="error-content">

        <div className="error-main">

          <span className="error-label">
            OOPS! YOU ARE OFF THE MAP
          </span>

          <h2>404</h2>

          <h3>
            Looks like you've lost your way.
          </h3>

          <p>
            The destination you're looking for doesn't
            exist or may have moved. Don't worry, your
            next adventure is just one click away.
          </p>

          <Link to="/" className="home-button">
            <span>←</span>
            Back to Home
          </Link>

        </div>


        {/* FOOTER */}

        <footer className="error-footer">

          <strong>
            ✦ WORLD EXPLORER
          </strong>

          <span>
            DISCOVER · EXPLORE · EXPERIENCE
          </span>

        </footer>

      </section>

    </main>
  );
}
