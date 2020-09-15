import React, { createRef, Component } from 'react';
import About from './ScrollLoadSimple/Com/About';
import Header from './ScrollLoadSimple/Com/Header';
import Construct from './ScrollLoadSimple/Com/Construct';
import Test from './ScrollLoadSimple/Com/Test';
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
      return (<div> <About className={this.state.className} />
        <Construct className={this.state.className} />
        <Test className={this.state.className} />
      </div>
      )
    }
  }
  render() {
    return this.change()
  }
}
export default App;