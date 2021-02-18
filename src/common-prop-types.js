import PropTypes from "prop-types";
import {RoomType} from "./constants";

export const OfferType = PropTypes.exact({
  bedrooms: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired,
  host: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([RoomType.apartment, RoomType.hotel, RoomType.house, RoomType.room, RoomType.studio]).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
});

export const CardType = PropTypes.exact({
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([RoomType.apartment, RoomType.hotel, RoomType.house, RoomType.room]).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
});
