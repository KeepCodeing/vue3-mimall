import axios from 'axios';
import 'element-plus/theme-chalk/el-message.css';
import { ElMessage } from 'element-plus';

const inc = axios.create({
  baseURL: '/api',
  timeout: 1000
});

const showError = (msg?: '') => {
  ElMessage.error({
    message: msg ?? '请求失败，请查看接口是否正常！',
    duration: 700
  });
  return 1;
};

inc.interceptors.request.use(
  (config) => config,
  (error) => error
);

inc.interceptors.response.use(
  (config) => {
    if (config.status >= 400) return { status: showError(), data: [] };
    if (config.data.status !== 0)
      return { status: showError(config.data.msg), data: [] };
    return config.data;
  },
  (error) => {
    showError();
    return error;
  }
);

export default inc;
