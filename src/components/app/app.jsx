import React from "react";
import PropTypes from "prop-types";
import HomeScreen from "../home-screen/home-screen";
import {CardType} from "../place-card/place-card";

const App = (props) => {
  const {cards} = props;
  return (
    <HomeScreen cards={cards} />
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
};

export default App;
