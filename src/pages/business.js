import React from "react";
import { Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "../assets/css/style.css";
import Header from "../components/header";
import { Map, Marker } from "pigeon-maps";

import { API } from "../config/api";
import Detail from "../components/detail";

export default function Business() {
  const { id } = useParams();
  let {
    data: detailBusiness,
    refetch,
    isLoading,
  } = useQuery("detail", async () => {
    const response = await API.get("/businesses/" + id);
    return response.data;
  });

  let { data: review } = useQuery("review", async () => {
    const response = await API.get("/businesses/" + id + "/reviews");
    return response.data;
  });

  refetch();

  return (
    <div>
      {isLoading ? (
        <div>Loading, Please wait !</div>
      ) : (
        <Row className="m-0 p-0 w-100">
          <Col className="p-0 col-6">
            <Header />
            <Detail data={detailBusiness} rate={review} />
          </Col>
          <Col className="p-0 position-fixed col-6 " style={{ right: 0 }}>
            <Map
              height={"100vh"}
              defaultCenter={[
                detailBusiness?.coordinates?.latitude,
                detailBusiness?.coordinates?.longitude,
              ]}
              defaultZoom={15}
            >
              {isLoading ? (
                <div>Wait ...</div>
              ) : (
                <Marker
                  width={50}
                  anchor={[
                    detailBusiness?.coordinates?.latitude,
                    detailBusiness?.coordinates?.longitude,
                  ]}
                  color="#4175df"
                />
              )}
            </Map>
          </Col>
        </Row>
      )}
    </div>
  );
}
