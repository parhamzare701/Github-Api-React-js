import React, { useEffect, useState } from "react";
import { ResultItem } from "./ResultItem";
import Loading from "./Loading";
import AutocompleteValue from "./AutocompleteValue";

const GitHub = () => {
  var matches;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [autocompleteItems, SetAutocompleteItems] = useState([]);
  const [githubData, setGithubData] = useState([]);
  const [focused, setFocused] = useState(false)
  const getSearchResult = async () => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    if (response.ok) {
      const json = await response.json();
      setGithubData(json);
    }
  };
  useEffect(() => {
    const getAutocomplete = async () => {
      if (autocompleteItems.length === 0) {
        const response = await fetch(
          `https://api.github.com/users?per_page=10`
        );
        const json = await response.json();
        SetAutocompleteItems(json);
        setLoading(false);
      }
    };
    getAutocomplete()
  });
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
                onFocus={()=>setFocused(true)}
                onBlur={()=>setFocused(false)}
              />
              <button
                className="github__container__search__btn"
                onClick={getSearchResult}
              >
                Search
              </button>
            </section>
            {loading ? (
              <Loading loading={loading}/>
            ) : (
              matches.map((data) => <AutocompleteValue focused={focused} data={data} />)
            )}
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
