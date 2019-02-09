import React, { Component } from 'react';
import Load from '../Load/Load';

const LoaderHOC = (propName, WrappedComponnet) => class LoaderClassHOC extends Component {
  isEmpty(prop) {
    const result = this.prop === null
      || prop === undefined
      || (prop.hasOwnProperty('length') && prop.length === 0)
      || (prop.constructor === Object && Object.keys(prop).length === 0);

    return result;
  }

  render() {
    return this.isEmpty(this.props[propName])
      ? <Load />
      : <WrappedComponnet {... this.props} />;
  }
};

export default LoaderHOC;
