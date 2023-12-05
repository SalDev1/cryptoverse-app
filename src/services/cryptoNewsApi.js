import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "d5656b83f1msh6819b72cfb20e1cp1fb9f7jsnda68730866a7",
  "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
};

const baseUrl = "https://news-api14.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// Creating a specific API.
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (newsCategory) =>
        createRequest(`/search?q=${newsCategory}&pageSize=12`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
