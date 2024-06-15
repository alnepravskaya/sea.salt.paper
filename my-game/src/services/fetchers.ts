const host = process.env.REACT_APP_API_URL || 'no-url-provided';

export interface APIAnswer {
  status: number;
  payload: any;
  errors?: unknown;
}

export const fetchers = {
  async generic(
    url: string,
    method: string = 'POST',
    body?: string | object | undefined
  ): Promise<APIAnswer> {
    //  debugger;
    try {
      const bodyString = typeof body === 'string' ? body : JSON.stringify(body);

      return await fetch(host + url, {
        method: method,
        body: bodyString,
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(async (response) => {
          let payload;
          try {
            payload = (await response.json()) as APIAnswer;
          } catch {}

          return {
            status: response.status,
            payload,
          };
        })
        .catch((...args) => {
          throw args;
        });
    } catch (e) {
      return e as any;
    }
  },

  async get(url: string, options?: any): Promise<APIAnswer> {
    return await this.generic(url, 'GET');
  },

  async put(url: string, body?: string | object): Promise<APIAnswer> {
    return this.generic(url, 'PUT', body);
  },

  async post(url: string, body?: string | object): Promise<APIAnswer> {
    return this.generic(url, 'POST', body);
  },

  async delete(url: string, body?: string | object): Promise<APIAnswer> {
    return this.generic(url, 'DELETE', body);
  },
};
