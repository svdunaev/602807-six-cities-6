import React from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../common-prop-types";
import PlaceCard from "../place-card/place-card";


const FavLocationsItem = (props) => {
  const {cityName, cityOffers} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers.map((cardItem) =>
          <PlaceCard
            key={cardItem.id}
            card={cardItem}
            rootClassName="favorites__card"
            imageWrapperClassName="favorites__image-wrapper"
            infoWrapperClassName="favorites__card-info"/>
        )}
      </div>
    </li>
  );
};

FavLocationsItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(OfferType).isRequired,
};

export default FavLocationsItem;
