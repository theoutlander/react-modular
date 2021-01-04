import React, { Component } from "react";

type Props = {
  centered?: boolean;
};

export default class Container extends Component {
  public static defaultProps = {
    centered: true,
  };

  render() {
    return (
      <div className="container has-centered-texts" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}
