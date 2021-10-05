import { setCookie, clearUserInfo } from './../uitls/cookie';
import { ILogin } from './../service/login/types';
import {
  GET_LOGING_INFO,
  LOAD_LOGING_INFO,
  GET_USER_STATE,
  LOAD_LOGIN_STATE,
  USER_LOG_OUT,
  RESET_USER_INFO
} from './types';
import { Module } from 'vuex';
import { userLogin } from '@/service/login/user-login';
import jscookie from 'js-cookie';

export const LoginModel: Module<ILogin, any> = {
  namespaced: true,
  state: {
    userInfo: {
      username: jscookie.get('username') ?? '',
      id: Number(jscookie.get('id')) ?? 0,
      createTime: jscookie.get('createTime') ?? '',
      updateTime: jscookie.get('updateTime') ?? ''
    },
    isLogin: jscookie.get('isLogin') === 'true'
  },
  actions: {
    async [GET_LOGING_INFO]({ commit }, payload) {
      const data = await userLogin(payload);
      if (!data) return;
      setCookie(data);
      setCookie({ isLogin: true });
      commit('loadLoginState', true);
      commit(LOAD_LOGING_INFO, data);
    },
    [USER_LOG_OUT]({ commit }) {
      commit(RESET_USER_INFO);
    }
  },
  mutations: {
    [LOAD_LOGING_INFO](state, data) {
      state.userInfo = data;
    },
    [LOAD_LOGIN_STATE](state, isLogin) {
      state.isLogin = isLogin;
    },
    [RESET_USER_INFO](state) {
      state.isLogin = false;
      setCookie({ isLogin: false });
      clearUserInfo(Object.keys(state.userInfo));
    }
  },
  getters: {
    [GET_USER_STATE](state) {
      return () => ({ userInfo: state.userInfo, isLogin: state.isLogin });
    }
  }
};
