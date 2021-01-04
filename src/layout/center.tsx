import React, { Component } from "react";
import _ from "lodash";
import merge from "../util/merge";

type Props = {
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
      },
    };

    // console.log(this.props);
    // console.log(style);
    // _.assignIn(result, style, this.props);
    let result = merge.both(style, this.props);
    console.log(result);

    return (
      <div {...result}>{this.props.children}</div>
      // <section className="hero is-fullheight">
      //   <div className="hero-body has-text-centered">
      //     <div className="container">{this.props.children}</div>
      //   </div>
      // </section>
    );
  }
}
