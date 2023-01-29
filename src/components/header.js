import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/2702/2702598.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <label style={{ color: "#4175df" }} className="fw-bold">
              Business
            </label>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <label className="text-black">Hi, Wahyu</label>{" "}
              <Image
                fluid
                roundedCircle
                width={40}
                src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
