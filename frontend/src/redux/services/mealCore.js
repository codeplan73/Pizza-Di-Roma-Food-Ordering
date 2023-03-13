import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mealCoreApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    prepareHeaders: (headers) => {
      // headers.set('x-rapidapi-key', '8f5f516d40msh89788e82849baedp11948ejsn33431e917f7b');
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllMeals: builder.query({ query: () => '/meals' }),
  }),
});

export const {
  useGetAllMealsQuery,
} = mealCoreApi;
