import React, { Component } from "react";

type Props = {
  // centered?: boolean;
};

export default class Center extends Component {
  public static defaultProps = {
    // centered: true,
  };

  render() {
    let style = {
      style: {
        height: "100%",
        width: "100%",
        backgroundColor: "red",
      },
    };

    return <div {...style}>{this.props.children}</div>;
  }
}
