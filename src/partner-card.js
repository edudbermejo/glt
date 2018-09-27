import React, { Component } from 'react';
import './partner-card.css';

class PartnerCard extends Component {
  constructor(props) {
    super(props);
    this.originEmployee = props.employee.name;
    this.destinationEmployee = props.employee.match.name;
  }
  render() {
    return (
      <div className="partner-card">
        <span>{this.originEmployee}</span>
        <i className="fa fa-long-arrow-right"></i>
        <span>{this.destinationEmployee}</span>
      </div>
    );
  }
}

export default PartnerCard;
