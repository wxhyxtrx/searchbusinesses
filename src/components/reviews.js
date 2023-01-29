import React from "react";
import { Card, Col, Container, Image, Row, Stack } from "react-bootstrap";
import Rating from "./rating";

export default function Reviews({ data, count }) {
  return (
    <div className="text-start">
      <Container>
        <h3 className="fw-bold mt-3 mb-4 mx-3 text-primary">Reviews & Rate</h3>
        <Row className="px-4 my-3 pb-4 border-bottom">
          <Col className="border-end">
            <label className="fw-bold">Total Reviews</label>
            <h1 className="m-0">{data?.total}</h1>
            <label style={{ fontSize: "10pt", color: "gray" }}>
              Growth in reviews on this place{" "}
            </label>
          </Col>
          <Col>
            <label className="fw-bold">Average Rating</label>
            <div className="d-flex align-items-center">
              <h1 className="m-0 me-2">{count}</h1>{" "}
              <h3>
                <Rating rating={count} />
              </h3>
            </div>
            <label className="text-secondary " style={{ fontSize: "10pt" }}>
              Average rating on this place
            </label>
          </Col>
        </Row>
        <div>
          {data?.reviews?.map((e, i) => (
            <Card
              key={i}
              className="my-2 rounded-0 border-0 pb-2 shadow-sm border-bottom"
            >
              <Row>
                <Col md={4}>
                  <Stack direction="horizontal" gap={2}>
                    <Image
                      fluid
                      roundedCircle
                      src={e.user.image_url}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                    <Stack>
                      <h4>{e.user.name}</h4>
                      <Stack direction="horizontal">
                        <Rating rating={e.rating} />
                      </Stack>
                      <label
                        className="text-secondary fw-semibold"
                        style={{ fontSize: "10pt" }}
                      >
                        {e.time_created}
                      </label>
                    </Stack>
                  </Stack>
                </Col>
                <Col>
                  <Card.Body className="m-0 p-0">{e.text}</Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
