import { handleResponse, handleError } from "./response.handler";
import axios from "./api.interceptor";

export const epgServices = {
  fetchEpgData,
};

// Function to load channels
async function fetchEpgData(api: string) {
  const url: string | undefined = process.env.REACT_APP_API_URL + api;
  return axios({
    method: "get",
    url: url,
    timeout: 4000,
  })
    .then((response: any) => {
      return handleResponse(response);
    })
    .catch((error: any) => {
      return handleError(error);
    });
}
