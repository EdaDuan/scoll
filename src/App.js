import React, { createRef, Component } from 'react';
import About from './ScrollLoadSimple/Com/About';
import Header from './ScrollLoadSimple/Com/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      className: 'hidden',
      changeNum: 0
    }
  }
  handleScroll() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 0) {
      this.setState({
        className: 'show',
        changeNum: 1
      })
    } else if ((document.documentElement.scrollTop <= 0)) {

      this.setState({
        className: 'hidden',
        changeNum: 0
      })
      console.log(this.state.changeNum)
    }
  }
  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }
  // style={{visibility: this.state.showButton ? 'visible' : 'hidden' }}
  change() {
    if (this.state.changeNum === 0) {
      return <Header />
    } else {
      return <About className={this.state.className} />
    }
  }
  render() {
    return this.change()
  }
}
export default App;