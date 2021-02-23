import React from "react";
import PropTypes from "prop-types";
import HomePage from "../home-page/home-page";
import LoginPage from "../login-page/login-page";
import FavPage from "../fav-page/fav-page";
import OfferPage from "../offer-page/offer-page";
import PageNotFound from "../page-not-found/page-not-found";
import {OfferType} from "../../common-prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {
  const {cards} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage cards={cards} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/favorites" exact>
          <FavPage cards={cards}/>
        </Route>
        <Route path="/offer/:id">
          <OfferPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(OfferType).isRequired,
};

export default App;
