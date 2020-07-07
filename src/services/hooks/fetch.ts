import { useState, useEffect } from 'react';

interface IFetchParameter {
  dependencies?: any[];
  isStartLoad?: boolean;
  errorCallback?: () => void;
}

export const useFetch = <T extends any>(
  fetch: () => Promise<T>,
  { dependencies = [], isStartLoad = true, errorCallback }: IFetchParameter = {}
) => {
  const [response, setResponse] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch();
        setResponse(res);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        errorCallback && errorCallback();
        setIsLoading(false);
      }
    };
    if (isStartLoad) {
      fetchData();
    }
  }, [...dependencies, isStartLoad]);

  return <const>[response, isLoading];
};

export const useCanceledFetch = <T extends any>(
  fetch: () => Promise<T>,
  { dependencies = [], isStartLoad = true }: IFetchParameter = {}
) => {
  const [response, setResponse] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let isCanceled = false;

    const requestDatabase = async () => {
      setIsLoading(true);
      try {
        const fetchData = await fetch();
        if (!isCanceled) {
          setResponse(fetchData);
        }
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };
    if (isStartLoad) {
      requestDatabase();
    }
    return () => {
      isCanceled = true;
    };
  }, [...dependencies, isStartLoad]);

  return <const>[response, isLoading];
};
