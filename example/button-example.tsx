import { Button } from "../src/index";
import React, { Component } from "react";

type State = {
  text: string;
};

export default class ButtonExample extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      text: "this is my button",
    };
  }

  render() {
    return (
      <Button
        text={this.state.text}
        onClick={() => {
          this.setState({ text: "This is a clicked button!" });
        }}
      />
    );
  }
}
