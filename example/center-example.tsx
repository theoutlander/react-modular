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
      <Center
        style={{
          backgroundColor: "red",
          height: 500,
          width: 500,
        }}
      >
        <Center
          style={{
            backgroundColor: "yellow",
            height: 300,
            width: 300,
          }}
        >
          <Button
            text={this.state.text}
            onClick={() => {
              this.setState({ text: "This is a clicked button in the center button!" });
            }}
          />
        </Center>
      </Center>
    );
  }
}
