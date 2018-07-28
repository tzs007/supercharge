import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Container, Col, Row, Navbar, NavbarBrand } from 'reactstrap';

import Navigation from './Navigation';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import HighScores from './pages/HighScores/HighScores';

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src="/supercharge-logo.svg" alt="" className="logo" />MEMORY
            GAME
          </NavbarBrand>

          {this.props.location.pathname !== '/' ? <Navigation /> : <div />}
        </Navbar>
        <Container className="mt-5">
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/highscores" component={HighScores} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(AppLayout);
