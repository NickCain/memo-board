export function callApi(endpoint, method = 'GET', body) {
  return fetch(endpoint,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method,
      body: body && JSON.stringify(body)
    })
    .then(response => response.json()
      .then(json => ({ json, response }))
      .catch(() => ({ response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        const result = json ? { json, httpStatusCode: response.status } : { httpStatusCode: response.status };
        return Promise.reject(result);
      }
      return json;
    })
    .then(response => ({ response }))
    .catch(
      (err) => {
        let error = {
          httpStatusCode: err.httpStatusCode,
          message: (err && err.message) || `Error calling ${method} ${endpoint}`
        };
        if (err.json) {
          error = { ...err.json, ...error };
        }
        return { error };
      }
    );
}
