export const fetchAPI = (endpoint, config = {}) => {
    const { baseURL, ...rest } = config;
    return fetch(`${baseURL}${endpoint}`, { ...rest, credentials: 'omit' }).then(
      res => {
        return res.json();
      },
    );
  };
  
  export const fetchWithCredentials = (endpoint, config = {}) => {
    const { baseURL, ...rest } = config;
    return fetch(`${baseURL}${endpoint}`, { ...rest, credentials: 'include' }).then(
      res => {
        return res.json();
      },
    );
  };
  