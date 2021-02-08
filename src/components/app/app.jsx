import React from "react";
import PropTypes from "prop-types";
import HomeScreen from "../home-screen/home-screen";
import {CardType} from "../../common-prop-types";

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
