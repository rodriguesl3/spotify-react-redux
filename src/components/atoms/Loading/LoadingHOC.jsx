import React, { Component } from 'react';
import Load from '../Load/Load';

const LoaderHOC = propName => WrappedComponnet => class LoaderHOC extends Component {
  isEmpty(prop) {
    return this.prop === null ||
      prop === undefined ||
      (prop.hasOwnProperty('length') && prop.length === 0) ||
      (prop.constructor === Object && Object.keys(prop).length === 0);
  }

  render() {
    return this.isEmpty(this.props[propName]) === 0
      ? <Load />
      : <WrappedComponnet {... this.props} />;
  }
};

export default LoaderHOC;
