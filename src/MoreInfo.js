import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import MoreInfoModal from "./MoreInfoModal";
import Loading from "./Loading";
const MoreInfo = () => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();
  const [githubData, setGithubData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos${pathName}`);
        if (response.ok) {
          const json = await response.json();
          setGithubData(json);
          setLoading(false);
        }
      } catch (error) {
        alert(error);
      }
    };
    getResult();
  }, [pathName]);
  console.log(githubData);
  return (
    <>
      {loading && <Loading loading={loading} />}
      {show ? (
        <MoreInfoModal
          data={githubData}
          onClose={() => {
            setShow(false);
          }}
        />
      ) : (
        <div className="more-info">
          <div className="more-info__container">
            <div className="more-info__container__btn">
              <button
                className="more-info__container__btn--back"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </button>
              <button
                className="more-info__container__btn--show"
                onClick={() => {
                  setShow(true);
                }}
              >
                show
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoreInfo;
