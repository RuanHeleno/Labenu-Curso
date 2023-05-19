import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error.response.data);
      });

  }, [url]);

  return [data, isLoading, isError];
};
