import React from "react";
import {
  Badge,
  Button,
  Carousel,
  Col,
  Image,
  Row,
  Stack,
  Tab,
  Tabs,
} from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import Reviews from "../components/reviews";
import OpenHours from "./openhours";

export default function Detail({ data, rate }) {
  const today = new Date().getDay();

  return (
    <div>
      <div className="position-relative w-100">
        <Carousel fade slide indicators={false}>
          {data?.photos?.map((pic, i) => (
            <Carousel.Item key={i}>
              <Image
                className="d-block"
                src={pic}
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div
          className="w-100 position-absolute text-start p-3 py-2 bg-gradient-dark"
          style={{ bottom: 0, zIndex: 1 }}
        >
          <h1 className="text-white display-5 fw-bold m-0">{data?.name}</h1>
          {data?.hours?.map((h, i) => (
            <label key={i}>
              {h.is_open_now ? (
                <label className="fw-bold text-success ">Open</label>
              ) : (
                <label className="fw-bold text-danger ">Close</label>
              )}
              {h.open?.map((e, i) => {
                if (e.day === today) {
                  return (
                    <label>
                      <OpenHours start={e.start} end={e.end} />
                    </label>
                  );
                }
              })}
              {data?.price ? (
                <span className="text-white me-2">- {data?.price}</span>
              ) : null}
            </label>
          ))}
          <label className="d-flex align-items-center mt-3">
            <Stack direction="horizontal" gap={2}>
              {data?.categories?.map((catg, i) => (
                <Badge key={i} bg="light" className="text-dark">
                  {catg.title}
                </Badge>
              ))}
              <FaCheckCircle color="#0d6efd" />
              <span className="mx-2 text-primary fw-bold">Claimed</span>
            </Stack>
          </label>
        </div>
      </div>
      <Tabs
        defaultActiveKey="home"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title={data?.name}>
          <div className="px-3 pb-3 text-start">
            <Row>
              <Col md={6} className="ps-4">
                <h4 className="fw-bold text-primary">Open</h4>
                <table className="w-100">
                  {data?.hours[0]?.open.map((e, i) => {
                    if (e.day === 0) {
                      const timeON = e.start.split("");
                      const timeOFF = e.end.split("");

                      timeON.splice(2, 0, ":");
                      timeOFF.splice(2, 0, ":");
                      return (
                        <tbody>
                          <tr key={i}>
                            <th>
                              <label>Monday</label>
                            </th>
                            {timeON.join("")}
                            {" - "}
                            {timeOFF.join("")}
                          </tr>
                        </tbody>
                      );
                    }
                    if (e.day === 1) {
                      const timeON = e.start.split("");
                      const timeOFF = e.end.split("");

                      timeON.splice(2, 0, ":");
                      timeOFF.splice(2, 0, ":");
                      return (
                        <tbody>
                          <tr key={i}>
                            <th>
                              <label>Tuesday</label>
                            </th>
                            {timeON.join("")}
                            {" - "}
                            {timeOFF.join("")}
                          </tr>
                        </tbody>
                      );
                    }
                    if (e.day === 2) {
                      const timeON = e.start.split("");
                      const timeOFF = e.end.split("");

                      timeON.splice(2, 0, ":");
                      timeOFF.splice(2, 0, ":");
                      return (
                        <tbody>
                          <tr key={i}>
                            <th>
                              <label>Wednesday</label>
                            </th>
                            {timeON.join("")}
                            {" - "}
                            {timeOFF.join("")}
                          </tr>
                        </tbody>
                      );
                    }
                    if (e.day === 3) {
                      const timeON = e.start.split("");
                      const timeOFF = e.end.split("");

                      timeON.splice(2, 0, ":");
                      timeOFF.splice(2, 0, ":");
                      return (
                        <tbody>
                          <tr key={i}>
                            <th>
                              <label>Thursday</label>
                            </th>
                            {timeON.join("")}
                            {" - "}
                            {timeOFF.join("")}
                          </tr>
                        </tbody>
                      );
                    }
                    if (e.day === 4) {
                      const timeON = e.start.split("");
                      const timeOFF = e.end.split("");

                      timeON.splice(2, 0, ":");
                      timeOFF.splice(2, 0, ":");
                      return (
                        <tbody>
                          <tr key={i}>
                            <th>
                              <label>Friday</label>
                            </th>
                            {timeON.join("")}
                            {" - "}
                            {timeOFF.join("")}
                          </tr>
                        </tbody>
                      );
                    }
                    if (e.day === 5) {
                      const timeON = e.start.split("");
                      const timeOFF = e.end.split("");

                      timeON.splice(2, 0, ":");
                      timeOFF.splice(2, 0, ":");
                      return (
                        <tbody>
                          <tr key={i}>
                            <th>
                              <label>Saturday</label>
                            </th>
                            {timeON.join("")}
                            {" - "}
                            {timeOFF.join("")}
                          </tr>
                        </tbody>
                      );
                    }
                    if (e.day === 6) {
                      const timeON = e.start.split("");
                      const timeOFF = e.end.split("");

                      timeON.splice(2, 0, ":");
                      timeOFF.splice(2, 0, ":");
                      return (
                        <tbody>
                          <tr key={i}>
                            <th>
                              <label>Sunday</label>
                            </th>
                            {timeON.join("")}
                            {" - "}
                            {timeOFF.join("")}
                          </tr>
                        </tbody>
                      );
                    }
                  })}
                </table>
              </Col>
              <Col md={6} className="position-relative ps-3">
                <h4 className="fw-bold text-primary">Location</h4>
                <Stack direction="horizontal" gap={3}>
                  <Image
                    fluid
                    src={data?.image_url}
                    style={{
                      objectFit: "cover",
                      width: 50,
                      height: 50,
                    }}
                  />
                  <div>
                    <Stack>
                      <label className="fw-bold" style={{ color: "#198754" }}>
                        {data?.location?.address1}
                      </label>
                      <label className="fw-bold">
                        {data?.location?.city},{data?.location?.state}{" "}
                        {data?.location?.zip_code}
                      </label>
                      <label className="fs-6">{data?.display_phone}</label>
                    </Stack>
                  </div>
                </Stack>
                <Button
                  href={data?.url}
                  //   variant="outline-primary"
                  className="rounded-0 my-3 shadow "
                >
                  <span className="fw-bold">Message the Business</span>
                </Button>
              </Col>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          <Reviews data={rate} count={data?.rating} />
        </Tab>
      </Tabs>
    </div>
  );
}
