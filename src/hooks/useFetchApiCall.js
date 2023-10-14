import { useState } from "react";

const useFetchApiCall = () => {
  const [loading, setLoading] = useState(false);

  const apiCall = async (
    api,
    method = "GET",
    body = null,
    customHeaders = {
      "Content-Type": "application/json",
      "X-Master-Key": import.meta.env.VITE_APP_JSON_BIN_IO_API,
    }
  ) => {
    try {
      setLoading(true);
      const headers = new Headers(customHeaders);
      const options = {
        method,
        headers,
      };

      if (body !== null) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(
        "https://api.jsonbin.io/v3/b/" +
          import.meta.env.VITE_APP_JSON_BIN_IO_ID,
        options
      );
      setLoading(false);

      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return { loading, apiCall };
};

export default useFetchApiCall;
