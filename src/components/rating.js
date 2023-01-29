import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

export default function Rating({ rating }) {
  const hasHalf = rating % 1 === 0.5;
  const fullStar = Math.floor(rating);
  const stars = [...new Array(fullStar).keys()];
  return (
    <>
      {stars.map((star, i) => (
        <FaStar key={i} color="#ffc107" />
      ))}
      {hasHalf && <FaStarHalf color="#ffc107" />}
    </>
  );
}
