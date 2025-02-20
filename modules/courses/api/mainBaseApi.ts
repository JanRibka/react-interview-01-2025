import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import ApiTags, { ApiTagsType } from "./apiTags";

export const reducerPath = "mainBaseApi";

export const mainBaseApi = createApi({
  reducerPath: reducerPath,
  tagTypes: Object.keys(ApiTags) as ApiTagsType[],
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: () => ({}),
});
