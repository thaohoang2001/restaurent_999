import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  uiType?: "first" | "second" | "third" | "fourth";
  twClassAddition?: string;
}

const BaseButton = ({
  title,
  uiType = "first",
  twClassAddition,
  ...buttonProps
}: Props) => {
  switch (uiType) {
    case "second":
      return (
        <button
          type="button"
          className={
            `outline-none bg-login-bg rounded-radius-base px-4 py-[10px] font-["SVN-SemiBold"] text-size-medium lead-[15.75px] text-login-button disabled:bg-secondart disabled:text-login-bg ` +
            twClassAddition
          }
          {...buttonProps}
        >
          {title}
        </button>
      );
    case "third":
      return (
        <button
          type="button"
          className={
            `outline-none bg-grey-f6 rounded-radius-base px-4 py-[10px] font-["SVN-SemiBold"] text-size-medium lead-[15.75px] text-login-button disabled:bg-secondart disabled:text-login-bg ` +
            twClassAddition
          }
          {...buttonProps}
        >
          {title}
        </button>
      );
    case "fourth":
      return (
        <button
          type="button"
          className={
            `outline-none bg-grey-f6 rounded-radius-base px-4 py-[10px] font-["SVN-SemiBold"] text-size-medium lead-[15.75px] text-first-black disabled:bg-secondart disabled:text-login-bg ` +
            twClassAddition
          }
          {...buttonProps}
        >
          {title}
        </button>
      );
    default:
      return (
        <button
          type="button"
          className={
            `outline-none bg-login-button rounded-radius-base px-4 py-[10px] font-["SVN-SemiBold"] text-size-medium lead-[15.75px] text-login-bg disabled:bg-secondart disabled:text-login-bg ` +
            twClassAddition
          }
          {...buttonProps}
        >
          {title}
        </button>
      );
  }
};

export default BaseButton;
