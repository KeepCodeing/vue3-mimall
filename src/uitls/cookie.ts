import jscookie from 'js-cookie';

export const setCookie = (data: any): any => {
  for (const key in data) jscookie.set(key, data[key]);
};

export const getUserInfo = (keys: string[]): any => {
  const temp: any = {};
  keys.map((key) => (temp[key] = jscookie.get(key)));
};

export const clearUserInfo = (keys: string[]): any => {
  keys.map((key) => jscookie.remove(key));
};
