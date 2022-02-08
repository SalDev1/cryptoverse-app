// Logic of fetching the data from the api
import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '29b8ca234cmsh93c8b2aa277caf3p1150aejsnd6f247a04ac1'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url , headers : cryptoApiHeaders})

// Define a service using a base URL and excepted endpoints
export const cryptoApi = createApi({
    reducerPath :'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
         getCryptos : builder.query({
             query : (count) => createRequest(`/coins?limit=${count}`),
         }),
         getCryptoDetails : builder.query({
             query : (coinId) => createRequest(`/coin/${coinId}`),
         }),
         getCryptoHistory : builder.query({
             query : ({ coinId , timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
         }),
         getCryptoExchanges : builder.query({
             query : () => createRequest(`coin/Qwsogvtv82FCd/exchanges`)
         })
    })
})

  // React creates a new hook to fetch data anywhere in the application. 
export const {
   useGetCryptosQuery ,
   useGetCryptoDetailsQuery,
   useGetCryptoHistoryQuery,
   useGetCryptoExchangesQuery,
} = cryptoApi;