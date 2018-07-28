import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="w-100">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <FormGroup row>
            <Label for="deck-size" sm={4} className="text-white text-right">
              Deck size:
            </Label>
            <Col sm={4}>
              <Input type="select" name="select" id="deck-size">
                <option>6</option>
                <option>8</option>
                <option>10</option>
                <option>12</option>
                <option>13</option>
                <option>16</option>
                <option>18</option>
                <option>20</option>
              </Input>
            </Col>
            <Col sm={4}>
              <Button color="danger">START NEW GAME</Button>
            </Col>
          </FormGroup>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/highscores" className="nav-link">
                HIGHSCORES
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    );
  }
}
