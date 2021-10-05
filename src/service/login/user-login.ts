import request from '../requests';
import { router } from '@/router';

enum Api {
  LOGIN = '/user/login'
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const userLogin = async (payload: any): Promise<any> => {
  const { status, data } = await request({
    method: 'post',
    data: payload,
    url: Api.LOGIN
  });
  if (status !== 0) return;
  router.push('/home');
  return data;
};
