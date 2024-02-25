import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65d5ce03f6967ba8e3bca0a5.mockapi.io/api/',
  }),
  tagTypes: ['Adverts'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `adverts?page=${page}&limit=8`,
    }),
    getAdverts: builder.query({
      query: () => '/adverts',
      providesTags: ['Adverts'],
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = carsApi;
