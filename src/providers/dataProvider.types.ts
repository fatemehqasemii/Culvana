import {
  CreateParams,
  DeleteManyParams,
  DeleteOneParams,
  GetOneParams,
  UpdateParams,
} from "@refinedev/core";

export interface DataProviderResponse<T = unknown> {
  data: T[];
  total: number;
}
export interface GetListParams {
  pagination: {
    current: number;
    pageSize: number;
  };
  filters?: Record<string, unknown>;
  sort?: {
    field: string;
    order: "asc" | "desc";
  };
}
export interface DataProvider {
  getList: (params: GetListParams) => Promise<DataProviderResponse>;
  getOne: (params: GetOneParams) => Promise<{ data: unknown }>;
  create: (params: CreateParams) => Promise<{ data: unknown }>;
  update: (params: UpdateParams) => Promise<{ data: unknown }>;
  deleteOne: (params: DeleteOneParams) => Promise<{ data: unknown }>;
  deleteMany: (params: DeleteManyParams) => Promise<{ data: unknown }>;
}
