import ButtonExample from "./button-example";
import ContainerExample from "./container-example";
import CenterExample from "./center-example";
import { Center, Container, Fit } from "../src/index";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Examples extends Component {
  render() {
    // let style = { height: "100%" };
    // let props = { style, ...this.props };
    // // console.log(props);

    // let result = {};
    // _.assignIn(result, style, props);

    return (
      <>
        <Container>
          <Center
            style={{
              backgroundColor: "red",
              height: 300,
              width: 300,
            }}
          >
            <ButtonExample />
          </Center>
        </Container>
      </>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById("root"));
