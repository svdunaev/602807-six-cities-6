import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {OfferType} from "../../common-prop-types";

const OffersList = (props) => {
  const {cards} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((cardItem) => {
        return (
          <PlaceCard
            key={cardItem.id}
            card={cardItem}
            rootClassName="cities__place-card"
            imageWrapperClassName="cities__image-wrapper" />
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  cards: PropTypes.arrayOf(OfferType).isRequired,
};

export default OffersList;
