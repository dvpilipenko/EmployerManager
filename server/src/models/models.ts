export type Employee = {
  firstName: string;
  lastName: string;
  office: string;
  birthDate: Date;
  phone: string;
  tags: string[];
  _id: string;
};

export type Tags = {
  value: string;
  _id?: string;
};

export type PageSetting = {
  page: number;
  limit: number;
  count: number;
};

export type QueryParams = {
  name: string;
  office: string;
}

export interface IEmployeeResponse {
  data: any[];
  count: number;
}
