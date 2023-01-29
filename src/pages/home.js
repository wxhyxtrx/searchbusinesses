import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Maps from "../components/maps";
import List from "../components/list";
import SearchBar from "../components/searchbar";
import { AppContext } from "../context/appcontext";
import { API } from "../config/api";
import { useQuery } from "react-query";

export default function Home() {
  const { location } = useContext(AppContext);
  let {
    data: business,
    refetch: refetchBusiness,
    isLoading,
  } = useQuery("business", async () => {
    const response = await API.get("/search?location=" + location);
    return response.data.businesses;
  });
  refetchBusiness();

  const id = 0;

  return (
    <div>
      <Row className="m-0 p-0 w-100">
        <Col className="p-0 col-6">
          <Header />
          <SearchBar />
          {isLoading ? (
            <div> Loading Please Wait !!</div>
          ) : (
            <List data={business ? business : null} />
          )}
        </Col>
        <Col className="p-0 position-fixed col-6 " style={{ right: 0 }}>
          {isLoading ? (
            <div> Loading Please Wait !!</div>
          ) : (
            <Maps
              data={business ? business : null}
              center={business[id]?.coordinates}
              load={isLoading}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}
