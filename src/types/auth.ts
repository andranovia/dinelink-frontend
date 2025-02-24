export type LoginPayloadType = {
  email: string;
  password: string;
};

export type RegisterPayloadType = {
  email: string;
  password: string;
  name: string;
};

export interface User {
  id: number;
  name: string;
  email: string;
  type: string;
  created_at: string;
  updated_at: string;
}
