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
        <div className="partner-card-name">
          <span>{this.originEmployee.first}</span>
          <span>{this.originEmployee.last}</span>
        </div>
        <i className="fa fa-long-arrow-right"></i>
        <div className="partner-card-name">
          <span>{this.destinationEmployee.first}</span>
          <span>{this.destinationEmployee.last}</span>
        </div>
      </div>
    );
  }
}

export default PartnerCard;
