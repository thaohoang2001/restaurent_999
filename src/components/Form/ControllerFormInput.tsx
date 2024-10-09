import { InputHTMLAttributes, useState } from "react";
import { Control, Controller } from "react-hook-form";
import IconError from "../Icon/error";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  control: Control<any>;
  twColor?: string;
  inputAdditionClass?: string;
  labelAdditionClass?: string;
  required?: boolean;
}

const ControllerFormInput = ({
  control,
  name,
  label,
  inputAdditionClass,
  labelAdditionClass,
  twColor,
  required,
  type,
  ...inputProps
}: Props) => {
  const [focused, setFocused] = useState<boolean>(false)
  const onInputFocus = () => setFocused(true)
  const onInputBlur = () => setFocused(false)

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, formState: { errors } }) => {
        return (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-[2px]">
              <label
                htmlFor={name}
                className={`${labelAdditionClass} font-['SVN-Regular'] text-secondart text-size-base leading-[22px]`}
              >
                {label && (field.value || focused ) ? label : ""}
                {label && field.value && required && <span className="text-base-error ml-1">*</span>}
              </label>
            </div>
            <div className="relative">
              <input
                placeholder={label && !focused ? `${label} (Bắt buộc)` : ""}
                className={`rounded-radius-6 text-size-base outline-none bg-grey-f6 border border-grey-f6 focus:bg-white focus:border focus:border-secondart py-[9px] pl-4 pr-[6px]  ${inputAdditionClass} ${inputAdditionClass} ${
                  errors[name] ? "!border-base-error" : ""
                }`}
                {...inputProps}
                {...field}
                onFocus={onInputFocus}
                onBlur={() => {
                  field.onBlur();
                  onInputBlur();
                }}
              />
              
            </div>
            {errors[name] && (
              <div className="text-base-error text-size-sm font-medium font-[SVN-Regular] flex items-center gap-1">
                <IconError /> {errors[name]?.message as string}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default ControllerFormInput;
