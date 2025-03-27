import axios, { AxiosInstance } from "axios";
import {
  DataProvider as DataProviderCustom,
  DataProviderResponse,
  GetListParams,
} from "./dataProvider.types";
import {
  CreateParams,
  DeleteManyParams,
  DeleteOneParams,
  GetOneParams,
  UpdateParams,
} from "@refinedev/core";

const DataProvider = (apiUrl: string): DataProviderCustom => {
  console.log(apiUrl, "apiurl");

  const instance: AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    getList: async ({
      pagination,
      filters,
      sort,
    }: GetListParams): Promise<DataProviderResponse> => {
      const response = await instance.get(
        `/${filters?.resource}`,

        {
          params: {
            _page: pagination?.current,
            _limit: pagination?.pageSize,
            _sort: sort?.field,
            _order: sort?.order,
            ...filters,
          },
        }
      );

      return {
        data: response.data,
        total: parseInt(response.headers["x-total-count"], 10),
      };
    },

    getOne: async ({ resource, id }: GetOneParams) => {
      const response = await instance.get(`/${resource}/${id}`);
      return { data: response.data };
    },

    create: async ({ resource, variables }: CreateParams) => {
      const response = await instance.post(`/${resource}`, variables);
      return { data: response.data };
    },

    update: async ({ resource, id, variables }: UpdateParams) => {
      const response = await instance.put(`/${resource}/${id}`, variables);
      return { data: response.data };
    },

    deleteOne: async ({ resource, id }: DeleteOneParams) => {
      const response = await instance.delete(`/${resource}/${id}`);
      return { data: response.data };
    },

    deleteMany: async ({ resource, ids }: DeleteManyParams) => {
      const response = await instance.delete(`/${resource}`, {
        data: { ids },
      });
      return { data: response.data };
    },
  };
};

export default DataProvider;
