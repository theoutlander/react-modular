import React, { Component } from "react";
import _ from "lodash";
import merge from "../util/merge";

type Props = {
  style?: any;
  centered?: boolean;
};

export default class Center extends Component {
  public static defaultProps = {
    centered: true,
  };

  render() {
    let style = {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
      },
    };

    let result = merge.both(style, this.props);
    console.log(result);

    return <div {...result}>{this.props.children}</div>;
  }
}
