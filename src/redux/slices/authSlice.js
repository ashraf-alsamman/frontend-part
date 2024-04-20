import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import API_BASE_URL from "../../config/config";

export const clearAuth = () => (dispatch) => {
  window.location.href = "/login";
};

export const login = createAsyncThunk(
  "login",
  async ({ email, password, rememberMe }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}auth/login`, {
        username: email,
        password,
      });
      const responseData = response.data;
      debugger;
      if (rememberMe) {
        localStorage.setItem("rememberMe", true);
        localStorage.setItem("token", responseData?.data?.accessToken); // Store token in local storage if rememberMe is true
      } else {
        localStorage.setItem("rememberMe", false);
      }
      return { data: responseData, rememberMe };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

const initialState = {
  token: null,
  auth: {},
  status: "idle",
  error: null,
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.auth = {};
      state.status = "idle";
      state.error = null;
      state.rememberMe = false;
      localStorage.removeItem("token"); // Remove token from local storage on logout
      localStorage.removeItem("rememberMe"); // Remove rememberMe from local storage on logout
    },
    removeToken: (state) => {
      localStorage.removeItem("token"); // Remove token from local storage
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
      localStorage.setItem("rememberMe", action.payload); // Store rememberMe in local storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.auth = action.payload.data;
        state.token = action.payload.data.data.accessToken;
        state.rememberMe = action.payload.rememberMe;
        // if (action.payload.rememberMe) {
        //   debugger
        //   localStorage.setItem('token', action.payload.data.accessToken); // Store token in local storage if rememberMe is true
        // } else {
        //   localStorage.removeItem('token');
        // }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const { logout, removeToken, setRememberMe } = authSlice.actions;

// const re =  localStorage.getItem('rememberMe')
// const whiteList = re == "true"? ['token', 'rememberMe']  :[ 'rememberMe']  ; // Add other routes if needed
const whiteList = ["ffff", "eee"];

//const persistedAuthSlice = persistReducer({ key: 'auth', storage }, authSlice.reducer);
const persistedAuthSlice = persistReducer(
  { key: "auth", storage, whitelist: whiteList },
  authSlice.reducer,
);

export default persistedAuthSlice;
