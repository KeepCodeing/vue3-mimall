import { ILogin } from './../service/login/types';
import { GET_LOING_INFO, LOAD_LOING_INFO } from './types';
import { Module } from 'vuex';
import { userLogin } from '@/service/login/user-login';

export const LoginModel: Module<ILogin, any> = {
  namespaced: true,
  state: {
    userInfo: {
      username: '',
      id: 0,
      createTime: '',
      updateTime: ''
    }
  },
  actions: {
    [GET_LOING_INFO]({ commit }, payload) {
      const data = userLogin(payload);
      commit(LOAD_LOING_INFO, data);
    }
  },
  mutations: {
    [LOAD_LOING_INFO](state, data) {
      state.userInfo = data;
    }
  },
  getters: {}
};
