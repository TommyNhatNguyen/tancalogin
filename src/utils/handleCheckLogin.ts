import {authServices} from '../services/authServices';

type handleCheckLoginType = (
  phone: string,
  isOk: (userData: any) => void,
  isError: (error?: any) => void,
) => void;

export const handleCheckLogin: handleCheckLoginType = async (
  phone,
  isOk,
  isError,
) => {
  try {
    const response = await authServices.getUserInfo();
    if (response?.data?.record?.data) {
      const data = response?.data?.record?.data;
      const userData = data.find((item: any) => item.phone === phone);
      const hasPhoneNumber = !!userData;
      if (hasPhoneNumber) {
        isOk(userData);
      } else {
        isError();
      }
    }
  } catch (error) {
    console.log(error);
    isError(error);
  }
};
