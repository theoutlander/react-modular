import React, { Component } from "react";
import _ from "lodash";

type Props = {
  // centered?: boolean;
};

export default class Center extends Component {
  public static defaultProps = {
    // centered: true,
  };

  render() {
    let style = { height: "100%" };
    let props = { style, ...this.props };
    // console.log(props);

    let result = {};
    _.assignIn(result, style, props);

    return <div {...result}>{this.props.children}</div>;
  }
}
