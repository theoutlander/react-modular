import { Button, Center } from "../src/index";
import React, { Component } from "react";

type State = {
  // text: string;
};

export default class CenterExample extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      text: "this is my CENTERTED button",
    };
  }

  render() {
    return (
      <Center>
        <Button
          text={this.state.text}
          onClick={() => {
            this.setState({ text: "This is a clicked button in the center button!" });
          }}
        />
      </Center>
    );
  }
}
