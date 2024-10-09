import { useForm } from "react-hook-form";
import "./style.scss";
import { ILoginRequest, useUserStore } from "./state";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginInput from "@/components/Form/ControllerLoginInput";
import LoginButton from "@/components/Form/LoginButton";
import LoginCheckbox from "@/components/Form/ControllerLoginCheckbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { requireMessage } from "@/utils/string.utils";

const schema = yup
  .object({
    username: yup.string().required(requireMessage("Tài khoản")),
    password: yup.string().required(requireMessage("Mật khẩu")),
  })
  .required();

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    // reset,
    // watch,
    // formState: { errors },
  } = useForm<ILoginRequest>({
    defaultValues: {
      username: "admin",
      password: "rennyka107",
    },
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const { login, is_logged, is_loading } = useUserStore();

  useEffect(() => {
    if (is_logged) {
      navigate("/");
    }
  }, [is_logged]);

  return (
    <div className="w-full flex justify-center items-center bg-no-repeat bg-full">
      <div className="left-banner-login h-[100vh] w-[50%] flex justify-center items-center">
        <img className="" src="/assets/login-frame.png" />
      </div>
      {/* <img
        className="h-[100vh] w-[60%]"
        src="/assets/login-page.png"
        alt="login page"
      /> */}
      <div className="h-[100vh] flex-1 flex flex-col justify-center items-center bg-login-bg">
        <div>
          <div className="flex gap-[8px] items-center">
            <div className="border-r border-r-logo-border pr-[14px]">
              <img alt="nbc logo" src="/assets/nbc-logo.png" />
            </div>
            <p className="m-0 text-secondart text-[1rem] font-['SVN-Regular']">
              Trung tâm Mã số, Mã vạch quốc gia
            </p>
          </div>
          <p className="m-0 mt-[1.5rem] text-[36px] text-first-black font-['SVN-SemiBold']">
            Hệ thống nhãn dán điện tử
          </p>
          <p className="m-0 mt-[20px] text-[20px] text-first-black font-['SVN-Medium']">
            (Digital Product Passport)
          </p>

          <form
            className="flex flex-col mt-[34px]"
            onSubmit={handleSubmit(login)}
          >
            <LoginInput
              name="username"
              control={control}
              placeholder="Tài khoản"
              inputAdditionClass="w-[550px]"
            />
            <LoginInput
              name="password"
              control={control}
              placeholder="Mật khẩu"
              type="password"
              inputAdditionClass="mt-[26px] w-[550px]"
            />
            <LoginCheckbox
              name="is_login_nbc_system"
              label="Nhớ mật khẩu"
              control={control}
            />
            <LoginButton
              title="Đăng nhập"
              twClassAddition="mt-[28px] font-['SVN-Medium']"
              type="submit"
              loading={is_loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
