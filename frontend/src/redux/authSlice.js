import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MONGODB_URI = "http://localhost:3002/users";

// Đăng ký user với kiểm tra email trùng lặp và giới hạn mật khẩu
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      // Kiểm tra định dạng mật khẩu
      if (userData.password.length < 6) {
        return rejectWithValue("Mật khẩu phải có ít nhất 6 ký tự.");
      }
      if (/\s/.test(userData.password)) {
        return rejectWithValue("Mật khẩu không được chứa khoảng trắng.");
      }

      // Kiểm tra email đã tồn tại chưa
      const checkEmailResponse = await axios.get(
        `${MONGODB_URI}?email=${userData.email}`
      );
      if (checkEmailResponse.data.length > 0) {
        return rejectWithValue(
          "Email đã tồn tại. Vui lòng sử dụng email khác."
        );
      }

      // Nếu không trùng email, tiến hành đăng ký
      const response = await axios.post(MONGODB_URI, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Đã có lỗi xảy ra khi đăng ký."
      );
    }
  }
);

// Đăng nhập user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${MONGODB_URI}?email=${email}&password=${password}`
      );
      if (response.data.length > 0) {
        return response.data[0];
      }
      return rejectWithValue("Email hoặc mật khẩu không đúng.");
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Đã có lỗi xảy ra khi đăng nhập."
      );
    }
  }
);

// Cập nhật thông tin user
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${MONGODB_URI}/${userData.id}`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Đã có lỗi xảy ra khi cập nhật."
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateProfile: (state, action) => {
      state.user = action.payload; // Cập nhật toàn bộ thông tin user
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update User
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
