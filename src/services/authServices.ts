import {axiosInstance} from '../utils/axiosInstance';

export const authServices = {
  async getUserInfo(query = '') {
    return axiosInstance.get(`67151417acd3cb34a89a21de${query}`);
  },
};
