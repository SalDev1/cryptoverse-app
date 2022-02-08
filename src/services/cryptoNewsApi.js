import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '29b8ca234cmsh93c8b2aa277caf3p1150aejsnd6f247a04ac1'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({url  , headers : cryptoNewsHeaders});

// Creating a specific API.
export const cryptoNewsApi = createApi({
    reducerPath :'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
         getCryptoNews : builder.query({
             query : ({newsCategory , count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&Freshness=Day&Count=${count}`)
         })
    })
})

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;