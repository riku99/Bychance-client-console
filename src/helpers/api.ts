export const addBearer = (token?: string) => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});
