import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  firstIcon?: React.ReactNode;
  lastIcon?: React.ReactNode;
  uiType?: "active" | "disabled" | "draft" | "waiting";
  additionClass?: string;
  absoluteChildNode?: React.ReactNode;
}

const BaseTag = ({
  label,
  uiType = "draft",
  additionClass,
  firstIcon,
  lastIcon,
  absoluteChildNode,
  ...divProps
}: Props) => {
  switch (uiType) {
    case "active":
      return (
        <div
          className={` ${
            additionClass ?? ""
          } w-[fit-content] flex items-center gap-1 bg-login-bg px-4 py-[7.5px] rounded text-login-button text-size-base lead-[14.7] font-['SVN-SemiBold']`}
          {...divProps}
        >
          {firstIcon}
          {label}
          {lastIcon}
          {absoluteChildNode ?? <></>}
        </div>
      );
    case "waiting":
      return (
        <div
          className={` ${
            additionClass ?? ""
          } w-[fit-content] flex items-center gap-1 bg-yellow-ff px-4 py-[7.5px] rounded text-yellow-ba text-size-base lead-[14.7] font-['SVN-SemiBold']`}
          {...divProps}
        >
          {firstIcon}
          {label}
          {lastIcon}
          {absoluteChildNode ?? <></>}
        </div>
      );
    case "disabled":
      return (
        <div
          className={` ${
            additionClass ?? ""
          } w-[fit-content] flex items-center gap-1 bg-red-fff4 px-4 py-[7.5px] rounded text-base-error text-size-base lead-[14.7] font-['SVN-SemiBold']`}
          {...divProps}
        >
          {firstIcon}
          {label}
          {lastIcon}
          {absoluteChildNode ?? <></>}
        </div>
      );
    default:
      return (
        <div
          className={` ${
            additionClass ?? ""
          } w-[fit-content] flex items-center gap-1 bg-grey-f6 px-4 py-[7.5px] rounded text-first-black text-size-base lead-[14.7] font-['SVN-SemiBold']`}
          {...divProps}
        >
          {firstIcon}
          {label}
          {lastIcon}
          {absoluteChildNode ?? <></>}
        </div>
      );
  }
};

export default BaseTag;
