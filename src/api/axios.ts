import axios from "axios";

export const get = (path: string) => {
  return axios.get(path);
};

export const post = (path: string, data: any, config: any) => {
  if (config) {
    return axios.post(path, data, config);
  }
  return axios.post(path, data, {
    headers: { "Content-Type": "Application/json" },
  });
};

export const put = (path: string, data: any, config: any) => {
  if (config) {
    return axios.put(path, data, config);
  }
  return axios.put(path, data, {
    headers: { "Content-Type": "Application/json" },
  });
};

export const patch = (path: string, data: any) => {
  return axios.patch(path, data);
};

export const del = (path: string, config: any) => {
  if (config) {
    return axios.delete(path, config);
  }
  return axios.delete(path);
};
