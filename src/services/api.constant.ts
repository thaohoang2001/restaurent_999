export const _API_ = {
  AUTH: {
    LOGIN: "auth/login",
    GET_USER_INFORMATION: "auth/get-user-information",
  },
  ENTERPRISE: {
    CREATE: "enterprises/create",
    GET_LIST: "enterprises/list",
    UPDATE: "enterprises/update/:id",
    DELETE: "enterprises/soft-delete/:id",
    GET_DETAIL: "enterprises/detail/:id",
  },
  PROVINCE: {
    GET_LIST: "provinces/list",
  },
  DISTRICT: {
    GET_LIST: "districts/list",
  },
  WARD: {
    GET_LIST: "wards/list",
  },
};

export interface IResponse<T = any> {
  data: T;
  message: string;
  status: 200 | 400 | 401 | 403 | 413 | 404 | 500 | 502;
}
