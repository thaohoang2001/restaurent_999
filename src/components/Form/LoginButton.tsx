import { ButtonHTMLAttributes } from "react";
import IconDotLoading from "../Icon/dot-loading";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  twClassAddition?: string;
  loading?: boolean;
}

const LoginButton = ({
  title,
  loading,
  twClassAddition,
  ...buttonProps
}: Props) => {
  return (
    <button
      className={
        `bg-login-button py-1 leading-8 px-[1rem] rounded-radius-base text-white text-size-base max-h-10 flex justify-center items-center ` +
        twClassAddition
      }
      {...buttonProps}
    >
      {loading ? <IconDotLoading /> : title}
    </button>
  );
};

export default LoginButton;
