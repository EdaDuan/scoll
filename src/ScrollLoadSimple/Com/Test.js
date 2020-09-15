import React, { Component } from 'react';
import './style3.css';
class Test extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-text">
          <div className={this.props.className}>
            <h3>Test GIt</h3>
            <p>This is a Test that will appear.</p>
            <p>This is a kill that will appear.</p>
            <p>This is add branch</p>
            <p>This is add branch</p>
          </div>

        </div>
      </div>
    )
  }
}
export default Test;