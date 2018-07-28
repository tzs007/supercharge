import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Col, Input } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="w-100 mt-5 text-center">
        <h1>SUPERCHARGE</h1>
        <h4>MEMORY GAME</h4>

        <FormGroup className="w-100 text-center">
          <Label for="deck-size" sm={12}>
            Deck size:
          </Label>
          <Col sm={{ size: 2, offset: 5 }} className="mb-3">
            <Input type="select" name="select" id="deck-size" disabled>
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
          <Col sm={{ size: 6, offset: 3 }}>
            <Link to="/game" className="btn-danger btn-lg">
              START NEW GAME
            </Link>
          </Col>
        </FormGroup>
      </div>
    );
  }
}
