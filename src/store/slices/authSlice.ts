import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authServices} from '../../services/authServices';
import {tokenMethod} from '../../utils/tokenMethod';

type authStateType = {
  phone: string | number;
  isLogin: boolean;
  loading: boolean;
  error: any;
};

const initialState: authStateType = {
  phone: '',
  isLogin: false,
  loading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLogin = true;
      state.phone = action.payload.phone;
    },
    logoutUser(state, _) {
      state.isLogin = false;
      state.phone = '';
      tokenMethod.removeValue();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.phone = action.payload.phone;
        state.isLogin = true;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
        state.isLogin = false;
        state.phone = '';
        tokenMethod.removeValue();
      });
  },
});

const {actions, reducer: authReducer} = authSlice;

export const {setUser, logoutUser} = actions;
export default authReducer;

export const loginUser = createAsyncThunk('auth/login', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const response = await authServices.getUserInfo();
    if (response) {
      return response?.data?.record?.data?.[0];
    }
  } catch (error) {
    console.log(error);
    rejectWithValue(error);
  }
});
