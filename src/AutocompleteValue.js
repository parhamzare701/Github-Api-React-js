import React from "react";

const AutocompleteValue = ({ data, focused, setInputValue}) => {
  return (
    <>
      {focused && (
          <div className="github__container__autocomplete__result">
          <span className="github__container__autocomplete__result__text" onClick={(e)=>setInputValue(e.target.textContent)}>{data.login}</span>
        </div>
      )}
    </>
  );
};

export default AutocompleteValue;
