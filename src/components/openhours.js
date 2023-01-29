import React, { useEffect, useState } from "react";

export default function OpenHours({ start, end }) {
  const timeON = start.split("");
  const timeOFF = end.split("");

  timeON.splice(2, 0, ":");
  timeOFF.splice(2, 0, ":");

  const dataHours = [
    { open: timeON.join(""), dash: " - ", close: timeOFF.join("") },
  ];
  const [state, setState] = useState(dataHours);

  const addHours = (newObject) => {
    setState((data) => {
      const newData = [...data];
      newData.push(newObject);
      return newData;
    });
  };

  useEffect(() => {
    addHours(dataHours);
  }, [start, end]);

  return (
    <div>
      <span className="text-white mx-2">
        {state?.map((element, i) => (
          <label key={i}>
            {element.open}
            {element.dash}
            {element.close}
          </label>
        ))}
      </span>
    </div>
  );
}
