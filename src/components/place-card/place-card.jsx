import React, {useState} from "react";
import {CardType} from "../../common-prop-types";
import {Link} from "react-router-dom";


const PlaceCard = (props) => {
  const [, setActive] = useState(false);
  const {
    card: {name, price, rating, type, isPremium, isFavorite, previewImage}
  } = props;
  return (
    <article className="cities__place-card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="offer/:id" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
          <img className="place-card__image" src={previewImage} style={{width: `260px`, height: `200px`}} alt="Place image"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            `place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`
          } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = CardType.isRequired;

export default PlaceCard;
