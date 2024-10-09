export interface IEnterpriseRequest {
  username: string;
  password: string;
  province_code: string;
  district_code: string;
  ward_code: string;
  address?: string;
  name: string;
  code: string;
  email: string;
}

export interface IEnterprise {
  username: string;
  password: string;
  province_code: string;
  district_code: string;
  ward_code: string;
  address?: string;
  name: string;
  code: string;
  email: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface IFilterBusiness {
  keyword: string;
}
