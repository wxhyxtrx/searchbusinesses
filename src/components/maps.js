import { Map, Marker } from "pigeon-maps";
import React from "react";

export default function Maps({ data, center, load }) {
  return (
    <div>
      {center ? (
        <Map
          height={"100vh"}
          defaultCenter={[center?.latitude, center?.longitude]}
          defaultZoom={12}
        >
          {data?.map((element, i) => {
            return (
              <Marker
                key={i}
                width={50}
                anchor={[
                  element.coordinates.latitude,
                  element.coordinates.longitude,
                ]}
                color="#4175df"
              />
            );
          })}
        </Map>
      ) : (
        <div>Loading Maps</div>
      )}
    </div>
  );
}
