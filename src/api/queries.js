import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./endpoints";
import { useAuth } from "../context/AuthContext";

export const queryKeys = {
  properties: (filters) => ["properties", filters],
  property: (slug) => ["property", slug],
  propertyFilters: ["property-filters"],
  currentUser: ["current-user"],
  profile: ["profile"],
  wishlist: ["wishlist"],
  bookings: (status) => ["bookings", status || "all"],
  booking: (bookingId) => ["booking", bookingId],
  payment: (bookingId) => ["payment", bookingId],
  reviews: (propertyId, parameters) => ["reviews", propertyId, parameters],
};

export function useProperties(filters = {}) {
  return useQuery({
    queryKey: queryKeys.properties(filters),
    queryFn: () => api.properties(filters),
  });
}

export function useProperty(slug) {
  return useQuery({
    queryKey: queryKeys.property(slug),
    queryFn: () => api.property(slug),
    enabled: Boolean(slug),
  });
}

export function usePropertyFilters() {
  return useQuery({
    queryKey: queryKeys.propertyFilters,
    queryFn: api.propertyFilters,
  });
}

export function useCurrentUser() {
  const { token } = useAuth();
  return useQuery({
    queryKey: queryKeys.currentUser,
    queryFn: api.currentUser,
    enabled: Boolean(token),
    retry: false,
  });
}

export function useProfile() {
  const { token } = useAuth();
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: api.profile,
    enabled: Boolean(token),
    retry: false,
  });
}

export function useWishlist() {
  const { token } = useAuth();
  return useQuery({
    queryKey: queryKeys.wishlist,
    queryFn: api.wishlist,
    enabled: Boolean(token),
    retry: false,
  });
}

export function useBookings(status) {
  const { token } = useAuth();
  return useQuery({
    queryKey: queryKeys.bookings(status),
    queryFn: () => api.bookings(status),
    enabled: Boolean(token),
    retry: false,
  });
}

export function useBooking(bookingId) {
  const { token } = useAuth();
  return useQuery({
    queryKey: queryKeys.booking(bookingId),
    queryFn: () => api.booking(bookingId),
    enabled: Boolean(token && bookingId),
    retry: false,
  });
}

export function usePaymentStatus(bookingId) {
  const { token } = useAuth();
  return useQuery({
    queryKey: queryKeys.payment(bookingId),
    queryFn: () => api.paymentStatus(bookingId),
    enabled: Boolean(token && bookingId),
    retry: false,
  });
}

export function useReviews(propertyId, parameters = {}) {
  return useQuery({
    queryKey: queryKeys.reviews(propertyId, parameters),
    queryFn: () => api.reviews(propertyId, parameters),
    enabled: Boolean(propertyId),
  });
}

export function useLogin() {
  const { setSession } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.login,
    onSuccess: ({ token, user }) => {
      setSession(token);
      queryClient.setQueryData(queryKeys.currentUser, user);
    },
  });
}

export function useRegister() {
  const { setSession } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.register,
    onSuccess: ({ token, user }) => {
      setSession(token);
      queryClient.setQueryData(queryKeys.currentUser, user);
    },
  });
}

export function useLogout() {
  const { clearSession } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.logout,
    onSuccess: () => {
      clearSession();
      queryClient.clear();
    },
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.updateProfile,
    onSuccess: (profile) => {
      queryClient.setQueryData(queryKeys.profile, (currentProfile) => ({
        ...currentProfile,
        ...profile,
      }));
      queryClient.invalidateQueries({ queryKey: queryKeys.currentUser });
    },
  });
}

export function useWishlistMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ propertyId, saved }) =>
      saved ? api.addWishlistItem(propertyId) : api.removeWishlistItem(propertyId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.wishlist }),
  });
}

export function useCreateQuote() {
  return useMutation({ mutationFn: api.quote });
}

export function useCreateBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.createBooking,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookings"] }),
  });
}

export function useCancelBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.cancelBooking,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookings"] }),
  });
}

export function useCreatePaymentIntent() {
  return useMutation({ mutationFn: api.createPaymentIntent });
}

export function useCreateReview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ propertyId, ...payload }) => api.createReview(propertyId, payload),
    onSuccess: (_review, { propertyId }) =>
      queryClient.invalidateQueries({ queryKey: ["reviews", propertyId] }),
  });
}

export function useContactMutation() {
  return useMutation({ mutationFn: api.contact });
}

export function useNewsletterMutation() {
  return useMutation({ mutationFn: api.subscribe });
}

export function usePropertyMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...payload }) =>
      id ? api.updateProperty({ id, ...payload }) : api.createProperty(payload),
    onSuccess: (property) => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      queryClient.invalidateQueries({ queryKey: ["property", property.slug] });
    },
  });
}
