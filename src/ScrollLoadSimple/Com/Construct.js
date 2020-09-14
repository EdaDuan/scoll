import React, { Component } from 'react';
import './style2.css';
class Construct extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-text">
          <div className={this.props.className}>
            <h3>Title</h3>
            <p>This is a text that will appear.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Construct;