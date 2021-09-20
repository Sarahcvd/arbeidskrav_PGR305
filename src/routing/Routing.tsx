import { FC } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainNavigation } from "../components/shared/MainNavigation";
import { Home } from "../pages/Home";
import { Customers } from "../pages/Customers";

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
