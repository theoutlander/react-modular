import ButtonExample from "./button-example";
import ContainerExample from "./container-example";
import CenterExample from "./center-example";
import { Center, Container, Fit, Top } from "../src/index";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Examples extends Component {
  render() {
    return (
      <div
        style={{
          height: 200,
          backgroundColor: "yellow",
        }}
      >
        <Fit>
          <Center
            style={{
              height: "100%",
            }}
          >
            <ButtonExample />
          </Center>{" "}
          <Top>
            {/* <Container
              style={{
                backgroundColor: "gray",
              }}
              centered
            >
              This is top
            </Container> */}
            {/* <div className="level has-background-white">
              <div className="level-left">asd</div>
              <div className="level-right">11111</div>
            </div> */}
            <nav className="level">
              <p className="level-item has-text-centered">
                <a className="link is-info">Home</a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info">Menu</a>
              </p>
              <p className="level-item has-text-centered">
                <img src="https://bulma.io/images/bulma-type.png" alt="" style={{ height: 30 }} />
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info">Reservations</a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info">Contact</a>
              </p>
            </nav>
          </Top>
        </Fit>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById("root"));
