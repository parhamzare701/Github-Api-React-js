import React from "react";

const AutocompleteValue = ({ data, focused }) => {
  return (
    <>
      { focused && (
        <div>
          <h1>{data.login}</h1>
        </div>)
      }
    </>
  );
};

export default AutocompleteValue;
