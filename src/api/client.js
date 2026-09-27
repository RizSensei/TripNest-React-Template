const configuredUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
const normalizedUrl = configuredUrl.replace(/\/+$/, "");
const API_BASE_URL = normalizedUrl.endsWith("/api/v1")
  ? normalizedUrl
  : `${normalizedUrl}/api/v1`;

export class ApiError extends Error {
  constructor(message, status, code, fields) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fields = fields;
  }
}

export async function apiRequest(path, { method = "GET", body, headers = {}, skipAuth = false } = {}) {
  const token = skipAuth ? null : window.sessionStorage.getItem("tripnest_token");
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });

  let responseBody = null;
  if (response.status !== 204) {
    const responseText = await response.text();
    if (responseText) {
      try {
        responseBody = JSON.parse(responseText);
      } catch {
        if (response.ok) {
          throw new ApiError("The server returned an invalid JSON response.", response.status);
        }
      }
    }
  }

  if (!response.ok) {
    const error = responseBody?.error;
    throw new ApiError(
      error?.message || responseBody?.message || `Request failed (${response.status})`,
      response.status,
      error?.code || responseBody?.code,
      error?.fields,
    );
  }

  return responseBody;
}

export function toQueryString(parameters) {
  const query = new URLSearchParams();
  Object.entries(parameters).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    if (Array.isArray(value)) {
      if (value.length > 0) query.set(key, value.join(","));
      return;
    }
    query.set(key, String(value));
  });
  const serialized = query.toString();
  return serialized ? `?${serialized}` : "";
}
