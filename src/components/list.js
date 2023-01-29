import React, { useContext, useState } from "react";
import {
  Badge,
  Card,
  CardImg,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import "../assets/css/style.css";
import { AppContext } from "../context/appcontext";
import Rating from "./rating";
import { useNavigate } from "react-router-dom";

export default function List({ data }) {
  const { location, search } = useContext(AppContext);
  const [itemOffset, setItemOffset] = useState(0);

  const navigate = useNavigate();

  // pagination
  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = data?.length ? Math.ceil(data?.length / itemsPerPage) : 0;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  const handleDetail = (id) => {
    navigate("/businesses/" + id);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p className="text-start fs-6">
              <label className=" fw-bold text-dark">
                {data?.length} Result
              </label>
              <span className="text-secondary " style={{ color: "#eceff1" }}>
                {" "}
                in {location}
              </span>
            </p>
          </Col>
          <Col className="justify-content-end d-flex">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<FaArrowRight />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel={<FaArrowLeft />}
              renderOnZeroPageCount={null}
              containerClassName="pagination pagination-sm"
              pageLinkClassName="page-link inputOutline "
              nextLinkClassName="page-link inputOutline"
              previousLinkClassName="page-link inputOutline"
              activeClassName="page-item active inputOutline"
            />
          </Col>
        </Row>
        {currentItems?.map((bus) => {
          if (search) {
            if (bus.name.toUpperCase().includes(search.toUpperCase())) {
              return (
                <Card
                  key={bus.id}
                  className="shadow-sm border-0 my-2 position-relative"
                  onClick={() => handleDetail(bus.alias)}
                >
                  <div
                    className="position-absolute h-50 w-100"
                    style={{
                      marginTop: "40px",
                      borderLeft: "5px solid #4175df",
                      borderRight: "5px solid #4175df",
                    }}
                  />
                  <Stack direction="horizontal">
                    <CardImg
                      src={bus.image_url}
                      style={{
                        width: "25%",
                        minHeight: "145px",
                        maxHeight: "145px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body className="text-start">
                      <Card.Title className="fs-3 m-0 ">{bus.name}</Card.Title>
                      <Stack gap={2} direction="horizontal">
                        <Rating rating={bus.rating} />
                        <label>{bus.review_count}</label>
                      </Stack>
                      <Stack gap={2} direction="horizontal">
                        {bus.categories.map((cat) => {
                          return (
                            <Badge key={cat.alias} bg="secondary">
                              {cat.title}
                            </Badge>
                          );
                        })}
                        <label>{bus.price} -</label>
                        <Card.Subtitle>{bus.location.city}</Card.Subtitle>
                      </Stack>
                      <div className="mt-2">
                        {bus.is_closed ? (
                          <>
                            <span className="text-success fw-bold">Open</span>{" "}
                            <label>until 10:00 Pm</label>
                          </>
                        ) : (
                          <span className="text-danger fw-bold">Close</span>
                        )}
                      </div>
                    </Card.Body>
                  </Stack>
                </Card>
              );
            }
          } else {
            return (
              <Card
                key={bus.id}
                className="shadow-sm border-0 my-2 position-relative"
                onClick={() => handleDetail(bus.alias)}
              >
                <div
                  className="position-absolute h-50 w-100"
                  style={{
                    marginTop: "40px",
                    borderLeft: "5px solid #4175df",
                    borderRight: "5px solid #4175df",
                  }}
                />
                <Stack direction="horizontal">
                  <CardImg
                    src={bus.image_url}
                    style={{
                      width: "25%",
                      minHeight: "145px",
                      maxHeight: "145px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body className="text-start">
                    <Card.Title className="fs-3 m-0 ">{bus.name}</Card.Title>
                    <Stack gap={2} direction="horizontal">
                      <Rating rating={bus.rating} />
                      <label>{bus.review_count}</label>
                    </Stack>
                    <Stack gap={2} direction="horizontal">
                      {bus.categories.map((cat) => {
                        return (
                          <Badge key={cat.alias} bg="secondary">
                            {cat.title}
                          </Badge>
                        );
                      })}
                      <label>{bus.price} -</label>
                      <Card.Subtitle>{bus.location.city}</Card.Subtitle>
                    </Stack>
                    <div className="mt-2">
                      {bus.is_closed ? (
                        <>
                          <span className="text-success fw-bold">Open</span>{" "}
                          <label>until 10:00 Pm</label>
                        </>
                      ) : (
                        <span className="text-danger fw-bold">Close</span>
                      )}
                    </div>
                  </Card.Body>
                </Stack>
              </Card>
            );
          }
        })}
      </Container>
    </div>
  );
}
