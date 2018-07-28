import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';

import CardComponent from '../../elements/Card/CardComponent';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [
        { id: 0, isMatched: false, isTurned: false },
        { id: 0, isMatched: false, isTurned: false },
        { id: 1, isMatched: false, isTurned: false },
        { id: 1, isMatched: false, isTurned: false },
        { id: 2, isMatched: false, isTurned: false },
        { id: 2, isMatched: false, isTurned: false },
        { id: 3, isMatched: false, isTurned: false },
        { id: 3, isMatched: false, isTurned: false },
        { id: 4, isMatched: false, isTurned: false },
        { id: 4, isMatched: false, isTurned: false },
        { id: 5, isMatched: false, isTurned: false },
        { id: 6, isMatched: false, isTurned: false },
        { id: 7, isMatched: false, isTurned: false },
        { id: 7, isMatched: false, isTurned: false },
        { id: 8, isMatched: false, isTurned: false },
        { id: 8, isMatched: false, isTurned: false },
        { id: 9, isMatched: false, isTurned: false },
        { id: 9, isMatched: false, isTurned: false },
      ],
      matches: {},
      highscores: [],
    };
  }

  render() {
    const { deck } = this.state;
    console.log(deck);

    return (
      <Row noGutters flex>
        {_.map(deck, (card, index) => (
          <Col sm={2}>
            <CardComponent key={index} {...card} />
          </Col>
        ))}
      </Row>
    );
  }
}
