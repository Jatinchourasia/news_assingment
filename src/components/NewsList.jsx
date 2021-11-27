import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import styled from "styled-components";
import { countries, getLatestNews } from "../util";
const { v4: uuid } = require("uuid");

export const NewsList = () => {
  const [news, setNews] = useState([]);
  const [countryCode, setCountryCode] = useState("us");

  const preload = (country) => {
    getLatestNews(country).then((data) => {
      setNews(data.articles);
    });
  };

  useEffect(() => {
    preload(countryCode);
  });

  return (
    <StyledComponent.News>
      <header>
        <select placeholder="country">
          <option>{countryCode}</option>
          {countries &&
            countries.map((country) => {
              return (
                <option
                  onClick={() => setCountryCode(country)}
                  key={country}
                  value={country}
                >
                  {country}
                </option>
              );
            })}
        </select>
      </header>
      <h1>Trending News</h1>
      <div className="cardContainer">
        {news &&
          news.map((article) => {
            return (
              <div className="strcard" key={uuid()}>
                <Card
                  source={article.source.name}
                  description={article.description}
                  title={article.title}
                  image={article.urlToImage}
                  key={uuid()}
                />
              </div>
            );
          })}
      </div>
    </StyledComponent.News>
  );
};

const StyledComponent = {
  News: styled.div`
    width: 100%;
    min-height: 80vh;

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      select {
        width: 80vw;
        font-size: 1.2rem;
        padding: 0.5rem;
      }
    }

    h1 {
      margin-bottom: 2rem;
    }
    .cardContainer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      background-position: top;
      background-size: 110%;
      .cardContainer {
        grid-template-columns: repeat(1, 1fr);
      }
      .strcard {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `,
};
