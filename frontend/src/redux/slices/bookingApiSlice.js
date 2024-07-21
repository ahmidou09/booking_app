import { apiSlice } from "./apiSlice";
import { BASE_URL, BOOKINGS_URL } from "../../constants";

export const bookingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}${BOOKINGS_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    getUserBookings: builder.query({
      query: () => ({
        url: `${BASE_URL}${BOOKINGS_URL}/mybookings`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Booking"],
    }),
    getBookingById: builder.query({
      query: (id) => ({
        url: `${BASE_URL}${BOOKINGS_URL}/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    getBookings: builder.query({
      query: () => ({
        url: `${BASE_URL}${BOOKINGS_URL}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetUserBookingsQuery,
  useGetBookingByIdQuery,
  useGetBookingsQuery,
} = bookingsApiSlice;
