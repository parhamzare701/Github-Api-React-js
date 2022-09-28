import React, { useEffect } from "react";

const Loading = ({ loading }) => {
  useEffect(() => {
    console.log(`loading is ${loading}`);
  },[loading]);
  return <>{loading && (
    <div className="loading">
            <section className="loading__container">
                <span className="loading__container__status">Loading...</span>
            </section>
    </div>
  )}</>;
};

export default Loading;
