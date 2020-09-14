import React from 'react';
import './style.css';
import throttle from 'lodash/throttle';

class ScrollLoad extends React.Component {
  state = { loading: true }
  ref = React.createRef();

  // componentDidMount() {
  //   const node = this.ref.current;
  //   this.scrollParent = this.getScrollParent(node);
  //   if (this.checkVisible(node)) {
  //     this.setState({ loading: false });
  //   }
  // }
  componentDidMount() {
    const node = this.ref.current;
    this.scrollParent = this.getScrollParent(node);
    if (this.checkVisible(node)) {
      this.setState({ loading: false });
    } else {
      this.addEvent();
    }
  }

  getScrollParent = (node) => {
    if (!node || node.parentNode === document.documentElement) {
      return null;
    }
    const parentNode = node.parentNode;
    if (parentNode.scrollHeight > parentNode.clientHeight
      || parentNode.scrollWidth > parentNode.clientWidth
    ) {
      return parentNode;
    }
    return this.getScrollParent(parentNode);
  }
  checkVisible = (node) => {
    if (node) {
      const { top, bottom, left, right } = node.getBoundingClientRect();
      return bottom > 0
        && top < window.innerHeight
        && left < window.innerWidth
        && right > 0;
    }
    return false;
  }


  // checkVisible = (node) => {
  //   let offsetTop = node.offsetTop;
  //   let offsetLeft = node.offsetLeft;
  //   let parentNode = node.parentNode;
  //   while (parentNode && parentNode !== document.body) {
  //     if (getComputedStyle(parentNode).position === 'relative') {
  //       offsetTop += parentNode.offsetTop;
  //       offsetLeft += parentNode.offsetLeft;
  //     }
  //     parentNode = parentNode.parentNode;
  //   }
  //   // 滚动元素在最外层时，计算scrollTop要使用scrollingElement
  //   const scrollParent = this.scrollParent || document.scrollingElement;
  //   return window.innerHeight + scrollParent.scrollTop > offsetTop
  //     && window.innerWidth + scrollParent.scrollLeft > offsetLeft;
  // }

  render() {
    const { loading } = this.state;
    const { text } = this.props;
    return (
      <div className="scrollitem" ref={this.ref}>
        {
          loading ? 'Loading...' : text
        }
      </div>
    )
  }
}

export default ScrollLoad;