import React from "react";
import PropTypes from "prop-types";
import HomeScreen from "../home-screen/home-screen";
import LoginScreen from "../login-screen/login-screen";
import FavScreen from "../fav-screen/fav-screen";
import OfferScreen from "../offer-screen/offer-screen";
import PageNotFound from "../404/404";
import {CardType} from "../../common-prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {
  const {cards} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomeScreen cards={cards} />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/favorites" exact>
          <FavScreen />
        </Route>
        <Route path="/offer/:id">
          <OfferScreen />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
};

export default App;
