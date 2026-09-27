import { apiRequest, toQueryString } from "./client";

export const api = {
  properties: (filters = {}) =>
    apiRequest(`/properties${toQueryString(filters)}`),
  property: (slug) => apiRequest(`/properties/${encodeURIComponent(slug)}`),
  propertyFilters: () => apiRequest("/property-filters"),
  createProperty: (payload) =>
    apiRequest("/properties", { method: "POST", body: payload }),
  updateProperty: (payload) =>
    apiRequest("/properties", { method: "PUT", body: payload }),
  quote: (payload) =>
    apiRequest("/availability/quotes", { method: "POST", body: payload }),
  createBooking: (payload) =>
    apiRequest("/bookings", { method: "POST", body: payload }),
  booking: (bookingId) =>
    apiRequest(`/bookings/${encodeURIComponent(bookingId)}`),
  bookings: (status) =>
    apiRequest(`/me/bookings${toQueryString({ status })}`),
  cancelBooking: (bookingId) =>
    apiRequest(`/bookings/${encodeURIComponent(bookingId)}/cancel`, { method: "POST" }),
  createPaymentIntent: (bookingId) =>
    apiRequest(`/bookings/${encodeURIComponent(bookingId)}/payment-intent`, { method: "POST" }),
  paymentStatus: (bookingId) =>
    apiRequest(`/bookings/${encodeURIComponent(bookingId)}/payment`),
  register: (payload) =>
    apiRequest("/auth/register", { method: "POST", body: payload, skipAuth: true }),
  login: (payload) =>
    apiRequest("/auth/login", { method: "POST", body: payload, skipAuth: true }),
  logout: () => apiRequest("/auth/logout", { method: "POST" }),
  currentUser: () => apiRequest("/auth/me"),
  profile: () => apiRequest("/me"),
  updateProfile: (payload) =>
    apiRequest("/me", { method: "PATCH", body: payload }),
  wishlist: () => apiRequest("/me/wishlist"),
  addWishlistItem: (propertyId) =>
    apiRequest(`/me/wishlist/${encodeURIComponent(propertyId)}`, { method: "PUT" }),
  removeWishlistItem: (propertyId) =>
    apiRequest(`/me/wishlist/${encodeURIComponent(propertyId)}`, { method: "DELETE" }),
  reviews: (propertyId, parameters = {}) =>
    apiRequest(`/properties/${encodeURIComponent(propertyId)}/reviews${toQueryString(parameters)}`),
  createReview: (propertyId, payload) =>
    apiRequest(`/properties/${encodeURIComponent(propertyId)}/reviews`, {
      method: "POST",
      body: payload,
    }),
  contact: (payload) =>
    apiRequest("/contact-messages", { method: "POST", body: payload }),
  subscribe: (payload) =>
    apiRequest("/newsletter/subscriptions", { method: "POST", body: payload }),
};
