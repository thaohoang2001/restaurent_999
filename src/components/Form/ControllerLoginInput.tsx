import { InputHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";
import IconError from "../Icon/error";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  control: Control<any>;
  inputAdditionClass?: string;
}

const ControllerLoginInput = ({
  control,
  name,
  label,
  inputAdditionClass,
  ...inputProps
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, formState: { errors } }) => {
        console.log(errors, "errors");
        return (
          <div className="flex flex-col gap-1">
            <input
              className={`py-[14px] px-[1rem] text-size-base outline-none border border-login-border-input rounded-radius-base ${
                errors[name] ? "border-base-error" : ""
              } leading-4 font-['SVN-Regular'] text-first-black ${inputAdditionClass}`}
              {...inputProps}
              {...field}
            />
            {errors[name] && (
              <div className="text-base-error text-[13px] font-[SVN-Regular] flex items-center gap-1">
                <IconError /> {errors[name]?.message as string}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default ControllerLoginInput;
