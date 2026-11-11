
import { Heart, ArrowUpRight } from "lucide-react";

export default function DestinationCard({
  item,
  saved,
  onToggle
}) {
  return (
    <article className="destination-card">

      <div className="destination-photo">

        <img
          src={item.image}
          alt={`${item.name}, ${item.country}`}
          loading="lazy"
        />

        <button
          className={`heart-btn ${saved ? "saved" : ""}`}
          onClick={() => onToggle(item.id)}
          aria-label={
            saved
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <Heart
            size={18}
            fill={saved ? "currentColor" : "none"}
          />
        </button>

        <span className="photo-tag">
          {item.type}
        </span>

      </div>

      <div className="destination-info">

        <div>
          <h3>{item.name}</h3>
          <p>{item.country}</p>
        </div>

        <span className="card-arrow">
          <ArrowUpRight size={18} />
        </span>

      </div>

      <p className="destination-description">
        {item.description}
      </p>

      <div className="destination-meta">
        <span>{item.days}</span>

        <strong>
          From ${item.price.toLocaleString()}
          <small> / person</small>
        </strong>
      </div>

    </article>
  );
}
