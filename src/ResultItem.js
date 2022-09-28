import React from "react";
import { Link } from "react-router-dom";
export const ResultItem = ({ data }) => {
  return (
    <>
      <span className="github__container__result__text">
        {data.name}
        <Link
          className="github__container__result__text__more"
          to={`${data.full_name}`}
        >
          More
        </Link>
      </span>
    </>
  );
};
