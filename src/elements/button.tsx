import React, { Component } from "react";

type Props = {
  text: string;
  onClick?: () => void;
};

export default class Button extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <button className="button" onClick={this.props.onClick} {...this.props}>
        {this.props.text}
      </button>
    );
  }
}
