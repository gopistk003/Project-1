
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Map,
  Headphones,
  Star
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";

import {
  destinations,
  packages,
  gallery
} from "../data";

export default function Home() {

  const [query, setQuery] = useState("");

  const [saved, setSaved] = useState(() =>
    JSON.parse(localStorage.getItem("we-wishlist") || "[]")
  );

  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    return destinations.filter((d) =>
      `${d.name} ${d.country} ${d.type}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

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

  return (
    <>
      <Navbar />

      <main>

        {/* HERO SECTION */}

        <section className="hero">

          <div className="hero-image"></div>
          <div className="hero-shade"></div>

          <div className="hero-inner">

            <span className="eyebrow light">
              <i></i>
              CURATED JOURNEYS · UNFORGETTABLE MOMENTS
            </span>

            <h1>
              Go beyond
              <br />
              <em>the ordinary.</em>
            </h1>

            <p>
              Find your somewhere. We’ll help you make
              every mile meaningful.
            </p>

            <a className="btn btn-gold" href="#destinations">
              Explore destinations
              <ArrowUpRight size={17} />
            </a>

            <div className="hero-note">
              <span>01 / 04</span>
              <span className="hero-line"></span>
              <span>THE WORLD IS WAITING</span>
            </div>

          </div>

          <div className="hero-caption">
            A QUIETER KIND OF ADVENTURE
          </div>

        </section>


        {/* DESTINATION SEARCH */}

        <section className="search-section">

          <div className="search-intro">

            <span className="eyebrow">
              YOUR NEXT CHAPTER
            </span>

            <h2>
              Where would you
              <br />
              <em>like to wander?</em>
            </h2>

          </div>

          <div className="search-box">

            <Search size={20} />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a destination, country or experience..."
            />

            <a href="#destinations">
              Find a place
              <ArrowRight size={17} />
            </a>

          </div>

        </section>


        {/* DESTINATIONS */}

        <section
          className="section destinations-section"
          id="destinations"
        >

          <div className="section-heading">

            <div>
              <span className="eyebrow">
                THE WORLD, THOUGHTFULLY CURATED
              </span>

              <h2>
                Places that stay
                <br />
                <em>with you.</em>
              </h2>
            </div>

            <p>
              From hidden coastlines to storied cities,
              discover places that invite you to slow down
              and see more.
            </p>

          </div>

          <div className="destination-grid">

            {filtered
              .slice(0, showAll ? 6 : 4)
              .map((item) => (
                <DestinationCard
                  key={item.id}
                  item={item}
                  saved={saved.includes(item.id)}
                  onToggle={toggle}
                />
              ))}

          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              No destinations found. Try searching for
              Bali, Italy or Japan.
            </div>
          )}

          {filtered.length > 4 && (
            <button
              className="text-button centered"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show less" : "View all destinations"}
              <ArrowRight size={16} />
            </button>
          )}

        </section>


        {/* TRAVEL EXPERIENCE */}

        <section className="experience-band">

          <div className="experience-image">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85"
              alt="Mountain lake surrounded by forest"
            />
          </div>

          <div className="experience-copy">

            <span className="eyebrow light">
              TRAVEL, WITH INTENTION
            </span>

            <h2>
              Not just places.
              <br />
              <em>Perspectives.</em>
            </h2>

            <p>
              We believe the best journeys leave room
              for wonder. Our local connections and
              considered details help you experience
              a destination beyond its postcards.
            </p>

            <Link to="/about" className="light-link">
              Our way of travelling
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </section>


        {/* TOUR PACKAGES */}

        <section className="section packages-section" id="packages">

          <div className="section-heading">

            <div>
              <span className="eyebrow">
                MADE FOR THE MOMENT
              </span>

              <h2>
                Journeys worth
                <br />
                <em>looking forward to.</em>
              </h2>
            </div>

            <Link to="/packages" className="text-button">
              All journeys
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="package-grid">

            {packages.map((p) => (

              <article className="package-card" key={p.id}>

                <div className="package-image">
                  <img src={p.image} alt={p.name} />
                  <span>{p.tag}</span>
                </div>

                <div className="package-content">

                  <div className="package-location">
                    {p.location}
                  </div>

                  <h3>{p.name}</h3>

                  <p>{p.detail}</p>

                  <div className="package-bottom">
                    <span>{p.days}</span>

                    <strong>
                      ${p.price.toLocaleString()}
                      <small> / person</small>
                    </strong>
                  </div>

                  <div className="rating">
                    <Star size={14} fill="currentColor" />
                    {p.rating}
                    <span>Guest rating</span>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* WHY CHOOSE US */}

        <section className="values-section">

          <div className="section-heading centered-heading">

            <span className="eyebrow">
              THE WORLD EXPLORER DIFFERENCE
            </span>

            <h2>
              Good journeys begin
              <br />
              <em>with good people.</em>
            </h2>

          </div>

          <div className="values-grid">

            <div>
              <ShieldCheck />
              <h3>Travel with confidence</h3>
              <p>
                Thoughtful planning and trusted local
                partners, every step of the way.
              </p>
            </div>

            <div>
              <Map />
              <h3>Made around you</h3>
              <p>
                Flexible experiences shaped around
                your pace, interests and curiosity.
              </p>
            </div>

            <div>
              <Headphones />
              <h3>Here when you need us</h3>
              <p>
                Real people ready to help before,
                during and after your journey.
              </p>
            </div>

            <div>
              <Sparkles />
              <h3>Details that matter</h3>
              <p>
                Small touches and meaningful moments
                that make a trip yours.
              </p>
            </div>

          </div>

        </section>


        {/* TRAVEL GALLERY */}

        <section className="section gallery-section">

          <div className="section-heading">

            <div>
              <span className="eyebrow">
                POSTCARDS FROM THE WORLD
              </span>

              <h2>
                A little inspiration
                <br />
                <em>for the road.</em>
              </h2>
            </div>

            <p>
              Every photograph holds a possibility.
              Where will yours take you?
            </p>

          </div>

          <div className="gallery-grid">

            {gallery.map((src, i) => (
              <div
                className={`gallery-item gallery-${i + 1}`}
                key={src}
              >
                <img
                  src={src}
                  alt={`Travel inspiration ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}

          </div>

        </section>


        {/* TRAVEL QUOTE */}

        <section className="quote-section">

          <span className="quote-mark">“</span>

          <blockquote>
            The real voyage of discovery consists not
            in seeking new landscapes, but in having
            new eyes.
          </blockquote>

          <span className="quote-author">
            — MARCEL PROUST
          </span>

        </section>


        {/* NEWSLETTER */}

        <section className="newsletter-cta">

          <div>

            <span className="eyebrow light">
              A NOTE FROM THE WORLD
            </span>

            <h2>
              Let the world
              <br />
              <em>come to you.</em>
            </h2>

            <p>
              Occasional inspiration, thoughtful itineraries
              and places worth dreaming about.
            </p>

          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("You're on the list. Happy travels!");
            }}
          >

            <label htmlFor="newsletter-email">
              YOUR EMAIL ADDRESS
            </label>

            <div>

              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <button aria-label="Subscribe">
                <ArrowUpRight />
              </button>

            </div>

            <small>
              No noise. Just good places and good stories.
            </small>

          </form>

        </section>

      </main>

      <Footer />

      <Link className="wishlist-float" to="/wishlist">
        <span>♡</span>
        Wishlist
        <b>{saved.length}</b>
      </Link>

    </>
  );
}










