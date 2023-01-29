import React, { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormSelect,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FaMapMarkerAlt, FaSearch, FaStream } from "react-icons/fa";
import "../assets/css/style.css";
import { AppContext } from "../context/appcontext";

export default function SearchBar() {
  const { setLocation, setSearch } = useContext(AppContext);

  const handleChange = (e) => {
    setLocation((e.target.name = e.target.value));
  };
  const handleSearch = (e) => {
    setSearch((e.target.name = e.target.value));
  };

  return (
    <div>
      <Form>
        <Container>
          <Row>
            <Col md={6} className="p-1">
              <InputGroup className="mb-3 shadow-sm rounded borderInput ">
                <InputGroup.Text id="seacrh" className=" bg-white border-0">
                  <FaSearch color="#4175df" />
                </InputGroup.Text>
                <FormControl
                  onChange={handleSearch}
                  name="name"
                  className="inputOutline  border-0"
                  placeholder="Search name resto"
                  aria-label="Search"
                  aria-describedby="seacrh"
                  style={{ borderLeft: "none" }}
                />
              </InputGroup>
            </Col>
            <Col md={4} className="p-1">
              <InputGroup className="mb-3 shadow-sm rounded borderInput ">
                <InputGroup.Text id="select" className=" bg-white border-0">
                  <FaMapMarkerAlt className="fs-5" color="#4175df" />
                </InputGroup.Text>
                <FormSelect
                  onChange={handleChange}
                  name="city"
                  className="inputOutline border-0"
                  aria-describedby="select"
                  style={{ borderLeft: "none" }}
                >
                  <option value="New York City">New York City</option>
                  <option value="Hawai">Hawai</option>
                  <option value="America">America</option>
                </FormSelect>
              </InputGroup>
            </Col>
            <Col md={2} className="p-1">
              <Button
                variant="btn-white w-100"
                className="mb-3 shadow-sm rounded"
                style={{
                  border: "1px solid #eceff1",
                }}
              >
                <FaStream color="#4175df" className="me-1" />{" "}
                <span>Filter</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
