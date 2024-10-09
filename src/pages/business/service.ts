import axios_client from "@/services/axios";
import { IResponse, _API_ } from "@/services/api.constant";
import { IEnterpriseRequest } from "./model";

export interface IEnterpriseParams {}

export function apiCreateEnterprise<T>(
  payload: IEnterpriseRequest
): Promise<IResponse<T>> {
  return axios_client.post(_API_.ENTERPRISE.CREATE, payload);
}

export function apiGetListEnterprise<T>(
  params?: IEnterpriseParams
): Promise<IResponse<T>> {
  return axios_client.get(_API_.ENTERPRISE.GET_LIST, params);
}

export function apiGetDetailEnterprise<T>(
  params?: IEnterpriseParams
): Promise<IResponse<T>> {
  return axios_client.get(_API_.ENTERPRISE.GET_DETAIL, params);
}

export function apiUpdateEnterprise<T>(
  id: string,
  payload: IEnterpriseRequest
): Promise<IResponse<T>> {
  return axios_client.post(`${_API_.ENTERPRISE.UPDATE}/${id}`, payload);
}

export function apiDelteEnterprise<T>(id: string): Promise<IResponse<T>> {
  return axios_client.delete(`${_API_.ENTERPRISE.DELETE}/${id}`);
}
