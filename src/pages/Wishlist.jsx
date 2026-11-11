
import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";

import { destinations } from "../data";

export default function Wishlist() {

  const [saved, setSaved] = useState(() =>
    JSON.parse(localStorage.getItem("we-wishlist") || "[]")
  );

  const toggle = (id) => {
    setSaved((old) => {
      const next = old.includes(id)
        ? old.filter((x) => x !== id)
        : [...old, id];

      localStorage.setItem(
        "we-wishlist",
        JSON.stringify(next)
      );

      return next;
    });
  };

  const items = destinations.filter((d) =>
    saved.includes(d.id)
  );

  return (
    <>
      <Navbar />

      <main className="simple-page">

        <span className="eyebrow">
          YOUR PERSONAL COLLECTION
        </span>

        <h1>
          Saved <em>places.</em>
        </h1>

        <p>
          Keep the places you love close,
          until you're ready to go.
        </p>

        {items.length > 0 ? (

          <div className="destination-grid wishlist-grid">

            {items.map((item) => (
              <DestinationCard
                key={item.id}
                item={item}
                saved={true}
                onToggle={toggle}
              />
            ))}

          </div>

        ) : (

          <div className="empty-wishlist">

            <div>♡</div>

            <h2>Your wishlist is waiting.</h2>

            <p>
              Save destinations by tapping the
              heart on any destination card.
            </p>

            <Link to="/#destinations" className="btn">
              Explore destinations →
            </Link>

          </div>

        )}

      </main>

      <Footer />
    </>
  );
}
