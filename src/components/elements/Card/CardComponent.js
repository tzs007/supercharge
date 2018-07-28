import React, { Component } from 'react';
import { Card } from 'reactstrap';

export default class CardComponent extends Component {
  render() {
    const { id } = this.props;
    return (
      <Card>
        <img src={`./cards/${id}.png`} alt="" className="img-fluid" />
      </Card>
    );
  }
}
