onScroll = throttle(() => {
  const node = this.ref.current;
  if (this.checkVisible(node)) {
    this.setState({ loading: false });
    this.cancelEvent();
  }
}, 200)

addEvent = () => {
  // 滚动元素在最外层时，要在window上添加滚动事件
  const scrollParent = this.scrollParent || window;
  scrollParent.addEventListener('scroll', this.onScroll);
}

cancelEvent = () => {
  const scrollParent = this.scrollParent || window;
  scrollParent.removeEventListener('scroll', this.onScroll);
}