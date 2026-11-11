
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">✦</span>

            <span>
              WORLD <b>EXPLORER</b>
              <small>JOURNEYS WORTH REMEMBERING</small>
            </span>
          </Link>

          <p>
            Thoughtfully curated journeys for curious souls.
            Go a little further, and come back with a story.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Plan your trip</h4>
          <Link to="/packages">Tour packages</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/help">Travel help</Link>
        </div>

        <div className="footer-news">
          <h4>Letters from elsewhere</h4>

          <p>
            Get destination inspiration and thoughtful
            travel notes.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
            />

            <button aria-label="Subscribe">
              <ArrowUpRight size={18} />
            </button>
          </form>

          <div className="socials">
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram />
            </a>

            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook />
            </a>

            <a href="https://youtube.com" aria-label="YouTube">
              <Youtube />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} World Explorer.
          All journeys welcome.
        </span>

        <span>DISCOVER · EXPLORE · EXPERIENCE</span>
      </div>

    </footer>
  );
}
