import React, { useEffect, useState } from "react";
import { ResultItem } from "./ResultItem";
import Loading from "./Loading";
import AutocompleteValue from "./AutocompleteValue";

const GitHub = () => {
  //main code
  var matches;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [autocompleteItems, SetAutocompleteItems] = useState([]);
  const [githubData, setGithubData] = useState([]);
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    const getAutocomplete = async () => {
        if (autocompleteItems.length === 0) {
          const response = await fetch(
            `https://api.github.com/users?per_page=30`
          );
          if (response.ok) {
            const json = await response.json();
            SetAutocompleteItems(json);
            setLoading(false);
          }
        }
    };
    getAutocomplete();
  });
  const getSearchResult = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      if (response.ok) {
        const json = await response.json();
        setGithubData(json);
      }
  };
  if (!loading) {
    matches = autocompleteItems.filter((state) => {
      const regex = new RegExp(`^${user}`);
      return state.login.match(regex);
    });
  }
  return (
    <>
      <div className="github">
        <main className="github__container">
          <div className="github__container__main">
            <section className="github__container__search">
              <input
                type="text"
                className="github__container__search__input"
                placeholder="search username"
                value={user}
                onChange={(event) => {
                  setUser(event.target.value);
                }}
                onFocus={() => setFocused(true)}
              />
              <button
                className="github__container__search__btn--search"
                onClick={getSearchResult}
              >
                Search
              </button>
              {focused && (
                <button
                  onClick={() => {
                    setFocused(false);
                  }}
                  className="github__container__search__btn--less"
                >
                  Less
                </button>
              )}
            </section>
            <div className="github__container__autocomplete">
              {loading ? (
                <Loading loading={loading} />
              ) : (
                matches.map((data) => (
                  <AutocompleteValue
                    focused={focused}
                    setInputValue={(text) => setUser(text)}
                    data={data}
                  />
                ))
              )}
            </div>
            <section className="github__container__result">
              {githubData.map((data) => (
                <>
                  <ResultItem key={data.id} data={data} />
                </>
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
export default GitHub;
