import React from 'react';
import { Row, Col } from 'reactstrap';

export default props => (
  <Row className="mt-5">
    <Col className="highscores text-center">
      <h1 className="mb-5">HIGHSCORES</h1>
      <h6 className="mb-0 text-black-50">Best:</h6>
      <p className="highscore">{props.highscore || 0}</p>
      <h6 className="mb-0 text-black-50">Second:</h6>
      <p className="highscore">{props.highscore || 0}</p>
      <h6 className="mb-0 text-black-50">Third:</h6>
      <p className="highscore">{props.highscore || 0}</p>
    </Col>
  </Row>
);
