import axios from "axios";

const base_url = "https://newsapi.org/v2/top-headlines";

export const getLatestNews = async (country) => {
  const { data } = await axios.get(
    `${base_url}?country=${country}&pageSize=12&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};

export const countries = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "nz",
  "ph",
  "pl",
  "pt",
];
