import { Button, Container } from "../src/index";
import React, { Component } from "react";

type State = {
  text: string;
};

export default class ContainerExample extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      text: "this is my button",
    };
  }

  render() {
    return (
      <>
        <Container centered>This is text in a container</Container>
        <Container style={{ background: "green" }}>
          <Button text="What is this" style={{ background: "red" }} />
        </Container>

        <Container>
          <Container>Left</Container>
          <Container>Right</Container>
        </Container>
      </>
    );
  }
}
