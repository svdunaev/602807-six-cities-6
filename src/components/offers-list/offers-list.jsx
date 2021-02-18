import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {CardType} from "../../common-prop-types";

const OffersList = (props) => {
  const {cards} = props;
  console.log(cards);
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((cardItem) => {
        return (
          <PlaceCard card={cardItem} key={cardItem.id} />
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
};

export default OffersList;
