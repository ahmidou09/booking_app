import { apiSlice } from "./apiSlice";
import { BASE_URL, HOTELS_URL } from "../../constants";

export const hotelsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHotels: builder.query({
      query: () => ({
        url: `${BASE_URL}${HOTELS_URL}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Hotel"],
    }),
    getHotelById: builder.query({
      query: (id) => ({
        url: `${BASE_URL}${HOTELS_URL}/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    createHotel: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}${HOTELS_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Hotel"],
    }),
    updateHotel: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${BASE_URL}${HOTELS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Hotel"],
    }),
    deleteHotel: builder.mutation({
      query: (id) => ({
        url: `${BASE_URL}${HOTELS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Hotel"],
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelByIdQuery,
  useCreateHotelMutation,
  useUpdateHotelMutation,
  useDeleteHotelMutation,
} = hotelsApiSlice;
