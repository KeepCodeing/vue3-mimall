export interface UserInfo {
  id: number;
  username: string;
  email?: string;
  phone?: any;
  role?: number;
  createTime: string;
  updateTime: string;
}

export interface ILogin {
  userInfo: UserInfo;
}
