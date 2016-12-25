// layout布局,Row比较简单 直接display:block with: 100%就可以
import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import './index.less';

export default class Row extends Component {
  static propTypes = {
    // 在Row中加入space来代表Row中每个组件之间的间距,与Col中的offset每个组件右移不同
    space: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  render() {
    const children = this.props.children instanceof Array ? this.props.children : [this.props.children];
    return (
      <div className="row">
        {
          children.map((child, index) => cloneElement(child, {
            key: index,
            space: this.props.space
          }))
        }
      </div>
    )
  }
}