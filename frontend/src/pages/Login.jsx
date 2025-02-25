import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/473997677_1134159091491874_3931925798968652860_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Tz6qFrjrpu4Q7kNvgGL1sSU&_nc_oc=AdghD65UPPaJyksp5Y2BlT-c6OzL3769Bpv_AEiwVtAiswc2W5Ct53ScNV1yFI8EiDc&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AnntGXOlHSzVH61_oImoVyf&oh=00_AYCwkP2w9PAdHedXlHPYuUhJ64dEDxyC_b54ljPHdKHkcA&oe=67C3541E", // Avatar mặc định
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(
        loginUser({ email: formData.email, password: formData.password })
      )
        .unwrap()
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    } else {
      dispatch(registerUser(formData))
        .unwrap()
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="w-full md:w-1/3 mx-auto my-20 p-12 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        {isLogin ? "Đăng nhập" : "Đăng ký"}
      </h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700">Họ tên</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required={!isLogin}
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Đang xử lý..." : isLogin ? "Đăng nhập" : "Đăng ký"}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
        <button
          className="text-blue-600 underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Đăng ký" : "Đăng nhập"}
        </button>
      </p>
    </div>
  );
};

export default Login;
